import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>

      <div className='text-center'>
        <h2 className='text-black-700 text-[42px] font-semibold'>Pick Your Perfect Plan</h2>
        <p className='text-gray-500 max-w-lg mx-auto'>Start free today, scale effortlessly, and unlock the ideal plan for your content creation journey.</p>
      </div>

      <div className='mt-14 max-sm:mx-8'>
        <PricingTable />
      </div>

    </div>
  )
}

export default Plan
