import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Card, Form, Input, Button, message } from "antd";
import BadhiLogo from "../../assets/images/Badhi-Logo.png";
import BackgroundImage from "../../assets/images/bg-login.png";

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    message.config({
      top: 80,
      duration: 1.5,
      maxCount: 1,
    });

    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

	const handleLogin = async (values: any) => {
	  try {
	    const response = await fetch(
	      `${import.meta.env.VITE_API_URL}/auth/login`,
	      {
	        method: "POST",
	        headers: {
	          "Content-Type": "application/json",
	        },
	        body: JSON.stringify(values),
	         
	      }
	    );

	    const data = await response.json();
	    console.log(data);

	    if (response.ok) {
	      localStorage.setItem("token", data.token);
	      message.success("Login berhasil!");
	      navigate("/dashboard", { replace: true });
	    } else {
	      message.error(data.message || "Login gagal. Coba lagi.");
	    }
	  } catch (error) {
	    console.error("Error:", error);
	    message.error("Terjadi kesalahan saat login.");
	  }
	};


  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      />

      {/* White overlay */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      />

      {/* Login Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: 400,
            textAlign: "center",
            borderRadius: 8,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
          }}
          cover={
            <img
              alt="Logo"
              src={BadhiLogo}
              style={{ width: "7rem", margin: "10px auto" }}
            />
          }
        >
          <h2
            style={{
              color: "#772d2f",
              marginBottom: 0,
              fontWeight: "600",
              marginTop: "-25px",
            }}
          >
            BADHI ADMIN
          </h2>
          <p style={{ color: "gray", fontSize: "12px" }}>
            Welcome! Login with your account to continue.
          </p>
          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item
              label="Email"
              name="username"
              rules={[{ required: true, message: "Email wajib diisi" }]}
            >
              <Input placeholder="Masukkan email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password wajib diisi" }]}
            >
              <Input.Password placeholder="Masukkan password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#772d2f",
                  borderColor: "#772d2f",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
