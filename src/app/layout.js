import Header from '@/components/Header/Header';
import './globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from '@/font';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
