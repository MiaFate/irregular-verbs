"use client";

import { useState } from "react";

interface CardProps {
    "infinitive": string;
    "pastSimple": string;
    "pastParticiple": string;
}
interface CardContentProps extends CardProps {
    face: string;
}

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

const CardContent: React.FC<CardContentProps> = ({ face, infinitive, pastSimple, pastParticiple }) => {
    if (face === "front") {
        return (
            <>
                <div className="flex flex-row place-content-center p-4 mb-1 bg-zinc-800 rounded-md shadow-lg">
                    <h2 className="cards-title text-yellow-50">{infinitive}</h2>
                </div>
            </>)
    }
    return (
        <>
            <div className="flex flex-row place-content-evenly p-4 mb-1 bg-slate-600  rounded-md shadow-lg">
                <h2 className="cards-title text-yellow-50">{infinitive}</h2>
                <h2 className="cards-title text-yellow-50">{pastSimple}</h2>
                <h2 className="cards-title text-yellow-50">{pastParticiple}</h2>
            </div>
        </>
    )
}