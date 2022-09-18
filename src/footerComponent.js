import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.svg"
import SubmissionForm from "./submissionComponent";
import React from 'react';
import { ThemeContext } from ".";
import { useContext } from "react";

const FooterComponent = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)
    return (
        <footer style={{ background: theme.background, color: theme.foreground }}>
            <Row className="container-fluid mt-5 mb-5">
                <Col xs={12} md={4} lg={3}>
                    <div className='p-4' >
                        <img src={logo} className='navlogo' style={{ maxWidth: '70px' }} alt='Company logo' />
                        
                    </div>
                </Col>
                 <Col xs={12} md={4} lg={3}>
                    <div className='p-4' >
                        <h3 className="text-success">
                            Contact Us
                        </h3>
                        <p className="text-success">
                            Tel: +2348031234567
                        </p>
                    </div>
                </Col><Col xs={12} md={4} lg={3}>
                    <div className='p-4' >
                        <h3 className="text-success">
                            Address
                        </h3>
                        <p className="text-success">
                        45 Okpanam Road, Asaba, Delta State
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-4' >
                    <h3 className="text-success">
                            Subscribe
                        </h3>
                        <SubmissionForm/>
                        
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default FooterComponent;