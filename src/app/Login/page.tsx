'use client'
import { useRef, useState } from "react";
import Input from "../_components/Input";
import svg from "../../../public/user";

export default function loginPage() {
  const circle = useRef<SVGPathElement | null>(null);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [scale, setScale] = useState(1); // Estado para controlar a escala do círculo


  return (<>

  </>)
}
