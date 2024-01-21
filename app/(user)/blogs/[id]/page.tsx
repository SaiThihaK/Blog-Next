import SinglePost from '@/page-containers/singlePost';
import { Metadata, NextPage } from 'next';
import React from 'react';

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const response = await fetch(
    `http://localhost:3000/api/blogs/${params.id}`
  ).then((res) => res.json());
  const blogData = response.data;
  return {
    title: blogData.title,
    openGraph: {
      images: [blogData.image],
    },
  };
};

const Page: NextPage = () => {
  return <SinglePost />;
};

export default Page;
