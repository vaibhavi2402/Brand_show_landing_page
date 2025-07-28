import React from 'react'

const Contents = () => {
  return (
    <div className='flex justify-center items-center gap-9 h-[calc(100vh-75px)]'>
      <div className='flex flex-col gap-9'>
        <div>
          <p className='text-6xl font-bold'>YOUR FEET</p>
          <p className='text-6xl font-bold'>DESERVE</p>
          <p className='text-6xl font-bold'>THE BEST</p>
        </div>
        <p className='w-[304px] text-xs font-semibold text-[#5a5959]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='flex gap-3'>
          <button className='bg-[#D01C28] text-white px-3 py-1 cursor-pointer flex justify-center items-center text-sm'>Shop Now</button>
          <button className='border-1 border-[#5A5959] bg-transparent text-[#5A5959] px-3 py-1 flex justify-center items-center text-sm cursor-pointer font-semibold'>Category</button>
        </div>
        <div>
          <p className='text-xs text-[#5a5959] mb-[8px]'>Also available on</p>
          <div className='flex gap-3 items-center'>
            <img src="flipkart.png" alt="flipkart-logo" width={22} height={22} />
            <img src="amazon.png" alt="amazon-logo" width={22} height={22} />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src="shoe_image.png" alt="" width={400} height={357.06} />
      </div>
    </div>
  )
}

export default Contents
