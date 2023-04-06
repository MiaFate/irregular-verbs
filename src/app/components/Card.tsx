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
        return (<>
            {/* <div className="flex flex-col justify-between align-middle p-4 bg-zinc-800 rounded-md shadow-lg">
                <div className="card-header flex flex-col  mb-1 bg-zinc-800 rounded-md shadow-lg">
                    <h2 className="cards-title text-yellow-50">{infinitive}</h2>
                </div>
            </div> */}
            <div className="card-header flex flex-row justify-center p-4 mb-1 bg-zinc-800 rounded-md shadow-lg">
                <h2 className="cards-title text-yellow-50">{infinitive}</h2>
            </div>
        </>)
    }
    return (
        <>
            <div className="flex flex-row justify-around p-4 mb-1 bg-slate-600 text-yellow-100 align-middle">
                <p>{infinitive}</p>
                <p>{pastSimple}</p>
                <p>{pastParticiple}</p>
            </div>
        </>
    )
}