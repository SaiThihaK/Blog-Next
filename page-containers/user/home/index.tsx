import React from 'react';
import Featured from './featured';
import CategoriesList from './categoriesList';
import PostCardsList from './postCardsList';
import Menu from './menu';

const Home = () => {
  return (
    <div className="grid col-span-1">
      <Featured />
      <CategoriesList />
      <div className="flex gap-[50px] mt-[50px] justify-between">
        <PostCardsList />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
