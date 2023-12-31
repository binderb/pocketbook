import Link from "next/link";
import Nav from "../(global components)/Nav";

export default async function Insert () {

  return (
    <>
      <Nav />
      <main className='p-4 flex flex-col'>
        <section className='flex pb-4'>
          <Link className='std-link' href='/'>&larr; Back</Link>
        </section>
      </main>
    </>
  );
}