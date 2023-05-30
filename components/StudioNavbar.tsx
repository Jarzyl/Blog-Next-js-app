import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-blue-500 flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 mr-2'/>
          Go To Website
        </Link>
        <div className='flex rounded-lg justify-center border-2 border-blue-600'>
        <h1 className='font-bold text-white text-3xl'> Welcome in the Sanity Studio!</h1>

        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar