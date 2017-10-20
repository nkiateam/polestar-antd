import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './style/App.css';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import routes from './routes';
const { Content, Footer, Sider } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this._renderMenu = this._renderMenu.bind(this);
        this._renderContents = this._renderContents.bind(this);
    }

    _renderMenu() {
        const createMenuKeyByPathname = () => {
            const pathname = location ? location.pathname : '';
            const key = typeof pathname === 'string' ? pathname.replace('/', '') : '';
            return key;
        };

        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[createMenuKeyByPathname()]}>

                    {/* Button Menu */}
                    <Menu.Item key="button">
                        <Link to="/button">
                            <span className="nav-text">Button</span>
                        </Link>
                    </Menu.Item>

                    {/* Wizard Menu */}
                    <Menu.Item key="wizard">
                        <Link to="/wizard">
                            <span className="nav-text">Wizard</span>
                        </Link>
                    </Menu.Item>

                </Menu>
            </Sider>
        )
    }

    _renderContents() {
        return (
            <Content style={{
                margin: '12px 12px 0 12px',
                padding: 16,
                backgroundColor: 'white',
            }}>
                {routes}
            </Content>
        )
    }

    _renderFooter() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Polestar UI/UX Framework ©2017 Created by NKIA
            </Footer>
        )
    }

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ height: '100%' }}>
                    {this._renderMenu()}
                    <Layout style={{ marginLeft: 200 }}>
                        {this._renderContents()}
                        {this._renderFooter()}
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;