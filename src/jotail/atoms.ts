import { atom } from "jotai";

/*現在の問題の答え*/
export const currentQuesionAnswerAtom  = atom("");
/*現在の問題の番号*/
export const currentQuesionNumberAtom = atom(0)

/* ユーザーが入力した値を格納するステート*/
export const userInputAtom = atom("");
/* ユーザーの残機用のステート */
export const userLifeAtom = atom(5);