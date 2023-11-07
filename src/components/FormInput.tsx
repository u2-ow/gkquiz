import React from 'react'
import Image from "next/image";
import Styles from "@/components/FormInput.module.scss"

export default function FormInput() {
  return (
    <>
        <form action="" className={Styles.answerForm}>
            <input type="text" placeholder="Enterまたは改行で回答" className={Styles.answerFormInput}  />
            <Image
            src="/heart.svg"
            width={30}
            height={30}
            alt="heart"
            />
        </form>
    </>

  )
}