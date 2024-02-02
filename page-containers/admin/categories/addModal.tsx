'use client';
import { Button, ColorPicker, Form, Input, Modal, ModalProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React from 'react';

interface Props extends ModalProps {}
const CategoryAddModal: React.FC<Props> = ({ open, onOk, onCancel, title }) => {
  const onFinished = (values: any) => {
    console.log('success : ', values.color.toHexString());
  };
  return (
    <Modal open={open} title={title} onOk={onOk} onCancel={onCancel}>
      <Form
        name="category"
        style={{
          padding: '24px',
        }}
        onFinish={onFinished}
      >
        <FormItem label="Category Name" name="category">
          <Input />
        </FormItem>
        <FormItem label="Category Color" name="color">
          <ColorPicker showText />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CategoryAddModal;
