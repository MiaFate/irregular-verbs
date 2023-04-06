"use client";

import { useState } from "react";
import { CardContent } from "./CardContent";
import { CardProps } from "../types"

export const Card: React.FC<CardProps> = ({ infinitive, pastSimple, pastParticiple }) => {
    const [face, setFace] = useState<"front" | "back">("front")

    const handlerClick = () => {
        face === "front" ? setFace("back") : setFace("front")
    }

    return (
        <div onClick={handlerClick}>
            <CardContent face={face} infinitive={infinitive} pastSimple={pastSimple} pastParticiple={pastParticiple} />
        </div>
    )

}

