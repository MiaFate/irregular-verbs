
import { generateIrregularVerbs } from './api/irregular-verbs/route';
import { Card } from './components/Card';

//export const dynamic = 60; esto genera una pagina cada 60 seg cuando un cliente accede a ella
//export const revalidate = Infinity;
export default function Home() {

  const verbos = generateIrregularVerbs();
  return (
    <main >
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 p-5">
        {verbos && verbos.map((verb) => (
          <Card key={verb.infinitive} verb={verb} />
        ))}
      </div>
    </main>
  )
}

