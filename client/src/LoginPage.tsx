import React from 'react'
import { Form, Input, Button, Typography, Card } from 'antd'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-image">
          <img src="logoImage.png" alt="logo" />
        </div>
        <div className="login-content">
          <Typography.Title level={2}>
            Welcome to the Book Bucket
          </Typography.Title>
          <Form name="login" layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username or email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
            <div className="login-links">
              <Link to="/forgot-password">Forgot password?</Link>
              <span> | </span>
              <Link to="/registration">Sign up</Link>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
