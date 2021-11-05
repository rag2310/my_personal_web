import { Layout, Menu } from "antd";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Proyects from "./Proyects";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="proyects" element={<Proyects />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<AboutMe />} />
      </Route>
    </Routes>
  );
};

const Main = () => {
  return (
    <Layout className="layout">
      <Header className="site-layout-header">
        <div
          style={{
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <div className="logo">
            <h1>My Personal Web</h1>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="site-layout-menu"
          >
            <Menu.Item>
              <Link to="/">
                <h1>Home</h1>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/proyects">
                <h1>Proyects</h1>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about">
                <h1>About Me</h1>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact">
                <h1>Contact Me</h1>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer className="site-layout-footer">
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
