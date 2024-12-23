'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Textbox() {
  const [userText, setUserText] = useState('');
  const router = useRouter();

  /* Called once user has stopped typing for 150ms */
  let handleInput = (e: any) => {
    setUserText(e.target.value);
    console.log(userText);
  }


  /* Embed query and route */
  let handleSubmit = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("Form submitted with input: " + userText);
      router.push(`/task?input=${encodeURIComponent(userText)}`);
    }, 10);
  }

  return (
    <div className="flex gap-3">
      <form autoComplete="off" className="p-3 bg-white border-2 border-neutral-800 rounded font-medium" onSubmit={handleSubmit} target="_blank">
        <input type="text" onChange={handleInput} className="p-3 outline-none text-black" name="user-text" placeholder="What're you gunna do now?" />
        <button className="px-3 py-0.5 text-white font-bold bg-black border-2 border-solid rounded border-black hover:text-black hover:bg-white" type="submit">{"->"}</button>
      </form>
    </div>
  )
}
