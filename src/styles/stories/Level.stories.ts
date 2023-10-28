import { Meta } from "@storybook/react";
import Level from "./Level";

const meta:Meta<typeof Level> ={
    component:Level,
    title:"Level",
}

export default meta;
export  const BeginnerLevelLavel ={
    args:{
        variant:"初級"
    }
};

export const IntermediateLevelLavel={
    args:{
        variant:"中級"
    }
}

export const AdvancedLevelLavel ={
    args:{
        variant:"上級"
    }
}