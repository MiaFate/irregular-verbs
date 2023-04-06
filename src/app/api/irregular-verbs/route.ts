
export function generateIrregularVerbs() {
  return [
    {
      "infinitive": "be",
      "pastSimple": "was/were",
      "pastParticiple": "been"
    },
    {
      "infinitive": "beat",
      "pastSimple": "beat",
      "pastParticiple": "beaten"
    },
    {
      "infinitive": "become",
      "pastSimple": "became",
      "pastParticiple": "become"
    },
    {
      "infinitive": "begin",
      "pastSimple": "began",
      "pastParticiple": "begun"
    },
    {
      "infinitive": "bite",
      "pastSimple": "bit",
      "pastParticiple": "bitten"
    },
    {
      "infinitive": "break",
      "pastSimple": "broke",
      "pastParticiple": "broken"
    },
    {
      "infinitive": "bring",
      "pastSimple": "brought",
      "pastParticiple": "brought"
    },
    {
      "infinitive": "build",
      "pastSimple": "built",
      "pastParticiple": "built"
    },
    {
      "infinitive": "buy",
      "pastSimple": "bought",
      "pastParticiple": "bought"
    },
    {
      "infinitive": "can",
      "pastSimple": "could",
      "pastParticiple": "-"
    },
    {
      "infinitive": "catch",
      "pastSimple": "caught",
      "pastParticiple": "caught"
    },
    {
      "infinitive": "choose",
      "pastSimple": "chose",
      "pastParticiple": "chosen"
    },
    {
      "infinitive": "come",
      "pastSimple": "came",
      "pastParticiple": "come"
    },
    {
      "infinitive": "cost",
      "pastSimple": "cost",
      "pastParticiple": "cost"
    },
    {
      "infinitive": "cut",
      "pastSimple": "cut",
      "pastParticiple": "cut"
    },
    {
      "infinitive": "do",
      "pastSimple": "did",
      "pastParticiple": "done"
    },
    {
      "infinitive": "draw",
      "pastSimple": "drew",
      "pastParticiple": "drawn"
    },
    {
      "infinitive": "dream",
      "pastSimple": "dreamt - dreamed",
      "pastParticiple": "dreamt - dreamed"
    },
    {
      "infinitive": "drink",
      "pastSimple": "drank",
      "pastParticiple": "drunk"
    },
    {
      "infinitive": "drive",
      "pastSimple": "drove",
      "pastParticiple": "driven"
    },
    {
      "infinitive": "eat",
      "pastSimple": "ate",
      "pastParticiple": "eaten"
    },
    {
      "infinitive": "fall",
      "pastSimple": "fell",
      "pastParticiple": "fallen"
    },
    {
      "infinitive": "feel",
      "pastSimple": "felt",
      "pastParticiple": "felt"
    },
    {
      "infinitive": "find",
      "pastSimple": "found",
      "pastParticiple": "found"
    },
    {
      "infinitive": "fly",
      "pastSimple": "flew",
      "pastParticiple": "flown"
    },
    {
      "infinitive": "forget",
      "pastSimple": "forgot",
      "pastParticiple": "forgotten"
    },
    {
      "infinitive": "get",
      "pastSimple": "got",
      "pastParticiple": "got"
    },
    {
      "infinitive": "give",
      "pastSimple": "gave",
      "pastParticiple": "given"
    },
    {
      "infinitive": "go",
      "pastSimple": "went",
      "pastParticiple": "gone"
    },
    {
      "infinitive": "grow",
      "pastSimple": "grew",
      "pastParticiple": "grown"
    },
    {
      "infinitive": "hang",
      "pastSimple": "hung",
      "pastParticiple": "hung"
    },
    {
      "infinitive": "have",
      "pastSimple": "had",
      "pastParticiple": "had"
    },
    {
      "infinitive": "hear",
      "pastSimple": "heard",
      "pastParticiple": "heard"
    },
    {
      "infinitive": "hit",
      "pastSimple": "hit",
      "pastParticiple": "hit"
    },
    {
      "infinitive": "hurt",
      "pastSimple": "hurt",
      "pastParticiple": "hurt"
    },
    {
      "infinitive": "keep",
      "pastSimple": "kept",
      "pastParticiple": "kept"
    },
    {
      "infinitive": "know",
      "pastSimple": "knew",
      "pastParticiple": "known"
    },
    {
      "infinitive": "learn",
      "pastSimple": "learnt",
      "pastParticiple": "learnt"
    },
    {
      "infinitive": "leave",
      "pastSimple": "left",
      "pastParticiple": "left"
    }
  ]
}

export async function GET(request: Request) {
  return new Response(JSON.stringify(generateIrregularVerbs()))
}