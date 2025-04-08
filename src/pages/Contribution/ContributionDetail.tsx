import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Layout,
  Row,
  Typography,
  Input,
  Dropdown,
  MenuProps
} from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";
import styles from "./Contribution.module.css";

import ContributionDetailCard from "../../components/ContributionDetailCard/ContributionDetailCard";

const { Title } = Typography;
const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

function ContributionDetail() {
  const [, setSearchText] = useState("");
  // State untuk kategori aktif
  const [activeCategory, setActiveCategory] = useState("nista");
  // State untuk filter waktu (misalnya default = 'This Month')
  const [dateFilter, setDateFilter] = useState("This Month");

  // Fungsi saat user melakukan pencarian
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
    setSearchText(value);
  };

  // Menu dropdown filter waktu
  const items: MenuProps['items'] = [
    {
      label: "This Month",
      key: "thisMonth",
    },
    {
      label: "Last Month",
      key: "lastMonth",
    },
    {
      label: "This Year",
      key: "thisYear",
    },
    {
      label: "All Time",
      key: "allTime",
    },
  ];

  // Fungsi ketika user memilih item di dropdown
  const handleMenuClick: MenuProps['onClick'] = (info) => {
    // Misalnya set dateFilter sesuai pilihan
    if (info.key === "thisMonth") setDateFilter("This Month");
    if (info.key === "lastMonth") setDateFilter("Last Month");
    if (info.key === "thisYear") setDateFilter("This Year");
    if (info.key === "allTime") setDateFilter("All Time");

    // Di sinilah Anda bisa menambahkan logika filter data
    // misalnya memanggil API atau memfilter data local store
  };

  return (
    <Layout className={styles.contributionContainer}>
      {/* Row Pencarian */}
      <Row justify="center">
        <Col xs={24}>
          <Card
            hoverable
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              border: "none",
              width: "100%",
            }}
          >
            <Search
              className={styles.customSearch}
              placeholder="Search by name..."
              onSearch={onSearch}
              enterButton={
                <Button
                  size="large"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <SearchOutlined style={{ fontSize: "28px", color: "#772d2f" }} />
                </Button>
              }
              size="large"
              bordered={false}
              style={{
                width: "100%",
                fontSize: "18px",
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* Title & Filter */}
      <Row style={{ marginTop: "48px" }} gutter={[16, 16]}>
        <Col xs={24} md={20} lg={19}>
          <div style={{ display: "inline-block", width: "fit-content" }}>
            <Title level={3} className={styles.titleDetailTemple}>
              Pura Agung Besakih
            </Title>
            <div
              style={{
                height: "3px",
                backgroundColor: "#772d2f",
                width: "100%",
              }}
            />
          </div>
        </Col>

        {/* Dropdown "This Month" */}
        <Col xs={24} md={4} lg={5} style={{ marginTop: "12px" }}>
          <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']}>
            <Button
              size="large"
              style={{
                width: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Title level={5} style={{ color: "#772d2f", fontWeight: "700", margin: 0 }}>
                  {dateFilter}
                </Title>
                <div
                  style={{
                    height: "38px",
                    width: "1px",
                    backgroundColor: "#afafaf",
                  }}
                />
                <FilterOutlined style={{ fontSize: "20px" }} />
              </div>
            </Button>
          </Dropdown>
        </Col>
      </Row>

      {/* Category Pura */}
      <Row style={{ marginTop: "36px" }} gutter={[48, 48]}>
        <Col xs={24} sm={8}>
          <Button
            size="large"
            onClick={() => setActiveCategory("nista")}
            className={
              activeCategory === "nista"
                ? styles.buttonCategoryDetailActive
                : styles.buttonCategoryDetailDefault
            }
            block
          >
            Nista Mandala
          </Button>
        </Col>
        <Col xs={24} sm={8}>
          <Button
            size="large"
            onClick={() => setActiveCategory("madya")}
            className={
              activeCategory === "madya"
                ? styles.buttonCategoryDetailActive
                : styles.buttonCategoryDetailDefault
            }
            block
          >
            Madya Mandala
          </Button>
        </Col>
        <Col xs={24} sm={8}>
          <Button
            size="large"
            onClick={() => setActiveCategory("utama")}
            className={
              activeCategory === "utama"
                ? styles.buttonCategoryDetailActive
                : styles.buttonCategoryDetailDefault
            }
            block
          >
            Utama Mandala
          </Button>
        </Col>
      </Row>

      {/* Card Contribution */}
      <Row gutter={[48, 48]} className={styles.sectionCardDetail} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <ContributionDetailCard />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ContributionDetailCard />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <ContributionDetailCard />
        </Col>
      </Row>
    </Layout>
  );
}

export default ContributionDetail;
