import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar,Exchanges,CryptoDetails,Cryptocurrencies,News,Homepage} from './Components';
import "./App.css";
import 'antd/dist/antd.min.css';

 const App = () => {
    return (
        <div className="App">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                            <Switch>
                                <Route exact path="/">
                                    <Homepage/>
                                </Route>
                                <Route exact path="/exchanges">
                                    <Exchanges/>
                                </Route>
                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies/>
                                </Route>
                                <Route exact path="/crypto/:coinId">
                                    <CryptoDetails/>
                                </Route>
                                <Route exact path="/news">
                                    <News/>
                                </Route>
                            </Switch>
                    </div>
                </Layout>
            </div>
            <div className="footer" >
                <Typography.Title level={5} styles={{color:'white',textAlign:'center'}}>
                    BitCrypto<br/>
                    All rights reserved
                </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to ="/exchanges">Exchanges</Link>
                        <Link to ="/news">News</Link>
                    </Space>
               
            </div>
        </div>
    );
}
export default App;