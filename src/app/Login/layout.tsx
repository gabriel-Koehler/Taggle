'use client'
import { Component, ReactNode, useContext, useRef, useState } from "react";
import Input from "../components/Input";
import svg from "../../../public/user";
import { contextValues } from "@/context/ContextValuesProvider";

export default function loginLayout({children}:{children:ReactNode}) {
  const circle=useRef<SVGPathElement | null>(null);
  const context=useContext(contextValues);

  return (<>
    <div className="fixed w-full h-screen flex justify-center items-center">
      <div className="flex justify-evenly items-center gap-32">
        <div className=" flex w-[280px] flex-col justify-center items-center">
          {/* logoname */}
          <div className="relative size-72">
            <div
            style={{
              transform: `scale(${context?.circleScale})`,
              transformOrigin: "center",
              transition: "transform 1.5s ease-in-out",
              zIndex:"1000",
            }}
            className="absolute z-10 rounded-full bg-[#AE88F9] size-36"></div>
            <div className="absolute rounded-md top-12 left-12 z-0 bg-[#5F37AF] size-52"></div>
          </div>
          <h1 className="text-9xl font-bold" >Taggle</h1>
        </div>
        {/* ========================================================== */}
        <div className="flex-col items-center w-min flex gap-4">
          {/* login input */}
          {children}
          <h1>teste</h1>

        </div>
      </div>

    </div>
  </>)
}