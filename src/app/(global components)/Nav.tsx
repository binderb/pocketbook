'use client';
import { signOut } from "next-auth/react";

export default function Nav () {
  
  return (
    <>
    <nav className='bg-[#3E3E3E] text-light px-4 w-full h-[50px] flex items-center justify-between border-b border-light'>
      <div className='font-bold'>Pocketbook</div>
      <button className='underline duration-200 transition-colors hover:text-secondaryhighlight' onClick={() => signOut()}>Logout</button>
    </nav>
    </>
  )
}