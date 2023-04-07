import './globals.css'

export const metadata = {
  title: 'Irregular Verbs',
  description: 'pagina para practicar los verbos irregulares en ingles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
