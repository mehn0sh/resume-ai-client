import { LucideLoaderCircle } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
      <LucideLoaderCircle className='animate-spin text-blue-700 w-10 h-10 mr-6 '/>
      Loading</div>
  )
}

export default Loading