import { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  Rate,
  Row,
  Space,
} from "antd";
import {
  LikeFilled,
  ExclamationCircleFilled,
  DisconnectOutlined,
} from "@ant-design/icons";

import ThumbnailPura from "../../assets/images/thumbnailPura.png";
import Logo from "../../assets/images/Badhi-Logo.png";
import styles from "./ContributionDetailCard.module.css";
import { Link } from "react-router-dom";

// Import komponen modal terpisah
import VideoRatingModal from "../VideoRatingModal/VideoRatingModal";

const { Title, Text } = Typography;

function ContributionDetailCard() {
  // State untuk menampilkan/menyembunyikan modal rating
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Event handler ketika klik ikon Like
  const handleLikeClick = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Card
        hoverable
        style={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
        cover={
          <img
            alt="Temple"
            src={ThumbnailPura}
            style={{
              objectFit: "cover",
              height: "auto",
              width: "100%",
              padding: "1rem",
            }}
          />
        }
        actions={[
          <LikeFilled
            key="like"
            className={styles.actionIconDetail}
            onClick={handleLikeClick} // Buka modal rating
          />,
          <Link to={`/contribution/detail/information/1`}>
            <ExclamationCircleFilled
              key="exclamation"
              className={styles.actionIconDetail}
            />,
          </Link>,
          <DisconnectOutlined
            key="disconnect"
            className={styles.actionIconDetail}
          />,
        ]}
      >
        {/* Judul & Rating */}
        <Title level={5} style={{ marginBottom: 4, marginTop: "-1.5rem" }}>
          Pura Penataran Agung (Padma Tiga)
        </Title>
        <Space>
          <Rate disabled defaultValue={3} style={{ fontSize: 16 }} />
          <Text>(3.0)</Text>
        </Space>

        {/* Info User */}
        <Row align="middle" style={{ marginTop: 8 }}>
          <Card className={styles.cardDetailAvatarContribution}>
            <Avatar src={Logo} size={40} />
          </Card>
          <div style={{ marginLeft: 8 }}>
            <Text strong>BADHI</Text>
            <br />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Researcher
            </Text>
          </div>
        </Row>

        {/* Deskripsi */}
        <Text style={{ display: "block", marginTop: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam facilisis et nisl quis.
        </Text>

        {/* Tanggal */}
        <Row justify="space-between" style={{ marginTop: 8 }}>
          <Text type="secondary">January 23, 2025</Text>
        </Row>
      </Card>

      {/* Memanggil Modal Terpisah */}
      <VideoRatingModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
}

export default ContributionDetailCard;
