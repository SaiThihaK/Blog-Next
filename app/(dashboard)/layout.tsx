"use client";

import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useSession } from "next-auth/react";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: UserOutlined,
    label: "Home",
  },
  { icon: VideoCameraOutlined, label: "Blog" },
  { icon: UploadOutlined, label: "Category" },
  { icon: UserOutlined, label: "Log out" },
].map((el, index) => ({
  key: String(index + 1),
  icon: React.createElement(el.icon),
  label: el.label,
}));

type RootLayoutProps = {
  children: React.ReactNode;
};
const Rootlayout: React.FC<RootLayoutProps> = ({ children }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const { status } = useSession();

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
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0 }} className="bg-white" />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="h-[80dvh] overflow-y-scroll w-full p-4 md:p-0"
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
