import pb, { authenticate } from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";


export default async function Login () {

  async function login (formData:FormData) {
    'use server';
    try {
      const result = await authenticate(formData.get('username') as string,formData.get('password') as string);
      const {record, token} = result;
      record.token = token;
      cookies().set('pb_auth', pb.authStore.exportToCookie());
    } catch (err:any) {
      console.log(JSON.stringify(err));
    }
    revalidatePath('/');
    redirect('/');
  }

  return (
    <>
      <section id='contact' className={`w-full h-screen bg-secondarylight bg-fixed bg-cover bg-center bg-[url('/images/studio.webp')] flex flex-col items-center gap-6 pt-12 pb-12`}>
      <div className='flex flex-col gap-2 items-center'>
        <div className='text-dark text-[32px] font-bold'>Pocketbook</div>
        <div className='font-light text-[24px]'>Login</div>
      </div>
      <form action={login} className='flex flex-col gap-2 bg-white/40 rounded-xl border border-secondary p-4 text-dark'>
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