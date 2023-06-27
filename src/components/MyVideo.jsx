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
            <tr className='border-b flex justify-between'>
                <td className='px-6 py-4 w-7/12 text-sm font-medium text-gray-900'>
                <img src={im} alt=""
                className='w-48 lg:w-96 md:w-96 xl:w-96'
                 />

                </td>
                <td className='px-6 py-4 w-5/12 text-sm font-medium text-gray-900 relative'>
                    <h1 className='text-black text-lg font-bold mb-4'>vuugggugug</h1>
                    <div className='w-full'>
                    <button
                    className='text-white absolute bottom-4 right-4 text-xs bg-red-600 hover:bg-red-700
                     font-bold py-1 px-1 float-right rounded cursor-pointer' 
                    >Delete</button>
                    </div>
                    
                </td>
            </tr>
            
        </tbody>

    </table>
    </div>
    
  )
}

export default MyVideo