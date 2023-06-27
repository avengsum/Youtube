import { Field, useFormik} from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'
import { add } from "../utilis/addVideoSlice"
import { useState } from "react"
import {database, storage} from "../firebase/firebase"
import { collection, doc , setDoc } from "firebase/firestore"
import { uploadBytes , ref , getDownloadURL } from "firebase/storage"

const AddVideo = () => {

    const selector = useSelector((state) => state.add.video)
    const dispatch = useDispatch()
    const validThumbnail = ['image/jpg','image/jpeg','image/png']
    const validVideo = ['video/x-matroska','video/mp4']
    const [videoValue , setVideoValue] = useState()
   

    const formik = useFormik({
        initialValues:{
          title:'',
          description: '',
          visibility:"",
          thumbnail:'',
          video:''
             },
        validationSchema:Yup.object({
            title:Yup.string().required('Required'),
            description:Yup.string().required('Required'),
            thumbnail:Yup.mixed().required("Required")
            .test('FILE_FORMAT' , "Uploaded file has unsuported format", 
            (value) => !value ||(value && validThumbnail.includes(value.type))
            ),
            video:Yup.mixed().required('Required')
            .test('FILE_FORMAT' , "Uploaded file has unsuported format" ,
            (value) => !value ||(value && validVideo.includes(value.type))
            )


        }),
        onSubmit: async (values) => {
            //if (formik.errors) {
           //   return;
           // }
           JSON.stringify(values,null,2)

           try {
            let thumbnailURL = '';
            let videoURL = '';
            if(values.thumbnail){
                const thumbnailRef = ref(storage,'thumbnails/'+values.thumbnail)
                await uploadBytes(thumbnailRef,values.thumbnail);
                console.log('Thumbnail uploaded successfully')
                thumbnailURL = await getDownloadURL(thumbnailRef);
            }
            
            if(values.video){
                const videoRef = ref(storage ,'videos/'+values.video)
                await uploadBytes(videoRef,values.video)
                console.log('Video uploaded successfully')
                videoURL = await getDownloadURL(videoRef)
            }


            const collectionRef = collection(database,'video-data')
            const newDocRef = doc(collectionRef)
            await setDoc(newDocRef,{
                title:values.title,
                description:values.description,
                visibility:values.visibility,
                thumbnail:thumbnailURL,
                video:videoURL
               })
               console.log('Upload successful! Document ID:', newDocRef.id);
           } catch (error) {
            console.log('Error uploading to Firebase:', error);
           }

          }
          
    })
    console.log(formik.values.video)

    return(
        <div className="flex items-center h-screen w-screen  bg-teal-400">
        <div className="w-full bg-white rounded shadow-lg m-4 pr-6 p-8   md:max-w-sm md:mx-auto ">
        <div>
                <p className="font-semibold text-center text-4xl">Add Video</p>
            </div>
         <form onSubmit={formik.handleSubmit}
         className="mb-4 md:fkex md:flex-wrap md:justify-between"
         >
            <div className="flex flex-col mb-4 md:w-full">
                <label
                className="mb-2 uppercase font-bold text-lg"
                >Title</label>
                <input
                className="border-2 py-2 px-3 text-gray-700"
                 id="title"
                onChange={formik.handleChange}
                 name="title" type="text" />
                 { formik.errors.title && <div className="text-red-500">{formik.errors.title}</div>}
            </div>
            <div className="flex flex-col mb-4" >
            <label
            className="mb-2 uppercase font-bold text-lg"
            >Description</label>
                <input className=" border-2 py-2 px-3 text-gray-700" type="text"
                id="description"
                name="description"
                onChange={formik.handleChange}
                 /> 
                { formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}
            </div>
            <div className="flex flex-col mb-4">
                <label className="uppercase mb-2 font-bold text-lg">Thumbnail</label>
                <input
                className="border-2 py-2 px-3 "
                 type="file"
                 name="thumbnail"
                 onChange={(event) => {
                    formik.setFieldValue('thumbnail',event.currentTarget.files[0])
                 }}
                 
                />
                { formik.errors.thumbnail && <div className="text-red-500">{formik.errors.thumbnail}</div>}
            </div>
            <div className="flex flex-col mb-4">
                <label className="uppercase mb-2 font-bold text-lg">Video</label>
                <input 
                className="border-2 py-2 px-3"
                type="file" 
                name="video"
                onChange={(event) => {
                    formik.setFieldValue('video',event.currentTarget.files[0])
                }}
                />
                { formik.errors.video && <div className="text-red-500">{formik.errors.video}</div>}
            </div>

            <div className="flex flex-col mb-4">
            <h1 className="mb-2 uppercase font-bold text-lg">Visibility</h1>
               <label htmlFor="private">
               <input 
               checked={formik.values.visibility === 'Private'} onChange={formik.handleChange} type="radio" name="visibility" value="Private" />
                Private
               </label>
                <label htmlFor="public">
                <input checked={formik.values.visibility === 'Public'} onChange={formik.handleChange} type="radio" name="visibility"  value="Public" />
                    Public
                </label>
            </div>

                
                <button
                className="block  bg-red-600 hover:bg-red-800 text-white uppercase text-lg mx-auto p-4 rounded"
                 type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default AddVideo