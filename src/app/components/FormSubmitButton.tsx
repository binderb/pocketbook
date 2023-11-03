'use client';
import { useFormStatus } from "react-dom";

export default function FormSubmitButton () {
  const { pending } = useFormStatus();
  
  return (
    <>
    <button className='primary-button' disabled={pending}>
      {pending ? (
        <>
          Submitting...
        </>
      ):(
        <>
          Submit
        </>
      )}
    </button>
    </>
  );
  
}