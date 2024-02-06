'use client';
import AdminTable from '@/components/shared/adminTable';
import AdminTableHeader from '@/components/shared/adminTableHeader';
import { formatDate } from '@/lib/utils';
import {
  useCreateSocialLink,
  useDeleteSocialLink,
  useGetSocialLinks,
  useUpdateSocialLink,
} from '@/services/socialLinks';
import { GetAllSocialLinksResponse, SocialLink } from '@/types/socialLink';
import { Button, Modal, Space, TableProps, Tag } from 'antd';
import React, { MutableRefObject, useRef } from 'react';
import SocialLinkModal from './modal';

const SocialLinksPage = () => {
  const [modal, modalContext] = Modal.useModal();
  const modalRef: MutableRefObject<any> = useRef();
  const { data, isLoading, mutate } =
    useGetSocialLinks<GetAllSocialLinksResponse>();
  const { trigger: deleteSocialLink } = useDeleteSocialLink();
  const { trigger: createSocialLink } = useCreateSocialLink();
  const { trigger: updateSocialLink } = useUpdateSocialLink();

  const confirmDeleteSocialLink = (id: string) => {
    modal.confirm({
      title: 'Do you confirm to delete this blog?',
      onOk: async () => {
        await deleteSocialLink(
          { id: id },
          {
            onSuccess: () => {
              mutate();
              handleSocialLinkModalClose();
            },
          }
        );
      },
    });
  };

  const handleSocialLinkModalClose = () => {
    modalRef.current.close();
  };

  const handleSocialLinkModalOpen = (data: any, mode: string) => {
    modalRef.current.open(data, mode);
  };

  const onModalFormSubmit = (values: any, mode: string) => {
    if (mode === 'create') {
      createSocialLink(values, {
        onSuccess: () => {
          mutate();
          handleSocialLinkModalClose();
        },
      });
      return;
    }
    if (mode === 'edit') {
      updateSocialLink(values, {
        onSuccess: () => {
          mutate();
          handleSocialLinkModalClose();
        },
      });
      return;
    }
  };

  const columns: TableProps<SocialLink>['columns'] = [
    {
      title: 'No',
      key: 'id',
      render: (_, c, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, c) => (
        <Tag color={''} key={c.type}>
          {c.type.toLocaleUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Link',
      dataIndex: 'socialLink',
      key: 'socialLink',
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
          <Button
            type="default"
            onClick={() => {
              handleSocialLinkModalOpen(
                { id: c.id, type: c.type, socialLink: c.socialLink },
                'edit'
              );
            }}
          >
            Edit
          </Button>
          <Button
            danger
            onClick={() => {
              confirmDeleteSocialLink(c.id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <AdminTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.data}
        pagination={false}
        header={
          <AdminTableHeader
            title="Social Links Table"
            onBtnClick={() => {
              handleSocialLinkModalOpen({}, 'create');
            }}
          />
        }
      />
      <SocialLinkModal ref={modalRef} onSubmitForm={onModalFormSubmit} />
      {modalContext}
    </div>
  );
};

export default SocialLinksPage;
