'use client'
import { useEffect, useState } from "react"

interface PropsAlertNotification{
  info:string,
  title:string,
  haveButton:boolean
  status:"info" | "error" | "warning" | "success" 
  buttonActionText?: string,
  buttoncloseText?:string,
  onButtonClose?: () => void,
  onButtonAction?: () => void
}

export function AlertNotification(props: PropsAlertNotification){
  const [fade,setFade]=useState(false);

  useEffect(()=>{
    console.log("alert mounted");
    setFade(true);
  },[])
  useEffect(()=>()=>{
    console.log("alert destroy");
    setFade(false);
  },[])
  return <>
    <div className={(
      props.status=="success" ? "bg-sucess100 border-sucess400":
      props.status=="error" ? "bg-error100 border-error400":
      props.status=="warning" ? "bg-warning100 border-warning400":"bg-info100 border-info400") +
    (` p-4 flex w-[382px] rounded-md border z-50 absolute bottom-6 right-6 `)}>
  
      <div>
        <p className="font-title font-semibold text-xl">{props.title}</p>
        <p className="text-[14px]">{props.info}</p>
      </div>
      {
        props.haveButton ?
        <div className="flex gap-3">
          <button onClick={props.onButtonAction}>{props.buttonActionText}</button>
          <button onClick={props.onButtonClose}>{props.buttoncloseText}</button>
        </div>
        :
        null
      }
    </div>
  
  </>
}