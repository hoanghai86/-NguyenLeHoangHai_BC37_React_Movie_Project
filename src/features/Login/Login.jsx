import React from "react";
import { Button, Form, Input } from "antd";

const Login = () => {
  const onFinish = (value) => {
    console.log(value);

    //trả về thông tin user login thành công => res.data.content

    //set localStorage

    //set localStorage khi cần sử dụng
  };

  return (
    <div className="container text-center">
      <h1>Login</h1>

    <div className="flex justify-center pt-5">
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="Tài khoản"
          name="taikhoan"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matkhau"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
      
    </div>
  );
};

export default Login;
