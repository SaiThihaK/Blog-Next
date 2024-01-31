"use client";

import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FloatButton, Layout, Menu, theme } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: UserOutlined,
    label: "Home",
    target: "/admin",
  },
  { icon: VideoCameraOutlined, label: "Blog", target: "/admin/blogs" },
  { icon: UploadOutlined, label: "Categories", target: "/admin/categories" },
  { icon: UserOutlined, label: "Log out", target: "/admin/setting" },
].map((el, index) => ({
  key: String(index + 1),
  icon: <FloatButton icon={<UserOutlined />} />,
  label: el.label,
  target: el.target,
}));

type RootLayoutProps = {
  children: React.ReactNode;
};
const Rootlayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const { status } = useSession();
  const router = useRouter();

  const handleMenuClick = ({ key }: Record<string, any>) => {
    const targetMenu = items.find((item) => item.key === key);
    if (targetMenu) {
      router.prefetch(targetMenu.target);
      router.push(targetMenu.target);
    }
  };

  return (
    <>
      {status === "authenticated" ? (
        <Layout>
          <Sider
            className="bg-white h-full"
            breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={(broken) => {}}
            // onCollapse={(collapsed, type) => {}}
          >
            <Header style={{ padding: 0 }} className="bg-white" />
            <div className="demo-logo-vertical" />
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultActiveFirst={true}
              items={items}
              className="h-[80dvh]"
              onClick={handleMenuClick}
            />
          </Sider>
          <Layout>
            <Header className="bg-white" />
            <Content className="m-9 lg:m-4">
              <div
                className="h-[80dvh] overflow-y-scroll w-full"
                style={{
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <strong>THE DEV</strong> ©{new Date().getFullYear()} Created by
              Revenuelab
            </Footer>
          </Layout>
        </Layout>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Rootlayout;
