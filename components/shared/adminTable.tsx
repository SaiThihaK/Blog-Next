import { Table, TableProps } from 'antd';
import React from 'react';

interface Props extends TableProps {
  header: React.ReactElement;
}
const AdminTable: React.FC<Props> = ({
  loading,
  columns,
  dataSource,
  header,
  pagination,
}) => {
  const tableData = dataSource?.map((data) => ({ key: data.id, ...data }));
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={tableData}
      bordered
      title={() => header}
      pagination={pagination}
    />
  );
};

export default AdminTable;
