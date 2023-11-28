"use client"
import React, { useEffect, useRef,useState} from 'react';
import Image from "next/image";
import Styles from "@/components/FormInput.module.scss"

import { useAtom } from "jotai";
import { currentQuesionAnswerAtom, currentQuesionNumberAtom, userInputAtom, userLifeAtom } from '@/jotail/atoms';
import { useRouter } from 'next/navigation'






export default function FormInput() {

const router = useRouter()
const inputRef = useRef<HTMLInputElement>(null)
const inputRefValue = inputRef.current as HTMLInputElement;

/*グローバルステート(ユーザーが回答した内容を保存する) */
const [userInput, setUserInput] = useAtom(userInputAtom);
/*グローバルステート(ユーザーの残機)*/
const [userLife,setuserLife] = useAtom(userLifeAtom);
/*グローバルステート(問題の答え)*/
const[answer,setAnswer] = useAtom(currentQuesionAnswerAtom);
/*グローバルステート(問題の番号)*/
const [qnumber,setQnumber] = useAtom(currentQuesionNumberAtom);

/* ユーザーの回答 */
const [userAnswer, setUserAnswer] = useState("")
const anserArr = [answer[qnumber -1]]



const postAnswer = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(userInput);
  console.log(anserArr[0]);
  setUserAnswer(userInput);


};

useEffect(()=>{
  if(userAnswer === "ひかきん"){
    console.log('ブンブン')
    router.push('/japanese/q2')
  }
},[userAnswer])



  return (
    
    <>
        <form action="" onSubmit={postAnswer} className={Styles.answerForm}>
            <input ref={inputRef} onChange={(e) => setUserInput(e.target.value)} inputMode="text" placeholder="Enterまたは改行で回答" className={Styles.answerFormInput} />
            <Image
            src="/heart.svg"
            width={20}
            height={20}
            alt="heart"
            />
            <p>×{userLife}</p>
        </form>
    </>

  )
}
