import React from 'react' ;
import mainPageMap from '../images/Map.png' ;

function MainMap() {
  return (
    <div className='ourProjects'>
      <p>XƏRİTƏ</p>
      <h5>Sizin üçün <b>ASAN</b> olsun deyə bölgələrə gəldik!</h5>
      <div className='mapDiv'>
        <img src={mainPageMap} width={'937px'} height={'761px'} alt={'Azerbaijan Map'} />
      </div>
    </div>
  )
}

export default MainMap
