import Proptypes from 'prop-types'
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import { useState } from 'react';

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search style={{ verticalAlign: `middle` }} enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProgile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/shinhyogeun" target='_blank'>나의 깃허브</a>
                </Col>
            </Row>
        </div >
    )
}

AppLayout.prototype = {
    children: Proptypes.node.isRequired,
}

export default AppLayout;
