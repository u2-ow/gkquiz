import { atom } from "jotai";

/* ユーザーが入力した値を格納するステート*/
export const userInputAtom = atom("");
/* ユーザーの残機用のステート */
export const userLifeAtom = atom(5);