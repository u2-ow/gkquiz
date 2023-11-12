"use client"
import FormInput from "@/components/FormInput";
import { QuestionType } from "@/types/type";
import { useEffect, useState } from "react";
import { userInputAtom } from "@/jotail/atoms";
import { usePathname, useParams } from 'next/navigation'

import Styles from "@/app/japanese/[id]/page.module.scss"
import quesitonControl from "@/app/lib/questions";






export default function App() {
  const [japaneseQuestion,setJapaneseQuestion] =  useState([]);
  /*動的パラメーターを取得*/
  const params = useParams()

  let currentQuestionNumber = quesitonControl(params);
  quesitonControl(params);


  useEffect(() => {
    /*データベースから問題を取得*/
    async function fetchAllJapaneseData() {
      const res = await fetch('http://localhost:3000/api/japanese',{
        cache: "no-store",//SSR
      });
      const data = await res.json();
      const dataArray = data.posts;
      const dataArrayQuesitonTitle = dataArray.map((item:QuestionType)=>{
        return item.questionTitle 
      })

      setJapaneseQuestion(dataArrayQuesitonTitle)
    }

    fetchAllJapaneseData();
  },[]);


  



  return (
    <div>
      <p className={Styles.questionNumber}>第{currentQuestionNumber}問</p>
      {/* <p>{count}</p> */}
      <p className={Styles.questionTitle}>{japaneseQuestion[ Number(currentQuestionNumber) - 1]}</p>
      <FormInput/>
    </div>
  );
}