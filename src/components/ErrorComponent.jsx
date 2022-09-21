import React from 'react'

function ErrorComponent() {
  return (
    <div className='border-2 border-red-800 bg-white w-96 mt-2 h-36'>
      <h2 className='text-3xl font-semibold'>An Error was apeared</h2>
      <h4 className='mt-4 text-xl'>Please select another number</h4>
    </div>
  )
}

export default ErrorComponent