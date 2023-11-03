import Link from "next/link";
import Nav from "../components/Nav";
import pb from "@/lib/pocketbase";
import InsertForm from "../components/InsertForm";


export default async function Insert () {

  return (
    <>
      <Nav />
      <main className='p-4 flex flex-col'>
        <section className='flex pb-4'>
          <Link className='std-link' href='/'>&larr; Back</Link>
        </section>
        <InsertForm />
      </main>
    </>
  );
}