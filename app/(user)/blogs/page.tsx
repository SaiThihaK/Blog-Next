import Blogs from '@/page-containers/blogs';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blogs',
  openGraph: {
    title: 'Blogs',
  },
};

const Page: NextPage = () => {
  return <Blogs />;
};

export default Page;
