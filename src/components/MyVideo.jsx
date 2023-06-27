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
            <UploadVideo />

    </table>
    </div>
    
  )
}

export default MyVideo