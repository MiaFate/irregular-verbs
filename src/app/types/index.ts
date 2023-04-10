export interface Verb {
    infinitive: string;
    pastSimple: string;
    pastParticiple: string;
}
export interface CardContentProps extends CardProps {
    face: string;
}

export interface CardProps {
    verb: Verb;
    className?: string;
}