"use client"
import { QuestionType } from "@/types/type";
import { useEffect, useState } from "react";



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
      <p>{japaneseQuestion}</p>
      <h1>日本語の問題</h1>
    </div>
  );
}