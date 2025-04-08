import React, { useState } from "react";
import { Button, Card, Col, Layout, Row, Typography, Table, Input } from "antd";
import { SearchOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import type { GetProps } from "antd";
import styles from "./Contribution.module.css";
import ReactECharts from "echarts-for-react";
import useChartContributionStore from "../../store/useContributionStore";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

function Contribution() {
  const [searchText, setSearchText] = useState("");

  const {
    monthlyData,
    monthlyLabels,
    contributorData,
    contributorLabels,
    videoApprovalData,
    videoApprovalLabels,
  } = useChartContributionStore();

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearchText(value);
  };

  // ----------------------------
  // 1. Opsi Bar Chart (Progress)
  // ----------------------------
  const barOptions = {
    title: {
      text: "Progress per Month",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: monthlyLabels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: monthlyData,
        type: "bar",
        color: "#1890ff",
      },
    ],
    grid: {
      top: 50,
      right: 20,
      bottom: 30,
      left: 40,
    },
  };

  // ----------------------------
  // 2. Opsi Pie Chart (Contributor)
  // ----------------------------
  const contributorPieData = contributorLabels.map((label, i) => ({
    value: contributorData[i],
    name: label,
  }));

  const pieOptions = {
    title: {
      text: "Top 5 Contributor Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      bottom: 0,
    },
    series: [
      {
        name: "Contributor",
        type: "pie",
        radius: "50%",
        data: contributorPieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0,0,0,0.5)",
          },
        },
      },
    ],
  };

  // ----------------------------
  // 3. Opsi Compare Chart (Video Approval)
  // ----------------------------
  const videoApprovalOptions = {
    title: {
      text: "Video Approval",
      left: "center",
      top: 0,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Approved", "Not Approved"],
      top: 30,
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Approved",
        type: "bar",
        data: [40, 60, 80, 100, 90, 110],
        color: "#147AD6",
        barGap: 0,
      },
      {
        name: "Not Approved",
        type: "bar",
        data: [10, 15, 25, 30, 20, 25],
        color: "#EC6666",
      },
    ],
    grid: {
      top: 70,
      right: 20,
      bottom: 30,
      left: 40,
    },
  };

  // ----------------------------
  // Data Table Contribution
  // ----------------------------
  const puraBesarData = [
    {
      key: "1",
      name: "Pura Agung Besakih",
      location: "Karangasem, Kec Rendang, Desa Besakih",
      quantity: 35,
      nista: 10,
      madya: 15,
      utama: 10,
      type: "Pura Besar",
    },
    {
      key: "2",
      name: "Pura Lempuyang",
      location: "Karangasem, Kec Abang, Desa Tribuana",
      quantity: 20,
      nista: 8,
      madya: 7,
      utama: 5,
      type: "Pura Besar",
    },
  ];

  const puraPribadiData = [
    {
      key: "1",
      name: "Pura Keluarga Suardana",
      location: "Gianyar, Kec Ubud, Desa Peliatan",
      quantity: 5,
      nista: '-',
      madya: '-',
      utama: '-',
      type: "Pura Pribadi",
    },
    {
      key: "2",
      name: "Pura Keluarga Wirata",
      location: "Tabanan, Kec Marga, Desa Payangan",
      quantity: 3,
      nista: '-',
      madya: '-',
      utama: '-',
      type: "Pura Pribadi",
    },
  ];

  const allTempleData = [...puraBesarData, ...puraPribadiData];

  const tableData = allTempleData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
      {
        title: "Temples Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
        filters: [
          { text: "Karangasem", value: "Karangasem" },
          { text: "Gianyar", value: "Gianyar" },
          { text: "Tabanan", value: "Tabanan" },
        ],
        onFilter: (value: any, record: any) => record.location.includes(value),
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: [
          { text: "Pura Besar", value: "Pura Besar" },
          { text: "Pura Pribadi", value: "Pura Pribadi" },
        ],
        onFilter: (value: any, record: any) => record.type.includes(value),
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        sorter: (a: any, b: any) => a.quantity - b.quantity,
      },
      {
        title: "Nista",
        dataIndex: "nista",
        key: "nista",
        render: (text: any, record: any) =>
          text !== "-" ? (
            <Link to={`/contribution/detail/${record.key}`}>{text}</Link>
          ) : (
            "-"
          ),
      },
      {
        title: "Madya",
        dataIndex: "madya",
        key: "madya",
        render: (text: any, record: any) =>
          text !== "-" ? (
            <Link to={`/contribution/detail/${record.key}`}>{text}</Link>
          ) : (
            "-"
          ),
      },
      {
        title: "Utama",
        dataIndex: "utama",
        key: "utama",
        render: (text: any, record: any) =>
          text !== "-" ? (
            <Link to={`/contribution/detail/${record.key}`}>{text}</Link>
          ) : (
            "-"
          ),
      },
      {
        title: "Detail",
        key: "detail",
        render: (_: any, record: any) => (
          <Link to={`/contribution/detail/${record.key}`}>
            <ExclamationCircleFilled
              style={{
                color: "#afafaf",
                fontSize: "20px",
                cursor: "pointer",
                marginTop: "5px",
              }}
            />
          </Link>
        ),
      },
    ];


  return (
    <Layout className={styles.contributionContainer}>
      <Row>
        <Col xs={24} md={12}>
          <Title level={2} className={styles.sectionTitle}>
            Statistic
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            You can see the latest data
          </Title>
        </Col>
      </Row>

      {/* Chart Section (menggunakan Row/Col agar responsif) */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {/* Bar Chart */}
        <Col xs={24} sm={24} md={8}>
          <Card title="Progress per Month" hoverable className={styles.cardChart}>
            <ReactECharts option={barOptions} style={{ height: 300, width: "100%" }} />
          </Card>
        </Col>

        {/* Pie Chart */}
        <Col xs={24} sm={24} md={8}>
          <Card title="Top 5 Contributor Data" hoverable className={styles.cardChart}>
            <ReactECharts option={pieOptions} style={{ height: 300, width: "100%" }} />
          </Card>
        </Col>

        {/* Compare Chart */}
        <Col xs={24} sm={24} md={8}>
          <Card title="Video Approval" hoverable className={styles.cardChart}>
            <ReactECharts option={videoApprovalOptions} style={{ height: 300, width: "100%" }} />
          </Card>
        </Col>
      </Row>

      {/* Table Section */}
      <Row style={{ marginTop: 70 }}>
        <Col xs={24} md={12}>
          <Title level={2} className={styles.sectionTitle} style={{ marginBottom: "10px" }}>
            Contribution List
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            You can see the latest data
          </Title>
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card className={styles.cardTable}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={18}></Col>
              <Col xs={24} md={6}>
                <Search
                  placeholder="Search by location or name..."
                  onSearch={onSearch}
                  size="large"
                  enterButton={
                    <Button
                      size="large"
                      style={{
                        backgroundColor: "#772d2f",
                        borderColor: "#772d2f",
                        color: "#fff",
                      }}
                    >
                      <SearchOutlined style={{ fontSize: "20px" }} />
                    </Button>
                  }
                />
              </Col>
            </Row>

            <Table
              columns={columns}
              dataSource={tableData}
              pagination={{ pageSize: 5 }}
              style={{ marginTop: 16 }}
            />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default Contribution;
