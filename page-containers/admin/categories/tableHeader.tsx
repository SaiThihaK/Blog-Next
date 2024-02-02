'use client';
import { Button } from 'antd';
import React from 'react';

const TableHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="font-semibold">Categories Table</h2>
      <Button type="default">Create Category</Button>
    </div>
  );
};

export default TableHeader;
