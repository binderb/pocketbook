'use client';
import { useFormStatus } from "react-dom";
import { Flip, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { insert } from "../actions";
import FormSubmitButton from "./FormSubmitButton";

export default function InsertForm () {
  const { pending } = useFormStatus();

  const notify = (type:string,message:string) => {
    if (type === 'success') toast.success(message,{
      transition: Flip,
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
    if (type === 'error') toast.error(message,{
      transition: Flip,
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
  
  }

  async function handleInsert (formData:FormData) {
    try {
      await insert(formData);
      notify('success','Success!');
    } catch (e:any) {
      notify('error','Something went wrong!');
    }
    
  }
  
  return (
    <>
    <form className='box' action={handleInsert}>
      <h1>Insert Data</h1>
      <div className='flex items-center gap-2'>
        File Type:
        <select className='std-input' name='filetype'>
          <option value='amex'>Amex CSV</option>
        </select>
      </div>
      <div className='flex items-center gap-2'>
        File:
        <input type='file' name='file' className='std-upload' />
      </div>
      <div className='flex items-center gap-2'>
      <FormSubmitButton />
      </div>
    </form>
    <ToastContainer />
    </>
  );
  
}