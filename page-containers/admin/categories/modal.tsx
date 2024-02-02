'use client';
import CustomColorPicker from '@/components/shared/customColorPicker';
import { Button, Form, Input, Modal } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

type CategoryForm = {
  id?: string;
  category: string;
  color: string | any;
};

// eslint-disable-next-line react/display-name
const CategoryModal = forwardRef(
  (
    { onSubmitForm }: { onSubmitForm: (c: CategoryForm, mode: string) => void },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const [mode, setMode] = useState<string>('create');
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => ({
      open: (data: CategoryForm, mode: string) => handleOpen(data, mode),
    }));

    const handleOpen = (data: CategoryForm, mode: string) => {
      console.log('dataaa === ', data);
      setMode(mode);
      if (mode === 'edit') {
        form.setFieldsValue(data);
      }
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const onFinish = (values: CategoryForm) => {
      const hexColorValue =
        typeof values.color === 'string'
          ? values.color
          : values.color.toHexString();
      if (mode === 'create') {
        onSubmitForm(
          { category: values.category, color: hexColorValue },
          'create'
        );
      } else if (mode === 'edit') {
        onSubmitForm({ ...values, color: hexColorValue }, 'edit');
      }
      form.resetFields();
      handleClose();
    };

    return (
      <Modal
        open={open}
        title={mode === 'create' ? 'Create Category' : 'Edit Category'}
        onCancel={handleClose}
        footer={false}
      >
        <Form
          form={form}
          name="category"
          style={{
            padding: '24px 0 0 0',
          }}
          onFinish={onFinish}
          initialValues={{
            category: '',
            color: '#ffffff',
          }}
          labelCol={{ span: 6 }}
        >
          <FormItem<CategoryForm> name="id" hidden>
            <Input />
          </FormItem>
          <FormItem<CategoryForm> label="Category Name" name="category">
            <Input />
          </FormItem>
          <FormItem<CategoryForm> label="Category Color" name="color">
            <CustomColorPicker />
          </FormItem>
          <FormItem<CategoryForm>
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginLeft: 'auto' }}
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

export default CategoryModal;
