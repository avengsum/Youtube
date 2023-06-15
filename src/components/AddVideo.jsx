import { Field, useFormik} from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'
import { add } from "../utilis/addVideoSlice"

const AddVideo = () => {

    const selector = useSelector((state) => state.add.video)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
          title:'',
          description: '',
          visibility:"",
          file:''     },
        validationSchema:Yup.object({
            title:Yup.string().required('Required'),
            description:Yup.string().required('Required'),
        }),
        onSubmit:values => {
            JSON.stringify(values,null,2)
            dispatch(add(values))
        }
    })
    console.log(selector)

    console.log(formik.values)

    return(
        <div className="flex items-center h-screen w-full bg-teal-400">
        <div className="w-full bg-white rounded shadow-lg m-4 p-8 md:max-w-sm md:mx-auto ">
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