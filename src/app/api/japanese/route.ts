import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


//データベースに接続
export async function main(){
    try{    
        await prisma.$connect();
    }catch(erro){
        return('DB接続に失敗しました。')
    }
}


//国語の問題を取得
export const GET = async(req:Request,res:NextResponse) =>{
    try{
        await main();
        const posts = await prisma.japanese.findMany();
        return NextResponse.json({message:"Success",posts},{status:200})
    }catch(err){
        return NextResponse.json({message:"Error",err},{status:500})
    }finally{
        await prisma.$disconnect();
    }
}

