'use client'

const paramsIdArray = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]

/* 問題の出題を制御 */
const quesitonControl = (params:any) => {
    let currentQuestionNumber = 0;
    for(let i = 0; i <= paramsIdArray.length; i ++){
        if(params.id === paramsIdArray[i]){
            currentQuestionNumber = i + 1;
            break
        } 
    }
    return currentQuestionNumber
}

export default quesitonControl