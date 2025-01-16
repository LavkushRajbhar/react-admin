import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { AiOutlineAlert, AiOutlineBgColors, AiOutlineDashboard, AiOutlineFontColors, AiOutlineOrderedList, AiOutlineShop, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { ImBlog, ImBlogger } from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
import { SiBrandfolder, SiBrave } from 'react-icons/si'
import { BiCategory, BiCategoryAlt } from 'react-icons/bi'
import { FaBlogger, FaBloggerB, FaClipboard } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white text-center mb-0 fs-5 py-3'><span className='sm-logo'>LR</span>
            <span className='lg-logo'>Lavkush Rajbhar</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShop className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: "Add Product"
                },
                {
                  key: "product-list",
                  icon: <AiOutlineOrderedList className='fs-4' />,
                  label: "Product List"
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brand"
                },
                {
                  key: "brand-list",
                  icon: <SiBrave className='fs-4' />,
                  label: "Brand List"
                },
                {
                  key: "category",
                  icon: <BiCategory className='fs-4' />,
                  label: "Category"
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category List"
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: "Color"
                },
                {
                  key: "color-list",
                  icon: <AiOutlineFontColors className='fs-4' />,
                  label: "Color List"
                },
              ]
            },
            {
              key: "orders",
              icon: <FaClipboard className='fs-4' />,
              label: "Orders"
            },
            {
              key: "blog",
              icon: <FaBlogger className='fs-4' />,
              label: "Blog",
              children: [
                {
                  key: "blog-add",
                  icon: <ImBlog className='fs-4' />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <ImBlogger className='fs-4' />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className='fs-4' />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className='fs-4' />,
                  label: "Blog Category List",
                }
              ]
            },
            {
              key: "enquiries",
              icon: <AiOutlineAlert className='fs-4' />,
              label: "Enquiries"
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }} className='d-flex justify-content-between ps-2 pe-5'
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}

          />
          <div className='d-flex gap-3 align-items-center'>

            <div className='position-relative'><IoIosNotifications className='fs-3' />
              <span className='badge bg-warning counded-circle p-1 position-absolute'>3</span></div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img src="https://avatars.slack-edge.com/2025-01-03/8241172274997_09e02f46656562a7fe54_72.png" alt="" className='w-75' />
              </div>
              <div>
                <h5 className='text-dark mb-1'>Lavkush</h5>
                <h6 className=''>lavkush@gmail.com</h6>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

          <Outlet />

        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;