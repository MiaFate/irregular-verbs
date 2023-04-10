import './globals.css'
import { ServerThemeProvider } from '@wits/next-themes'
import { Montserrat } from 'next/font/google';
import { GlobalProvider } from './context/context';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Irregular Verbs',
  description: 'pagina para practicar los verbos irregulares en ingles',
  manifest: "/manifest.json",
  icons: {
    icon: ["/icon-192x192.png", "/icon-256x256.png", "/icon-384x384.png", "/icon-512x512.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <ServerThemeProvider attribute="class">
        <html lang="en" className={`${montserrat.variable}`}>
          <body className='bg-white text-black dark:bg-zinc-800 dark:text-gray-400 h-screen m-0'>
            <main className='max-h-full flex flex-col'>
              <header >
                <NavBar />
              </header>
              {children}
              <footer>
                <Footer />
              </footer>
            </main>
          </body>
        </html>
      </ServerThemeProvider>
    </GlobalProvider>
  )
}
