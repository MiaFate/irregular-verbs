import { CardContentProps } from "../types";

export const CardContent: React.FC<CardContentProps> = ({ face, infinitive, pastSimple, pastParticiple }) => {
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
            <div className="flex flex-row place-content-evenly p-4 mb-1 bg-slate-600 rounded-md shadow-lg">
                <h2 className="cards-title text-yellow-50">{infinitive}</h2>
                <h2 className="cards-title text-yellow-50">{pastSimple}</h2>
                <h2 className="cards-title text-yellow-50">{pastParticiple}</h2>
            </div>
        </>
    )
}