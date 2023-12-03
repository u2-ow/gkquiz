"use client"
import FormInput from "@/components/FormInput";
import { QuestionType } from "@/types/type";
import { useEffect, useState } from "react";
import { currentQuesionAnswerAtom, currentQuesionNumberAtom, userInputAtom } from "@/jotail/atoms";
import { usePathname, useParams } from 'next/navigation'

import Styles from "@/app/japanese/[id]/page.module.scss"
import quesitonControl from "@/app/lib/questions";
import { useAtom } from "jotai";






export default function App() {
  /*問題を格納するステート*/
  const [japaneseQuestion,setJapaneseQuestion] =  useState([]);
  /*現在表示している問題の答えを格納するステート*/
  const [currentAnswer,setCurrentAnswer] = useAtom(currentQuesionAnswerAtom);
  /*現在表示している問題の番号*/
  const [currentQuestionNumber,setCurrentQuestionNumber] = useAtom(currentQuesionNumberAtom)

  /*動的パラメーターを取得*/
  const params = useParams()
  // let currentQuestionNumber = quesitonControl(params);
  useEffect(()=>{
    setCurrentQuestionNumber(quesitonControl(params))
    quesitonControl(params);
  },[])

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
      const dataArrayQuesitonAnswer = dataArray.map((item:QuestionType)=>{
        return item.questionAnswer 
      })
      setJapaneseQuestion(dataArrayQuesitonTitle)
      setCurrentAnswer(dataArrayQuesitonAnswer)

    }
    fetchAllJapaneseData();

  },[]);

  useEffect(()=>{
    currentAnswer[Number(currentQuestionNumber) - 1]
  },[currentAnswer, currentQuestionNumber])



  return (
    <div>
      <p className={Styles.questionNumber}>第{currentQuestionNumber}問</p>
      <p className={Styles.questionTitle}>{japaneseQuestion[ Number(currentQuestionNumber) - 1]}</p>
      <FormInput/>
    </div>
  );
}