import React,{useState,useEffect} from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuFoldOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom"; 
import BadhiLogo from "../../assets/images/Badhi-Logo.png";
import styles from "./Sidebar.module.css";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation(); 
  const selectedKey = location.pathname; 

  useEffect(() => {
    setActiveMenu(selectedKey);
  },[selectedKey])

  const isContributionActive =
  activeMenu === "/contribution" || activeMenu.startsWith("/contribution/detail");


  return (
    <Sider width={150} className={styles.sidebar}>
      {/* Bagian Logo */}
      <div className={styles.logoContainer}>
        <img src={BadhiLogo} alt="Badhi Logo" className={styles.logoImg} />
      </div>

      {/* Menu Navigasi */}
      <Menu
        mode="vertical"
        selectedKeys={[selectedKey]} // Set kunci terpilih berdasarkan route
        className={styles.menuContainer}
      >
        <Menu.Item key="/dashboard" className={styles.menuItem}>
          <Link to="/dashboard" style={{ textAlign: "center" }}>
            <div className={styles.iconCircle} style={{ margin: "auto", backgroundColor: activeMenu == '/dashboard' ? "#772d2f" : "transparent", color: activeMenu == '/dashboard' ? "#fff" : "#772d2f"}}>
              <HomeOutlined style={{ fontSize: "28px"}} />
            </div>
            <div className={styles.menuText} style={{ color: activeMenu == '/dashboard' ? '#772d2f' : '#a5a5a5' }}>Dashboard</div>
          </Link>
        </Menu.Item>

        <Menu.Item key="/contribution" className={styles.menuItem}>
          <Link to="/contribution" style={{ textAlign: "center" }}>
            <div
              className={styles.iconCircle}
              style={{
                margin: "auto",
                backgroundColor: isContributionActive ? "#772d2f" : "transparent",
                color: isContributionActive ? "#fff" : "#772d2f",
              }}
            >
              <MenuFoldOutlined style={{ fontSize: "28px" }} />
            </div>
            <div
              className={styles.menuText}
              style={{ color: isContributionActive ? "#772d2f" : "#a5a5a5" }}
            >
              Contribution
            </div>
          </Link>
        </Menu.Item>


        <Menu.Item key="/request-temple" className={styles.menuItem}>
          <Link to="/request-temple" style={{ textAlign: "center" }}>
            <div className={styles.iconCircle} style={{ margin: "auto", backgroundColor: activeMenu == '/request-temple' ? "#772d2f" : "transparent", color: activeMenu == '/request-temple' ? "#fff" : "#772d2f"}}>
              <CheckCircleOutlined style={{ fontSize: "28px" }} />
            </div>
            <div className={styles.menuText} style={{ color: activeMenu == '/request-temple' ? '#772d2f' : '#a5a5a5' }}>Request Temples</div>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;