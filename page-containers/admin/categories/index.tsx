'use client';
import React, { MutableRefObject, useRef, useState } from 'react';
import { Button, Modal, Space, Switch, Tag } from 'antd';
import type { TableProps } from 'antd';
import {
  useCreateCategory,
  useDeleteCategroy,
  useGetCategory,
  useUpdateCategory,
} from '@/services/category';
import { Category, GetAllCateogriesResponse } from '@/types/category';
import AdminTable from '@/components/shared/adminTable';
import AdminTableHeader from '@/components/shared/adminTableHeader';
import { formatDate } from '@/lib/utils';
import CategoryModal from './modal';

const AdminCategories = () => {
  const { data, isLoading, mutate } =
    useGetCategory<GetAllCateogriesResponse>();
  const [modal, modalContext] = Modal.useModal();
  const modalRef: MutableRefObject<any> = useRef();

  const { trigger: deleteCategory } = useDeleteCategroy();
  const { trigger: createCategory } = useCreateCategory();
  const { trigger: editCategory } = useUpdateCategory();

  const onModalFormSubmit = async (values: any, mode: string) => {
    if (mode === 'create') {
      await createCategory(values, {
        onSuccess: () => {
          mutate();
        },
      });
      return;
    }
    if (mode === 'edit') {
      await editCategory(values, {
        onSuccess: () => {
          mutate();
        },
      });
      return;
    }
  };

  const confirmDeleteCategory = (id: string) => {
    modal.confirm({
      title: 'Do you confirm to delete this blog?',
      onOk: async () => {
        await deleteCategory(
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

  const handleCategoryModal = (
    data: { id: string; color: string; category: string } | {},
    mode: string
  ) => {
    modalRef.current?.open(data, mode);
  };

  const columns: TableProps<Category>['columns'] = [
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
        <Tag color="#108ee9" key={c.category}>
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
      render: (_, c: Category) => (
        <Space size="middle">
          <Button
            type="default"
            onClick={() => {
              handleCategoryModal(
                {
                  id: c.id,
                  category: c.category,
                  color: c.color,
                },
                'edit'
              );
            }}
          >
            Edit
          </Button>
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
          <AdminTableHeader
            title="Categories Table"
            onBtnClick={() => {
              handleCategoryModal({}, 'create');
            }}
          />
        }
      />
      <CategoryModal ref={modalRef} onSubmitForm={onModalFormSubmit} />
      {modalContext}
    </>
  );
};

export default AdminCategories;
