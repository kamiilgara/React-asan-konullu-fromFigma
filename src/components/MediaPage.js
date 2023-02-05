import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MediaPage({ media }) {
  return (
    <div className='allComBack'>
      <Container>
        <h1 className="main-h1">MEDIA</h1>

        <Row>
          {media.map(mediaa =>
            <Col lg='4' key={media.id}>
              <div className='media'>
                <h3>{mediaa.date}</h3>
                <h2>{mediaa.head}</h2>
                <img src={mediaa.image} className='d-block' />
                <p>{mediaa.text}</p>
                <Link to={`${mediaa.id}`} className='moreInfo'>Ətraflı oxu</Link>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default MediaPage;
