import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/globals.css'; 
import Layout from '@/layout/Layout';

// ✅ Corrected path (removed '/src')

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout> {/* Ensure Layout wraps the component */}
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
