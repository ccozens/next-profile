import React, { ReactNode } from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer';
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
      </Head>
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
