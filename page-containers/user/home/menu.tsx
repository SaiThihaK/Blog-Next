import MenuCategories from '@/components/shared/menuCategories';
import MenuPosts from '@/components/shared/menuPosts';
import React from 'react';

const Menu = () => {
  return (
    <div className="hidden lg:block flex-2 mt-[70px]">
      {/* <h2 className="text-slate-600 text-sm lg:text-base font-medium">
        {"What's hot?"}
      </h2>
      <h1 className="text-base lg:text-lg">Most Popular</h1>
      <MenuPosts withImages={false} /> */}
      <h2 className="text-slate-600 text-sm lg:text-base font-medium">
        Discover by topics
      </h2>
      <h1 className="text-base lg:text-lg">Categories</h1>
      <MenuCategories />
      <h2 className="text-slate-600 text-sm lg:text-base font-medium">
        Chosen by the editors
      </h2>
      <h1 className="text-base lg:text-lg">Editor Picks</h1>
      <MenuPosts />
    </div>
  );
};

export default Menu;
