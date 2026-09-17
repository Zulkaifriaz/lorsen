import { Manrope, Work_Sans, Kalam } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Header3 from './Components/Header/Header3';
import Footer1 from './Components/Footer/Footer1';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: 'Lorsen Limited - Next Level Builders',
  description: 'Lorsen Limited designs and builds landmark buildings across the world — residential, commercial, industrial and infrastructure projects delivered to the highest standard.',
  openGraph: {
    title: 'Lorsen Limited - Next Level Builders',
    description: 'Lorsen Limited designs and builds landmark buildings across the world.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Lorsen Limited" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${work_sans.variable} ${kalam.variable}`}>
        <div className="main-page-area2">
          <Header3></Header3>
          {children}
          <Footer1></Footer1>
        </div>
      </body>
    </html>
  );
}
