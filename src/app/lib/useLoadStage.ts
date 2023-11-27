import { currentQuesionAnswerAtom, currentQuesionNumberAtom } from '@/jotail/atoms';
import { useAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export const useLoadStage =()=>{
    const questionArray = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"];
    /*グローバルステート(問題の答え)*/
    const[answer,setAnswer] = useAtom(currentQuesionAnswerAtom);
    /*グローバルステート(問題の番号)*/
    const [qnumber,setQnumber] = useAtom(currentQuesionNumberAtom);

    const [userAnswer, setUserAnswer] = useState("")

    const router = useRouter()
    console.log(answer)

    // if(anserArr && userAnswer === anserArr[0]){
    //     for(let i = 0; i< questionArray.length; i++){
    //         if(params.id == questionArray[i]){
                
    //             console.log('hello')
    //             return
    //         }
    //     }
    // }

    useEffect(()=>{
        console.log('回答を更新')
        console.log('loadStageの関数！！！')

    },[userAnswer,router])

//     useEffect(() => {
//         //   console.log('回答を更新');
//         //   // if (userAnswer === anserArr[0]) {
//         //   //   // router.push('/japanese/q2');
//         //   //   loadStage(params,userAnswer);
//         //   // }
          
//         // }, [userAnswer, router]);
// }
}



