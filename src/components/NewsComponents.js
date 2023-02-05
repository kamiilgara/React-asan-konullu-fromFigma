import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewsComponents({ news }) {

  return (
    <div className='allComBack'>
      <Container>
        <h1 className="main-h1">XƏBƏRLƏR</h1>
        <ul className='ulList'>
          {news.map(newss =>
            <li className='newsList' key={newss.key}>
              <h3 className='newsDate'>{newss.date}</h3>
              <h4 className='newsHead'>{newss.head}</h4>
              <p className='newsText'>{newss.text}</p>
              <Link to={`${newss.key}`} className='moreInfo'>Ətraflı oxu</Link>
            </li>
          )}
        </ul>
      </Container>
    </div>
  )
  
}

export default NewsComponents
