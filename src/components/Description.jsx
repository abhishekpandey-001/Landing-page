import React from 'react'

const Description = () => {
  return (
    <div className='max-w-[60rem] mx-auto mb-20 px-[1.5rem]'>
      <h1 className='text-center text-6xl font-semibold max-[360px]:text-3xl'>Why Choose Us?</h1>
      <div className='grid grid-cols-2 py-2 mt-8 gap-5 text-xl max-w-[40rem] mx-auto marker:text-[#0E6F6A] px-3 max-[360px]:text-sm'>
        <div  className='grid grid-rows-3 gap-1.5'>
            <li>Real-time Feedback</li>
            <li>Version control that never loses track</li>
            <li>client-friendlly review experience</li>
        </div>

        <div className='grid grid-rows-3 leading-tight gap-1.5'>
            <li>Secure cloud storage</li>
            <li>Lightining-fast file processing</li>
            <li>Complete user credibility</li>
        </div>
      </div>
    </div>
  )
}

export default Description