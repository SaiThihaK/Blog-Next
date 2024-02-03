import { Button } from 'antd';
import React from 'react';

interface Props {
  title: string;
  btnText?: string;
  onBtnClick: () => void;
}
const AdminTableHeader: React.FC<Props> = ({ title, btnText, onBtnClick }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="font-semibold">{title}</h3>
      <Button type="default" onClick={onBtnClick}>
        {btnText ?? 'Create'}
      </Button>
    </div>
  );
};

export default AdminTableHeader;
