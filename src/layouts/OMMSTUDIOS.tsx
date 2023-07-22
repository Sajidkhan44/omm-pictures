import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

export interface OMMSTUDIOSProps {
  children?: React.ReactNode;
  seo?: {
    pageTitle: string;
    description: string;
    url: string;
    // Add more properties if needed
  };
}

export default function OMMSTUDIOS({ children, seo }: OMMSTUDIOSProps) {
  return (
    <div className="">
      {seo && <Head pageTitle={seo.pageTitle} description={seo.description} url={seo.url} />}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
