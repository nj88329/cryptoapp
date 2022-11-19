import React, { useState } from 'react';

import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined,MenuOutlined} from '@ant-design/icons';
import icon from '../images/crypto.jpg';
const Navbar = () => {
 
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to ="/">BitCrypto</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=> setActiveMenu(true)}>

                    <MenuOutlined/>
                </Button>
                
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>

                </Menu>
                 <Button className="menu-control-container">

                </Button> 
                
            </div>
        </div>
    )
}

export default Navbar
