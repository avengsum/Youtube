import React from 'react'
import im from '../assets/im.jpg'
import UploadVideo from './UploadVideo'

const MyVideo = () => {
  return (
    <div className='max-w-2xl mx-auto p-4'>
        <table className='min-w-full'>
        <thead className='border-b'>
            <tr className='text-black flex justify-between'>
                <th className='text-md font-medium px-6 py-4 text-left'>Video</th>
                <th className='text-md font-medium px-6 py-4 text-left'>Option</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <div>
                <img src={im} alt=""
                className='w-48 lg:w-96 md:w-96 xl:w-96'
                 />
                </div>
                </td>
                <td className='px-6 py-4 w-5/12 text-sm font-medium text-gray-900 relative'>

                </td>
            </tr>
            
        </tbody>

    </table>
    </div>
    
  )
}

export default MyVideo