'use client';
import React, { useState, useTransition } from 'react';
import { Button, Modal, Space, Switch, Tag } from 'antd';
import type { TablePaginationConfig, TableProps } from 'antd';
import type { GetAllBlogPostsResponse, BlogPost } from '@/types/posts';
import { useDeleteBlogs, useGetBlogs, useUpdateBlog } from '@/services/blog';
import AdminTable from '@/components/shared/adminTable';
import AdminTableHeader from '@/components/shared/adminTableHeader';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/lib/utils';

const limit = 8;

const AdminBlogs: React.FC = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modal, modalContext] = Modal.useModal();

  const { data, isLoading, mutate } = useGetBlogs<GetAllBlogPostsResponse>({
    page: currentPage,
    limit,
  });

  const { trigger: deleteBlog } = useDeleteBlogs();
  const { trigger: updateBlog, isMutating } = useUpdateBlog();

  const confirmDeleteBlog = (id: string) => {
    modal.confirm({
      title: 'Do you confirm to delete this blog? ',
      onOk: async () => {
        await deleteBlog(
          { id: id },
          {
            onSuccess: () => {
              mutate();
            },
          }
        );
      },
    });
  };

  const confirmUpdateBlog = (values: any) => {
    updateBlog(values, {
      onSuccess: () => {
        mutate();
      },
    });
  };

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
    startTransition(() => {
      router.push('/admin/write');
    });
  };
  const columns: TableProps<BlogPost>['columns'] = [
    {
      title: 'No',
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
          <Tag color={c.category.color} key={c.category.id}>
            {c.category.category.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Top Post',
      key: 'topPost',
      render: (_, c: BlogPost) => (
        <Switch
          disabled={isMutating}
          checked={c.topPost}
          onChange={(e) => {
            confirmUpdateBlog({
              id: c.id,
              title: c.title,
              desc: c.desc,
              image: c.image,
              email: c.userEmail,
              topPost: e,
              categoryId: c.categoryId,
            });
          }}
        />
      ),
    },
    {
      title: 'Featured',
      key: 'featured',
      dataIndex: 'feature',
      render: (_, c: BlogPost) => (
        <Switch
          disabled={isMutating}
          checked={c.feature}
          onChange={(e) => {
            confirmUpdateBlog({
              id: c.id,
              title: c.title,
              desc: c.desc,
              image: c.image,
              email: c.userEmail,
              topPost: c.topPost,
              feature: e,
              categoryId: c.categoryId,
            });
          }}
        />
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, c: BlogPost) => {
        return <span>{formatDate(c.createdAt, 'YYYY-MM-DD, hh:mm A')}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, c) => (
        <Space size="middle">
          <Button type="default">Edit</Button>
          <Button danger onClick={() => confirmDeleteBlog(c.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <AdminTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.data}
        pagination={tablePagination}
        header={
          <AdminTableHeader title="Blogs Table" onBtnClick={onCreateBtnClick} />
        }
      />
      {modalContext}
    </>
  );
};

export default AdminBlogs;
