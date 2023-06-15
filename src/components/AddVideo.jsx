import { useFormik} from "formik"
import * as Yup from 'yup'

const AddVideo = () => {

    const formik = useFormik({
        initialValues:{
          tittle:'',
          description: '',
        },
        validationSchema:Yup.object({
            tittle:Yup.string().required('Required'),
            description:Yup.string().required('Required'),
        }),
        onSubmit:values => {
            JSON.stringify(values,null,2)
        }
    })

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
                <input id="title" name="title" type="text" />
                <label>Description</label>
                <input type="text" />
                <h1>Visibility</h1>
                <input type="radio" id="private" name="visibility" value="Private" />
                <label htmlFor="private">Private</label>
                <input type="radio" name="visibility" id="public" value="Public" />
                <label htmlFor="public">Public</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddVideo