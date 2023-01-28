import React from "react";
import logo from "../images/Asan-2.png";
import SocialMediaObjects from "./SocialMediaObjects";
import { Row, Col, Container } from "react-bootstrap";

const iconsColor = {
  color : '#646464'
}

function Footer() {
  return (
    <div className="footerStyle">
    <div style={{borderBottom : 'solid 1px #7Ab8FF'}}>
      <Container>
        <Row style={{display : 'flex', justifyContent : 'space-between', paddingBottom : '90px'}}>
          <Col lg={4} className='firstColFooter'>
            <div className="d-flex">
              <img src={logo} width="101px" alt="logo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore nmagna aliqua.</p>
            </div>
            <div>
              <SocialMediaObjects iconsColor={iconsColor} />
            </div>
          </Col>
          <Col lg={2} className='otherColFooter' >
            <h1>Saytın Xəritəsi</h1>
            <ul>
              <li><a href="/">Ana Səhifə</a></li>
              <li><a href="/">Haqımızda</a></li>
              <li><a href="/">Layihələr</a></li>
              <li><a href="/">Xəbərlər</a></li>
              <li><a href="/">Media</a></li>
            </ul>
          </Col>
          <Col lg={2} className='otherColFooter'>
            <h1>Haqqımızda</h1>
            <ul>
              <li><a href="/">Komandamız</a></li>
              <li><a href="/">Tərəfdaşlar</a></li>
              <li><a href="/">Mükafatlar</a></li>
            </ul>
          </Col>
          <Col lg={2} className='otherColFooter'>
            <h1>Bizimlə Əlaqə</h1>
            <p>Bakı, Azərbaycan, AZ 1078, Akademik Həsən Əliyev 36</p>
            <p>T: (+994 12) 444 74 75
            info@asanyouth.az</p>
          </Col>
        </Row>
      </Container>
      </div>
        <p>© 2021, <a href="/" style={{textDecoration : 'none'}}>optima.az</a>. Bütün hüquqları qorunur.</p>
    </div>
  );
}

export default Footer;
