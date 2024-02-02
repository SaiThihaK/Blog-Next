'use client';
import React, { useState } from 'react';
import { Button, Modal, Space, Switch, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useDeleteCategroy, useGetCategory } from '@/services/category';
import { GetAllCateogriesResponse } from '@/types/category';
import AdminTable from '@/components/shared/adminTable';
import AdminTableHeader from '@/components/shared/adminTableHeader';
import { formatDate } from '@/lib/utils';
import CategoryAddModal from './addModal';

const AdminCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, mutate } =
    useGetCategory<GetAllCateogriesResponse>();
  const [modal, modalContext] = Modal.useModal();
  const { trigger: DeleteCategory } = useDeleteCategroy();
  const onCreateBtnClick = () => {
    console.log('Category create modal should open!');
  };

  const confirmDeleteCategory = (id: string) => {
    console.log('wir');
    modal.confirm({
      title: 'Do you confirm to delete this blog? ',
      onOk: async () => {
        await DeleteCategory(
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

  const handleOk = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const columns: TableProps<any>['columns'] = [
    {
      title: 'No',
      key: 'id',
      render: (_, c, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: 'Name',
      dataIndex: 'category',
      key: 'category',
      render: (_, c) => (
        <Tag color="#108ee9" key={c.category.id}>
          {c.category}
        </Tag>
      ),
    },
    {
      title: 'Color',
      key: 'color',
      render: (_, c) => (
        <div
          className="w-[20px] h-[20px] rounded-md"
          style={{
            backgroundColor: c.color,
          }}
        ></div>
      ),
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
      render: (_, c) => (
        <span>{formatDate(c.createdAt, 'YYYY-MM-DD, hh:mm A')}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, c) => (
        <Space size="middle">
          <Button type="default">Edit</Button>
          <Button danger onClick={() => confirmDeleteCategory(c.id)}>
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
        pagination={false}
        header={
          <AdminTableHeader title="Categories Table" onBtnClick={openModal} />
        }
      />
      <CategoryAddModal open={showModal} onOk={handleOk} />
      {modalContext}
    </>
  );
};

export default AdminCategories;
