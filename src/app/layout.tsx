import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})
 
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Carlos Vázquez — Fullstack Developer',
  description: 'Desarrollador Fullstack con más de 2 años de experiencia. Laravel, Next.js, React Native, TypeScript, Docker y más.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="es" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
