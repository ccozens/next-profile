import { ReactNode } from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer/footer';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Chris Cozens</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
      </Head>
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
