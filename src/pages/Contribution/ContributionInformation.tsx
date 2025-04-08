import React from "react";
import { Col, Layout, Row, Typography, Space, Rate, Avatar,Card } from "antd";
import styles from './Contribution.module.css';
import Logo from '../../assets/images/Badhi-Logo.png'

const { Title, Text, Paragraph } = Typography;

function ContributionInformation() {
  return (
    <Layout className={styles.informationContainer}>
      <div style={{ marginBottom: "16px" }}>
        <video
          controls
          poster="https://via.placeholder.com/800x450.png?text=Thumbnail+Pura"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover",borderRadius:'10px' }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          {/* Ganti link di atas dengan URL video Anda */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Judul & Rating */}
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: 0 }}>
            Pura Penataran Agung (Padma Tiga)
          </Title>
        </Col>
      </Row>

      <Space style={{ marginTop: 8 }}>
        <Rate disabled defaultValue={4} style={{ fontSize: 16 }} />
        <Text>(4.0)</Text>
      </Space>

      {/* Info User */}
      <Row align="middle" style={{ marginTop: 16 }}>
        <Col flex="none">
        	<Card className={styles.cardDetailAvatarInformation}>
        		<Avatar
		            src={Logo}
		            size={40}
		          />
        	</Card>
        </Col>
        <Col flex="auto" style={{ marginLeft: 8 }}>
          <Text strong>BADHI</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 12 }}>
            Researcher
          </Text>
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
      	<Col>
          <Text type="secondary">January 23, 2025</Text>
        </Col>
      </Row>

      {/* Deskripsi */}
      <Paragraph style={{ marginTop: 16, textAlign: "justify" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis 
        et nisl quis vestibulum. Vestibulum suscipit tortor sed posuere. Vivamus 
        aliquam enim eu congue venenatis. Cras laoreet sapien in bibendum tristique. 
        Praesent urna nisi, porta id lacus nec, posuere vehicula mi. Donec laoreet 
        venenatis purus. Nunc finibus mattis velit, vitae lobortis ex commodo eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis 
        et nisl quis vestibulum. Vestibulum suscipit tortor sed posuere. Vivamus 
        aliquam enim eu congue venenatis. Cras laoreet sapien in bibendum tristique. 
        Praesent urna nisi, porta id lacus nec, posuere vehicula mi. Donec laoreet 
        venenatis purus. Nunc finibus mattis velit, vitae lobortis ex commodo eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis 
        et nisl quis vestibulum. Vestibulum suscipit tortor sed posuere. Vivamus 
        aliquam enim eu congue venenatis. Cras laoreet sapien in bibendum tristique. 
        Praesent urna nisi, porta id lacus nec, posuere vehicula mi. Donec laoreet 
        venenatis purus. Nunc finibus mattis velit, vitae lobortis ex commodo eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis 
        et nisl quis vestibulum. Vestibulum suscipit tortor sed posuere. Vivamus 
        aliquam enim eu congue venenatis. Cras laoreet sapien in bibendum tristique. 
        Praesent urna nisi, porta id lacus nec, posuere vehicula mi. Donec laoreet 
        venenatis purus. Nunc finibus mattis velit, vitae lobortis ex commodo eget.
      </Paragraph>
    </Layout>
  );
}

export default ContributionInformation;
