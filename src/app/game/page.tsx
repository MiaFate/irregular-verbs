"use client"
import { useState } from 'react';
import { getRandomVerb, Verb } from '../utils/verbs';

type QuestionType = 'pastSimple' | 'pastParticiple';

export default function Home() {
  const [currentVerb, setCurrentVerb] = useState<Verb | null>(null);
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>('pastSimple');


  const handleNewVerb = () => {
    setCurrentVerb(getRandomVerb());
    setUserInput('');
    setAnswer('');
    setShowContinueButton(false);
    setCurrentQuestion(Math.random() < 0.5 ? 'pastSimple' : 'pastParticiple');
  };

  const handleCheckAnswer = () => {
    if (!currentVerb) return;

    if (currentQuestion === 'pastSimple' && currentVerb.pastSimple === userInput) {
      setAnswer('¡Correcto! La respuesta es el pasado simple');
    } else if (currentQuestion === 'pastParticiple' && currentVerb.pastParticiple === userInput) {
      setAnswer('¡Correcto! La respuesta es el participio pasado');
    } else {
      setAnswer(`Incorrecto. La respuesta es ${currentQuestion === 'pastSimple' ? currentVerb.pastSimple : currentVerb.pastParticiple}`);
    }

    setShowContinueButton(true);
  };

  const handleContinue = () => {
    handleNewVerb();
  }

  return (
    <div className="flex flex-col items-center align-middle place-self-center justify-center py-2 pt-5">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-20 text-center grow">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Irregular Verbs Game
        </h1>

        <div className="my-4 sm:my-8">
          {currentVerb ? (
            <h2 className="text-lg sm:text-2xl font-bold">
              What is the {currentQuestion === 'pastSimple' ? 'past simple' : 'past participle'} of "{currentVerb.infinitive}"?
            </h2>
          ) : (
            <button onClick={handleNewVerb} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start
            </button>
          )}
        </div>

        {currentVerb && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <input
              type="text"
              placeholder={`Enter the ${currentQuestion === 'pastSimple' ? 'past simple' : 'past participle'} here`}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full sm:w-96"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleCheckAnswer} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Check
            </button>
          </div>
        )}

        {answer && (
          <div className="flex flex-col items-center justify-center mt-4">
            <p>{answer}</p>
            <button onClick={handleNewVerb} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5">
              Continue
            </button>
          </div>
        )}

        {showContinueButton && !answer && (
          <div className="flex justify-center mt-4">
            <button onClick={handleContinue} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}