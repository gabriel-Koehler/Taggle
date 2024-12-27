'use client'
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";


export default function appProvider({children}:{children:ReactNode}){
    const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return <>{children}</>;
  return(
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}