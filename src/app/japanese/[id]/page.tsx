"use client"
import FormInput from "@/components/FormInput";
import { QuestionType } from "@/types/type";
import { useEffect, useState } from "react";
import { userInputAtom } from "@/jotail/atoms";

import Styles from "@/app/japanese/[id]/page.module.scss"




export default function App() {
  const [japaneseQuestion,setJapaneseQuestion] =  useState([]);




  useEffect(() => {
    async function fetchAllJapaneseData() {
      const res = await fetch('http://localhost:3000/api/japanese',{
        cache: "no-store",//SSR
      });
      const data = await res.json();
      const dataArray = data.posts;
      const dataArrayQuesitonTitle = dataArray.map((item:QuestionType)=>{
        return item.questionTitle
      })
      console.log(dataArrayQuesitonTitle)
      setJapaneseQuestion(dataArrayQuesitonTitle)
    }
    
    fetchAllJapaneseData();

  },[]);

  return (
    <div>
      <p className={Styles.questionNumber}>第　問</p>
      {/* <p>{count}</p> */}
      <p className={Styles.questionTitle}>{japaneseQuestion}</p>
      <FormInput/>

    </div>
  );
}