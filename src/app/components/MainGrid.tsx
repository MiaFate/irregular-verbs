
"use client"
import { generateIrregularVerbs } from '../api/irregular-verbs/route';
import { useGlobalContext } from '../context/context';
import { Card } from './Card';


//export const dynamic = 60; esto genera una pagina cada 60 seg cuando un cliente accede a ella
//export const revalidate = Infinity;
export const MainGrid = () => {

  const { query } = useGlobalContext();
  const verbos = generateIrregularVerbs();

  const filteredVerbs =
    query === ''
      ? verbos
      : verbos.filter((verb) => {
        return verb.infinitive.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <div className={`flex flex-col md:grid md:grid-cols-3 gap-4 p-5 pt-0`}>
      {filteredVerbs.length ? filteredVerbs.map((verb, index) => (
        <Card className={filteredVerbs.length == 1 ? `md:col-start-${index + 2}` : ""} key={verb.infinitive} verb={verb} />
      ))
        :
        <div className='h-[120px] md:col-start-2'>
          <div className="flex flex-row h-full place-content-center place-items-center p-4 mb-1 bg-zinc-800  dark:bg-zinc-900 rounded-md shadow-lg select-none">
            <h2 className="cards-title font-bold text-yellow-50 dark:text-gray-300 capitalize">No verbs match</h2>
          </div>
        </div>
      }
    </div>
  )
}

