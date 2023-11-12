import React, { useRef } from 'react'
import Image from "next/image";
import Styles from "@/components/FormInput.module.scss"

import { useAtom } from "jotai";
import { userInputAtom, userLifeAtom } from '@/jotail/atoms';

export default function FormInput() {

const inputRef = useRef<HTMLInputElement>(null)
const inputRefValue = inputRef.current as HTMLInputElement;

/*グローバルステート(ユーザーが回答した内容を保存する) */
const [userInput, setUserInput] = useAtom(userInputAtom);
/*グローバルステート(ユーザーの残機)*/
const [userLife,setuserLife] = useAtom(userLifeAtom);





const postAnswer = (e: { preventDefault: () => any; })=>{
    console.log(userInput)
    inputRefValue.value = "";
    return e.preventDefault();
}

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