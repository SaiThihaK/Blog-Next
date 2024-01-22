'use client';
import React from 'react';
import { Badge, Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useGetCategory } from '@/services/category';
import { GetAllCateogriesResponse } from '@/types/category';
import TableHeader from './tableHeader';

const columns: TableProps<any>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Color',
    key: 'color',
    render: (_) => (
      <div className="w-[20px] h-[20px] rounded-md bg-green-500"></div>
    ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Space size="middle">
        <Button type="default">Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];

const AdminCategories = () => {
  const { data, isLoading, error } = useGetCategory<GetAllCateogriesResponse>();
  const tableData = data?.data.map((c) => {
    return {
      key: c.id,
      ...c,
    };
  });
  return (
    <>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={tableData}
        bordered
        title={() => <TableHeader />}
      />
    </>
  );
};

export default AdminCategories;
