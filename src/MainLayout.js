import React from 'react'
// import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col , Div} from 'react-bootstrap'

//  --- components
import NavbarMenu from './Navbar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {

    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <NavbarMenu />
                </Col>
            </Row>

            <Row>
                <Col md={1}>
                test

                </Col>
                <Col>
                   <div style={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}>
                    {/* <Outlet /> */}
                    test
                    </div>
                </Col> 
                <Col md={1}>
                test

                </Col>
            </Row>
        </Container>
    );
  };
export default MainLayout; 