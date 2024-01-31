"use client";
import React from "react";
import { Button, Space, Switch, Tag } from "antd";
import type { TableProps } from "antd";
import { useGetCategory } from "@/services/category";
import { GetAllCateogriesResponse } from "@/types/category";
import AdminTable from "@/components/shared/adminTable";
import AdminTableHeader from "@/components/shared/adminTableHeader";
import { formatDate } from "@/lib/utils";

const AdminCategories = () => {
  const columns: TableProps<any>["columns"] = [
    {
      title: "No",
      key: "id",
      render: (_, c, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Name",
      dataIndex: "category",
      key: "category",
      render: (_, c) => (
        <Tag color="#108ee9" key={c.category.id}>
          {c.category}
        </Tag>
      ),
    },
    {
      title: "Color",
      key: "color",
      render: (_) => (
        <div className="w-[20px] h-[20px] rounded-md bg-green-500"></div>
      ),
    },
    {
      title: "Featured",
      key: "featured",
      render: (_) => <Switch defaultChecked />,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, c) => (
        <span>{formatDate(c.createdAt, "YYYY-MM-DD, hh:mm A")}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_) => (
        <Space size="middle">
          <Button type="default">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];
  const { data, isLoading } = useGetCategory<GetAllCateogriesResponse>();

  const onCreateBtnClick = () => {
    console.log("Category create modal should open!");
  };

  return (
    <AdminTable
      loading={isLoading}
      columns={columns}
      dataSource={data?.data}
      pagination={false}
      header={
        <AdminTableHeader
          title="Categories Table"
          onBtnClick={onCreateBtnClick}
        />
      }
    />
  );
};

export default AdminCategories;
