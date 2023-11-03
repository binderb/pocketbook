'use server';
import pb from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as csv from 'csv/sync';

export async function logout () {
  cookies().delete('pb_auth');
  redirect('/login');
}

export async function insert (formData:FormData) {
  try {
    const file = formData.get('file') as File;
    const fileContents = await file.text();
    const data = csv.parse(fileContents);

    const filetype = formData.get('filetype') as string;
    let entriesToAdd = [];
    if (filetype === 'amex') {
      entriesToAdd = data.map((row:string[])=> ({
        date: row[0],
      }));
    }

    console.log(entriesToAdd);

    // const fileContents = fs.readFileSync(file,);


    // const folio = await pb.collection('Folios').getFirstListItem(`name="${formData.get('folio')}"`);
    // console.log(folio);
    // const newImage = await pb.collection('Images').create({
    //   image: formData.get('file'),
    //   title: formData.get('title'),
    //   description: formData.get('description')
    // });
    // const updatedFolio = await pb.collection('Folios').update(folio.id,{'images+':newImage.id});
  } catch (err:any) {
    revalidatePath('/admin');
    throw err;
  }
  
}