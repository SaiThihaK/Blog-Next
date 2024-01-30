'use client';
import React, { useState } from 'react';
import { Button, Space, Switch, Tag } from 'antd';
import type { TablePaginationConfig, TableProps } from 'antd';
import type { GetAllBlogPostsResponse, BlogPost } from '@/types/posts';
import { useGetBlogs } from '@/services/blog';
import AdminTable from '@/components/shared/adminTable';
import AdminTableHeader from '@/components/shared/adminTableHeader';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

const limit = 8;

const AdminBlogs: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const columns: TableProps<BlogPost>['columns'] = [
    {
      title: 'Id',
      key: 'id',
      render: (_, c: BlogPost, index: number) => {
        return <span>{(currentPage - 1) * limit + index + 1}</span>;
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: (_, c: BlogPost) => {
        return (
          <Tag color="#108ee9" key={c.category.id}>
            {c.category.category}
          </Tag>
        );
      },
    },
    {
      title: 'Featured',
      key: 'featured',
      render: (_) => <Switch defaultChecked />,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, c: BlogPost) => {
        return <span>{dayjs(c.createdAt).format('YYYY-MM-DD, hh:mm A')}</span>;
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

  const { data, isLoading } = useGetBlogs<GetAllBlogPostsResponse>({
    page: currentPage,
    limit,
  });

  const tablePagination: TablePaginationConfig = {
    total: data?.total,
    current: currentPage,
    defaultCurrent: 1,
    pageSize: limit,
    onChange: (page) => {
      setCurrentPage(page);
    },
  };
  const onCreateBtnClick = () => {
    router.push('/admin/write');
  };
  return (
    <AdminTable
      loading={isLoading}
      columns={columns}
      dataSource={data?.data}
      pagination={tablePagination}
      header={
        <AdminTableHeader title="Blog Tables" onBtnClick={onCreateBtnClick} />
      }
    />
  );
};

export default AdminBlogs;
