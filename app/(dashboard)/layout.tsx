'use client';
import './admin.css';
import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Dropdown,
  FloatButton,
  Layout,
  Menu,
  MenuProps,
  theme,
} from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: UserOutlined,
    label: 'Home',
    target: '/admin',
  },
  { icon: VideoCameraOutlined, label: 'Blogs', target: '/admin/blogs' },
  { icon: UploadOutlined, label: 'Categories', target: '/admin/categories' },
].map((el, index) => ({
  key: `${el.target}`,
  icon: <FloatButton icon={<UserOutlined />} />,
  label: el.label,
  target: el.target,
}));

const dropDownItems: MenuProps['items'] = [
  {
    key: '1',
    label: <div>Edit Profile</div>,
  },
  {
    key: '2',
    label: (
      <div role="button" onClick={() => signOut()}>
        Logout
      </div>
    ),
  },
];

type RootLayoutProps = {
  children: React.ReactNode;
};
const Rootlayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const { status, data } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = ({ key }: Record<string, any>) => {
    const targetMenu = items.find((item) => item.key === key);
    if (targetMenu) {
      router.push(targetMenu.target);
    }
  };

  return (
    <>
      {status === 'authenticated' ? (
        <Layout>
          <Header className="bg-white mb-[20px] flex items-center justify-between">
            <h1>The Dev</h1>
            <Dropdown menu={{ items: dropDownItems }}>
              <Avatar>{data.user?.name}</Avatar>
            </Dropdown>
          </Header>
          <Layout>
            <Sider
              className="bg-white h-full"
              breakpoint="lg"
              collapsedWidth="0"
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultActiveFirst={true}
                selectedKeys={[pathname]}
                items={items}
                className="h-[80dvh]"
                onClick={handleMenuClick}
              />
            </Sider>
            <Content className="ml-[14px]">
              <div
                style={{
                  borderRadius: borderRadiusLG,
                }}
                className="min-h-[80dvh] overflow-y-scroll w-full"
              >
                {children}
              </div>
            </Content>
          </Layout>
          <Footer className="text-center">
            <strong>THE DEV</strong> ©{new Date().getFullYear()} Created by
            Revenuelab
          </Footer>
        </Layout>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Rootlayout;
