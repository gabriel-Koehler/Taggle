'use client'
import ContextValuesProvider from "@/context/ContextValuesProvider";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";


export default function appProvider({children}:{children:ReactNode}){
    const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return <>{children}</>;
  return(
    <ContextValuesProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </ContextValuesProvider>
    
  )
}