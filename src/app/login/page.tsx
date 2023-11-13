'use client';
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';
import { redirect, useRouter } from "next/navigation";
import { login } from "../actions";


export default function Login () {
  const router = useRouter();

  async function handleLogin (formData:FormData) {
    const result = await login(formData);
    console.log(result);
    router.push('/');
  }

  return (
    <>
      <section id='contact' className={`w-full h-screen bg-secondarylight flex flex-col items-center gap-6 pt-12 pb-12`}>
      <div className='flex flex-col gap-2 items-center'>
        <div className='text-dark text-[32px] font-bold'>Pocketbook</div>
        <div className='font-light text-[24px]'>Login</div>
      </div>
      <form action={handleLogin} className='flex flex-col gap-2 bg-white/40 rounded-xl border border-secondary p-4 text-dark'>
        <div className='flex items-center justify-between gap-2'>
          <div className='font-bold'>Username:</div>
          <input name='username' type='text' className='std-input w-[60%]' />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <div className='font-bold'>Password:</div>
          <input name='password' type='password' className='std-input w-[60%]' />
        </div>
        <div className='flex justify-center pt-4'>
          <button className='primary-button min-w-[150px]'>Log In</button>
        </div>
        
      </form>
    </section>

    </>
  );
}