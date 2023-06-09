import { useState ,useEffect } from 'react'
import { database } from '../firebase/firebase'
import { collection, getDocs ,doc, deleteDoc } from 'firebase/firestore'

import Player from './Player';


const UploadVideo = () => {

    const [uploadData,setUploadData] = useState([])
    const [del,setDel] = useState(false)

    const getAllData = async () => {
        const querySnapshot = await getDocs(collection(database, 'video-data'));
        
        const allData = querySnapshot.docs.map((doc) => {
          if (doc.exists()) {
            return {
              id: doc.id,
              data: doc.data()
            };
          } else {
            // Handle the case where the document doesn't exist
            console.log("Document doesn't exist");
            return null;
          }
        });
        
        setUploadData(allData)
      };

      const deleteData = (id) => {
        const delRef = doc(database,'video-data',id)
        deleteDoc(delRef)
        .then(() => {
          console.log("Document deleted")
        })
        setDel((x) => !x)
        .catch(err => {
          console.log(err)
        })
      }

      useEffect(() => {
        getAllData();
      },[del])

      console.log(uploadData)

    return(
        <tbody>
        {(uploadData.map((x) => (
        <tr key={x.id} className='border-b flex justify-between'>
                <td className='px-6 py-4 w-7/12 text-sm font-medium text-gray-900'>
                <Player value={x} />

                </td>
                <td className='px-6 py-4 w-5/12 text-sm font-medium text-gray-900 relative'>
                    <h1 className='text-black text-md font-semibold mb-4'>{x.data.title}</h1>
                    <div className='w-full'>
                    <button
                    className='text-white absolute bottom-4 right-4 text-xs bg-red-600 hover:bg-red-700
                     font-bold py-1 px-1 float-right rounded cursor-pointer' 
                     onClick={() => deleteData(x.id)}
                    >Delete</button>
                    </div>    
                </td>
                </tr>
            )))}
           
           </tbody>
    )
}

export default UploadVideo