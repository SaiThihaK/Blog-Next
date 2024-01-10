import React from 'react';
import Featured from './featured';
import CategoryList from './categoryList';
import CardList from './cardList';
import Menu from './menu';

const Home = () => {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
