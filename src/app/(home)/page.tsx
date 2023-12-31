import Image from 'next/image'
import Nav from '../(global components)/Nav'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <Nav />
    <main className='p-4 flex flex-col'>
      <section className='flex'>
        <Link className='std-button-lite' href='/insert'>
          <FaPlus />
          Add Data
        </Link>
      </section>
      
    </main>
    
    </>
  )
}
