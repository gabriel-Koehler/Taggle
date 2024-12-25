'use client'
import Link from "next/link";

import { useState } from "react";
import Tiptap from "./components/TipTap";
export default function defaultPage() {
  const [record, setRecord] = useState({ title: '', body: '' });

  const handleSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  return (
    <>
      <div className="flex gap-4">
        <h1 className="font-title text-4xl " >This Defalut Page</h1>
        <Link className="font-body " href="/Login" >login</Link>
    <Tiptap></Tiptap>
      </div>
    </>
  )
}
