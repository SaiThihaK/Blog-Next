import Home from '@/page-containers/home';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    title: 'Home',
  },
};

const Page: NextPage = () => {
  return <Home />;
};

export default Page;
