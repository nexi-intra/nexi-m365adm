"use client"

import { APPNAME } from "@/global";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home(){
    useEffect(() => {
   redirect("/"+APPNAME)
    }, [])
    
    return <div>
       
    </div>
}