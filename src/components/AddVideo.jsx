import { Field, useFormik} from "formik"
import { useSelector } from "react-redux"
import * as Yup from 'yup'

const AddVideo = () => {

    const selector = useSelector((state) => state.add.video)

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
        }
    })

    console.log(formik.values)

    return(
        <div>
            <div>
                <img className="w-16 "
                 src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                <p className="font-semibold text-2xl"
                >name</p>
                <p className="font-medium  text-gray-600">email</p>
            </div>
            <nav>
                <ul>
                    <li>Upload</li>
                    <li>Video</li>
                </ul>
            </nav>
            <div>
                <p className="font-semibold text-4xl">Video Details</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <label>Title</label>
                <input id="title"
                onChange={formik.handleChange}
                 name="title" type="text" />
                <label>Description</label>
                <input type="text"
                id="description"
                name="description"
                onChange={formik.handleChange}
                 />
                <h1>Visibility</h1>
               <label htmlFor="private">
               <input checked={formik.values.visibility === 'Private'} onChange={formik.handleChange} type="radio" name="visibility" value="Private" />
                Private
               </label>
                <label htmlFor="public">
                <input checked={formik.values.visibility === 'Public'} onChange={formik.handleChange} type="radio" name="visibility"  value="Public" />
                    Public
                </label>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddVideo