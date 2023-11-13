'use server';
import pb, { authenticate } from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
// import * as csv from 'csv/sync';

const sleep = (delay:number) => new Promise((resolve) => setTimeout(resolve, delay))

export async function login (formData:FormData) {
  try {
    const result = await authenticate(formData.get('username') as string,formData.get('password') as string);
    const {record, token} = result;
    record.token = token;
    console.log('token: ',token);
    cookies().set('pb_auth', pb.authStore.exportToCookie());
    return 'success';
  } catch (err:any) {
    console.log(JSON.stringify(err));
  }
}

export async function logout () {
  cookies().delete('pb_auth');
  redirect('/login');
}

export async function insert (formData:FormData) {
  try {
    console.log('test action successful.');
    // const file = formData.get('file') as File;
    // const fileContents = await file.text();
    // const data = csv.parse(fileContents);

    // const filetype = formData.get('filetype') as string;
    // let entriesToAdd = [];
    // if (filetype === 'amex') {
    //   entriesToAdd = data.map((row:string[])=> ({
    //     date: row[0],
    //   }));
    // }

    // console.log(entriesToAdd);

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