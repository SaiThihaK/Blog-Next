'use client';
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import type { GetAllBlogPostsResponse, BlogPost } from '@/types/posts';
import { useGetBlogs } from '@/services/blog';
import TableHeader from './tableHeader';

const columns: TableProps<BlogPost>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: (_, c: any) => {
      return (
        <>
          <Tag color={'blue'} key={c.category.id}>
            {c.category.category}
          </Tag>
        </>
      );
    },
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

const AdminBlogs: React.FC = () => {
  const { data, isLoading, error } = useGetBlogs<GetAllBlogPostsResponse>();
  const tableData = data?.data.map((b) => {
    return {
      key: b.id,
      ...b,
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

export default AdminBlogs;
