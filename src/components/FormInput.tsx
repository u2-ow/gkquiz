"use client"
import React, { useEffect, useRef } from 'react'
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

const[answer,setAnswer] = useAtom(currentQuesionAnswerAtom)
const [qnumber,setQnumber] = useAtom(currentQuesionNumberAtom)



const postAnswer = (e: React.FormEvent) => {
  inputRefValue.value = "";
  e.preventDefault();
  setUserInput('')
  // console.log([qnumber - 1]); 
};


useEffect(() => {
  if (answer) {
    setAnswer(answer[qnumber - 1]);
  }
}, []);
useEffect(() => {
  // userInputがanswerと一致する場合の処理


  if (userInput === answer && userInput !== '') {
    setUserInput('');
    console.log('レンダリングされました')
  }
}, [userInput, answer]);



  return (
    
    <>
        <form action="" onSubmit={postAnswer} className={Styles.answerForm}>
            <input value={userInput} ref={inputRef} onChange={(e) => setUserInput(e.target.value)} inputMode="text" placeholder="Enterまたは改行で回答" className={Styles.answerFormInput} />
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




  // if(userInput === answer){
  //   console.log('正解！')
  //   inputRefValue.value = "";
  //   router.push('/')
  // }