import React from "react";
import { Button, Input } from "antd";
import UserWebLayout from "../src/components/UserWebLayout";
import Link from 'next/link'
const Login = () => {
  return (
    <UserWebLayout webtitle="LOGIN">
      <div className="login">
        <div className="form">
          <form>
            <h2>LOGIN</h2>
            <div>
              <div>
                <label>Matric Number</label>
                <br></br>
                <Input type="text" placeholder="Enter FullName" required />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
                <br></br>
                <Input type="password" placeholder='Enter Password' required />
              </div>
            </div>

            <br></br>
            <div>
              <Link href='/dashboard'>
                <Button className="login-btn" htmlType="submit">
                  LOGIN
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </UserWebLayout>
  );
};

export default Login;
