import React from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import './RegistrationPage.css'

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <Card className="registration-card">
        <div className="registration-image">
          <img src="logoImage.png" alt="logo" />
        </div>
        <div className="registration-content">
          <Typography.Title level={2}>Registration</Typography.Title>
          <Form name="registration" layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="registration-links">
            <span>Already have an account? </span>
            <Link to="/">Sign In!</Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RegistrationPage
