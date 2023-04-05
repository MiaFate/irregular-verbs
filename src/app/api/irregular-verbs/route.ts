export async function GET(request: Request) {
  const verbsList = [
    {
      "be": {
        "infinitive": "be",
        "past-simple": "was/were",
        "past-participle": "been"
      },
    },
    {
      "beat": {
        "infinitive": "beat",
        "past-simple": "beat",
        "past-participle": "beaten"
      },
    },
    {
      "become": {
        "infinitive": "become",
        "past-simple": "became",
        "past-participle": "become"
      },
    },
    {
      "begin": {
        "infinitive": "begin",
        "past-simple": "began",
        "past-participle": "begun"
      },
    },
    {
      "bite": {
        "infinitive": "bite",
        "past-simple": "bit",
        "past-participle": "bitten"
      },
    },
    {
      "break": {
        "infinitive": "break",
        "past-simple": "broke",
        "past-participle": "broken"
      },
    },
    {
      "bring": {
        "infinitive": "bring",
        "past-simple": "brought",
        "past-participle": "brought"
      },
    },
    {
      "build": {
        "infinitive": "build",
        "past-simple": "built",
        "past-participle": "built"
      },
    },
    {
      "buy": {
        "infinitive": "buy",
        "past-simple": "bought",
        "past-participle": "bought"
      },
    },
    {
      "can": {
        "infinitive": "can",
        "past-simple": "could",
        "past-participle": "-"
      },
    },
    {
      "catch": {
        "infinitive": "catch",
        "past-simple": "caught",
        "past-participle": "caught"
      },
    },
    {
      "choose": {
        "infinitive": "choose",
        "past-simple": "chose",
        "past-participle": "chosen"
      },
    },
    {
      "come": {
        "infinitive": "come",
        "past-simple": "came",
        "past-participle": "come"
      },
    },
    {
      "cost": {
        "infinitive": "cost",
        "past-simple": "cost",
        "past-participle": "cost"
      },
    },
    {
      "cut": {
        "infinitive": "cut",
        "past-simple": "cut",
        "past-participle": "cut"
      },
    },
    {
      "do": {
        "infinitive": "do",
        "past-simple": "did",
        "past-participle": "done"
      },
    },
    {
      "draw": {
        "infinitive": "draw",
        "past-simple": "drew",
        "past-participle": "drawn"
      },
    },
    {
      "dream": {
        "infinitive": "dream",
        "past-simple": "dreamt (also dreamed)",
        "past-participle": "dreamt (also dreamed)"
      },
    },
    {
      "drink": {
        "infinitive": "drink",
        "past-simple": "drank",
        "past-participle": "drunk"
      },
    },
    {
      "drive": {
        "infinitive": "drive",
        "past-simple": "drove",
        "past-participle": "driven"
      },
    },
    {
      "eat": {
        "infinitive": "eat",
        "past-simple": "ate",
        "past-participle": "eaten"
      },
    },
    {
      "fall": {
        "infinitive": "fall",
        "past-simple": "fell",
        "past-participle": "fallen"
      },
    },
    {
      "feel": {
        "infinitive": "feel",
        "past-simple": "felt",
        "past-participle": "felt"
      },
    },
    {
      "find": {
        "infinitive": "find",
        "past-simple": "found",
        "past-participle": "found"
      },
    },
    {
      "fly": {
        "infinitive": "fly",
        "past-simple": "flew",
        "past-participle": "flown"
      },
    },
    {
      "forget": {
        "infinitive": "forget",
        "past-simple": "forgot",
        "past-participle": "forgotten"
      },
    },
    {
      "get": {
        "infinitive": "get",
        "past-simple": "got",
        "past-participle": "got"
      },
    },
    {
      "give": {
        "infinitive": "give",
        "past-simple": "gave",
        "past-participle": "given"
      },
    },
    {
      "go": {
        "infinitive": "go",
        "past-simple": "went",
        "past-participle": "gone"
      },
    },
    {
      "grow": {
        "infinitive": "grow",
        "past-simple": "grew",
        "past-participle": "grown"
      },
    },
    {
      "hang": {
        "infinitive": "hang",
        "past-simple": "hung",
        "past-participle": "hung"
      },
    },
    {
      "have": {
        "infinitive": "have",
        "past-simple": "had",
        "past-participle": "had"
      },
    },
    {
      "hear": {
        "infinitive": "hear",
        "past-simple": "heard",
        "past-participle": "heard"
      },
    },
    {
      "hit": {
        "infinitive": "hit",
        "past-simple": "hit",
        "past-participle": "hit"
      },
    },
    {
      "hurt": {
        "infinitive": "hurt",
        "past-simple": "hurt",
        "past-participle": "hurt"
      },
    },
    {
      "keep": {
        "infinitive": "keep",
        "past-simple": "kept",
        "past-participle": "kept"
      },
    },
    {
      "know": {
        "infinitive": "know",
        "past-simple": "knew",
        "past-participle": "known"
      },
    },
    {
      "learn": {
        "infinitive": "learn",
        "past-simple": "learnt",
        "past-participle": "learnt"
      },
    },
    {
      "leave": {
        "infinitive": "leave",
        "past-simple": "left",
        "past-participle": "left"
      },
    },

  ]
  return new Response(JSON.stringify(verbsList))
}
