'use client';
import React, { MutableRefObject, useRef } from 'react';
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
          handleCategoryModalClose();
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
              handleCategoryModalClose();
            },
          }
        );
      },
    });
  };

  const handleCategoryModalOpen = (
    data: { id: string; color: string; category: string } | {},
    mode: string
  ) => {
    modalRef.current?.open(data, mode);
  };

  const handleCategoryModalClose = () => {
    modalRef.current?.close();
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
        <Tag color={''} key={c.category}>
          {c.category.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Color',
      key: 'color',
      render: (_, c) => (
        <div className="flex items-center gap-[8px]">
          <div
            style={{
              backgroundColor: c.color,
            }}
            className="w-[24px] h-[24px] rounded-full"
          ></div>
          <span>{c.color.toUpperCase()}</span>
        </div>
      ),
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
              handleCategoryModalOpen(
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
              handleCategoryModalOpen({}, 'create');
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
