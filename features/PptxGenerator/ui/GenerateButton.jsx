import React from "react";

import { generatePptx } from "../api/generatePptx";
import { slidesData } from "../model/pptx";
import { Button } from "@/shared/ui/Button";


export const GenerateButton = () => {
    const handleClick = () => {
        generatePptx(slidesData);
    };

    return <Button 
        onClick={handleClick}
        color='filled'
    >
        Сформировать презентацию
    </Button>;
};