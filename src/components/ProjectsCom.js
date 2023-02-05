import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1480 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1480, min: 1050 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 1050, min: 0 },
    items: 1,
    slidesToSlide: 1
  },
};

function ProjectsCom({ projects }) {


  return (
    <div className="pageHeader">
      <Container>
        <div id='forPosition'>
          <h1>LAYİHƏLƏR</h1>
          <p>BEYNƏLXALQ</p>
          <Carousel responsive={responsive} className='projectsCarousel' removeArrowOnDeviceType={["tablet", "mobile"]} renderArrowsWhenDisabled>
            {projects.map((project) =>
              <div key={project.key}>
                <h5>{project.head}</h5>
                <img src={project.image} alt='projectImage' width={'397px'} />
                <p>{project.text}</p>
                <Link to={`${project.key}`} className='moreInfo'>Ətraflı oxu</Link>
              </div>
            )}
          </Carousel>
        </div>
      </Container>
    </div>
  )
}

export default ProjectsCom;
