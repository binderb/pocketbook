'use client';
import { logout } from "../actions";

export default function Nav () {
  
  return (
    <>
    <nav className='bg-secondarylight text-dark px-4 w-full h-[50px] flex items-center justify-between'>
      <div className='font-bold'>Pocketbook</div>
      <button className='underline duration-200 transition-colors hover:text-secondaryhighlight' onClick={() => logout()}>Logout</button>
    </nav>
    </>
  )
}