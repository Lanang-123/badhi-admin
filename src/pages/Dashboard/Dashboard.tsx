import React, { useState } from "react";
import { Layout, Row, Col, List, Card, Typography } from "antd";
import ReactECharts from "echarts-for-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { HomeOutlined, UserOutlined, FileDoneOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";

import useDashboardStore from "../../store/useDashboardStore";
import styles from "./Dashboard.module.css";
import "leaflet/dist/leaflet.css";
import MarkIcon from "../../components/MarkIcon";

// Plugin dayjs jika dibutuhkan untuk parsing tanggal
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { temples, contributions, users, onReview, regions } = useDashboardStore();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Opsi ECharts
  const chartOptions = {
    title: {
      text: `${temples} Temples Registered`,
      left: "center",
      top: 10,
      textStyle: {
        fontSize: 16,
      },
    },
    xAxis: {
      type: "category",
      data: ["Pratima", "Pelaba Pura", "Pralingga", "Wong Samar", "Palinggih"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70],
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

  // Kolom tabel (jika Anda butuh menampilkan Daftar Pura)
  // const columns = [
  //   {
  //     title: "No",
  //     dataIndex: "key",
  //     key: "key",
  //     width: "10%",
  //   },
  //   {
  //     title: "Nama Pura",
  //     dataIndex: "name",
  //     key: "name",
  //     width: "45%",
  //   },
  //   {
  //     title: "Region",
  //     dataIndex: "region",
  //     key: "region",
  //     width: "45%",
  //   },
  // ];

  return (
    <Layout className={styles.dashboardContainer}>
      {/* Header Statistic */}
      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <Title level={2} className={styles.sectionTitle} style={{ marginBottom: "10px" }}>
            Statistic
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            You can see the latest data
          </Title>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} className={styles.sectionTitle} style={{ marginBottom: "10px" }}>
            Temples Contribution Statistic
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            Data change overtime. You can contribute to increase these stats.
          </Title>
        </Col>
      </Row>

      {/* Content Statistik */}
      <Row style={{ marginTop: "20px" }} gutter={[48, 48]}>
        {/* Kolom Kiri: Kartu Statistic */}
        <Col xs={24} md={12}>
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={12}>
              <div className={styles.statisticCard} style={{ paddingLeft: "20px" }}>
                <div className={styles.cardContent} style={{ backgroundColor: "#e3fcef" }}>
                  <HomeOutlined style={{ fontSize: 24 }} />
                </div>
                <div className={styles.statNumber}>{temples}</div>
                <div className={styles.categoryText}>Temples</div>
              </div>
              <div className={styles.statisticCard} style={{ marginTop: 20, paddingLeft: "20px" }}>
                <div className={styles.cardContent} style={{ backgroundColor: "#e3f4fc" }}>
                  <FileDoneOutlined style={{ fontSize: 24 }} />
                </div>
                <div className={styles.statNumber}>{contributions}</div>
                <div className={styles.categoryText}>Contribution</div>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className={styles.statisticCard} style={{ paddingLeft: "20px" }}>
                <div className={styles.cardContent} style={{ backgroundColor: "#fde9ef" }}>
                  <UserOutlined style={{ fontSize: 24 }} />
                </div>
                <div className={styles.statNumber}>{users}</div>
                <div className={styles.categoryText}>Users</div>
              </div>
              <div className={styles.statisticCard} style={{ marginTop: 20, paddingLeft: "20px" }}>
                <div className={styles.cardContent} style={{ backgroundColor: "#e8fdfb" }}>
                  <FileDoneOutlined style={{ fontSize: 24 }} />
                </div>
                <div className={styles.statNumber}>{onReview}</div>
                <div className={styles.categoryText}>On Review</div>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Kolom Kanan: Chart */}
        <Col xs={24} md={12}>
          <Card style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <ReactECharts
              option={chartOptions}
              style={{ width: "100%", height: 285, marginTop: 16 }}
            />
          </Card>
        </Col>
      </Row>

      {/* Bagian Regions & Maps */}
      <Row style={{ marginTop: "42px" }} gutter={[48, 48]}>
        <Col xs={24} md={6}>
          <Title level={2} className={styles.sectionTitle}>
            Regions
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            Select the regions
          </Title>
        </Col>
        <Col xs={24} md={18}>
          <Title level={2} className={styles.sectionTitle}>
            Maps
          </Title>
          <Title level={5} className={styles.sectionSubtitle}>
            Select the temples to see and contribute
          </Title>
        </Col>
      </Row>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={6}>
          <Card className={styles.regionsList}>
            <Title level={3} className={styles.titleRegion}>
              REGIONS
            </Title>
            <div
              style={{
                width: "100px",
                height: "3px",
                borderRadius: "20px",
                backgroundColor: "#772d2f",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            ></div>
            <List
              dataSource={regions}
              renderItem={(region) => (
                <List.Item
                  className={styles.regionItems}
                  onClick={() => setSelectedRegion(region)}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "start",
                      justifyContent: "start",
                      width: "100%",
                    }}
                  >
                    <div style={{ width: "20px", textAlign: "center" }}>
                      <div
                        style={{
                          visibility: selectedRegion === region ? "visible" : "hidden",
                        }}
                      >
                        <MarkIcon />
                      </div>
                    </div>
                    {region}
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} md={18}>
          <div className={styles.mapContainer}>
            <MapContainer
              center={[-8.4095, 115.1889]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-8.4095, 115.1889]}>
                <Popup>Pura Besakih</Popup>
              </Marker>
              <Marker position={[-8.6200, 115.0898]}>
                <Popup>Pura Tanah Lot</Popup>
              </Marker>
              <Marker position={[-8.8187, 115.0887]}>
                <Popup>Pura Uluwatu</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
      </Row>

      {/*
      <Row style={{ marginTop: 32 }}>
        <Col span={24}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Temples List</h2>
            <p className={styles.sectionSubtitle}>Select the temples to see and contribute</p>
          </div>
          <div className={styles.tableContainer}>
            <Table columns={columns} dataSource={puraList} pagination={false} />
          </div>
        </Col>
      </Row>
      */}
    </Layout>
  );
};

export default Dashboard;
