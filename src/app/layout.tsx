import './globals.css'
import { Montserrat } from 'next/font/google';

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
    <html lang="en" className={`${montserrat.variable}`}>
      <body className='bg-white text-black dark:bg-zinc-800 dark:text-gray-400'>{children}</body>
    </html>
  )
}
