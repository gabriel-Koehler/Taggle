'use client'
import Link from "next/link";

import { useLayoutEffect, useState } from "react";
import Tiptap from "./_components/TipTap";
import { useRouter } from "next/navigation";
export default function defaultPage() {
  const route = useRouter();
  useLayoutEffect(() => {
    route.push('/Login/Sign-In')
  }, [])
  return (
    <></>
  )
}
