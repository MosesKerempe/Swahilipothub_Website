import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global CSS

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
