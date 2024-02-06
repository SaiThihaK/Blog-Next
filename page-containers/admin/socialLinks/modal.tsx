import { Button, Form, Input, Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

interface SocialLinkForm {
  id?: string;
  socialLink: string;
  type: string;
}
// eslint-disable-next-line react/display-name
const SocialLinkModal = forwardRef(
  (
    {
      onSubmitForm,
    }: { onSubmitForm: (v: SocialLinkForm, mode: string) => void },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('create');
    const [form] = Form.useForm();

    const handleOpen = (data: SocialLinkForm, mode: string) => {
      setMode(mode);
      if (mode === 'edit') {
        form.setFieldsValue(data);
      }
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useImperativeHandle(ref, () => ({
      open: (data: SocialLinkForm, mode: string) => handleOpen(data, mode),
      close: () => handleClose(),
    }));

    const onFinish = (values: SocialLinkForm) => {
      console.log('values', values);
      if (mode === 'create') {
        onSubmitForm(
          {
            type: values.type,
            socialLink: values.socialLink,
          },
          'create'
        );
      } else if (mode === 'edit') {
        onSubmitForm(values, 'edit');
      }
      form.resetFields();
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
          className="pt-[24px]"
          onFinish={onFinish}
          initialValues={{
            type: '',
            socialLink: '',
          }}
          labelCol={{ span: 5 }}
        >
          <FormItem name="id" hidden>
            <Input />
          </FormItem>
          <FormItem
            label="Social Type"
            name="type"
            rules={[
              {
                required: true,
                message: 'Please input social type!',
              },
            ]}
          >
            <Select disabled={mode === 'edit'}>
              <Select.Option value="facebook">facebook</Select.Option>
              <Select.Option value="instagram">instagram</Select.Option>
              <Select.Option value="tiktok">tiktok</Select.Option>
              <Select.Option value="youtube">youtube</Select.Option>
            </Select>
          </FormItem>
          <FormItem
            label="Link"
            name="socialLink"
            rules={[{ required: true, message: 'Please input social link!' }]}
          >
            <Input />
          </FormItem>
          <FormItem
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button type="primary" htmlType="submit" className="ml-auto">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

export default SocialLinkModal;
