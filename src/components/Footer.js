import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogoFooter from '../components/logo192.png';

function Footer() {

  return(
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col>
          <img src={LogoFooter}/>
          </Col>
           <Col className="p-0 d-flex justify content-end" md={3}>
              Created by Vessel Masters Inc. Copyright &copy; Vesssel Masters. All rights reserved.
           </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;