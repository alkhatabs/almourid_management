import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
import { countryList } from '@/utils/countryList';

export default function RegisterForm({ userLocation, onSubmit }) {
  const translate = useLanguage();

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    onSubmit(values);  // Pass form values to the parent component or API call
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        label={translate('name')}
        rules={[
          { required: true, message: 'Please enter your name' },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      <Form.Item
        name="email"
        label={translate('email')}
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={translate('password')}
        rules={[
          { required: true, message: 'Please enter your password' },
          { minLength: 8, message: 'Password must be at least 8 characters long' },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      <Form.Item
        label={translate('country')}
        name="country"
        rules={[{ required: true, message: 'Please select your country' }]}
        initialValue={userLocation}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          style={{ width: '100%' }}
          size="large"
        >
          {countryList.map((language) => (
            <Select.Option
              key={language.value}
              value={language.value}
              label={translate(language.label)}
            >
              {language?.icon && language?.icon + ' '}
              {translate(language.label)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          {translate('Register')}
        </Button>
      </Form.Item>
    </Form>
  );
}
