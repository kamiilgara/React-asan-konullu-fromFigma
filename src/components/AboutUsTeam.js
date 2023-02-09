import React from 'react' ;
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function AboutUsTeam() {

  const [team, setTeam] = useState([
    {
      id : 0,
      head : 'ASAN MƏKTUB',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 1,
      head : 'BEYNƏLXALQ ƏLAQƏLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 2,
      head : 'ƏSGƏRƏ MƏKTUB',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 3,
      head : 'KİD',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 4,
      head : 'LİD',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 5,
      head : 'MƏDƏNİYYƏT CARÇISI',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 6,
      head : 'NÜMAYƏNDƏLİKLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/49e5/9a89/958ff39f7c07b0da72572d24722dc9a4?Expires=1673222400&Signature=I~M8QEe5kEm0NJybHjkeSMUin-NADjIIkKjN0FkkHkso~75bbTofOe9hSd6P2LUIEYtaUDsBaIb0tlSXNgV7VfH-qnQUAbTJGXe02cDVMI~iuqDxqobiDQ1ZnGyaesg1SCrTFrS0YXQdSPlyzxYAV8oXmSBppKAbjmZyzGt9NHMVjmL0HGEeznIUmxm-OnTBJcvYReHefYRIKn6O7MWNgVd8zWwEGKp11bOk324MiuqtLEWxZKiCs8kUcikTDZL6~as-sgKTaC5bBxVtr59rah7kzOfUGcVkKzSfwYeymIkgd-0CIuP-Oo7fAWVdhD2wNNSchLOtjS7I0sfuX7clsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id : 7,
      head : 'ÜMUMİ İŞLƏR',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image : 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1673222400&Signature=bo4UFGuRUT61TQWTs805OuHgEz5H5mYLMvTkvE9MdH75bynnPrQe9fp63WK6Xt4Af9HbqfRqFjvgVDhunVqCT6t4OpUxG1SVtTjQsg7wuRF0Us78l3yfiSmDgdvKooUlwuE0eX9GGxHAlpDtNkKKzgclbQv6lrpfFFNLkxG3vJApd6U4IGv75BHGo7DaGnCIHqRCo-zRish7AfzaMS-3Qd4fsEYbufM76QJWhT4PGI9p8duwnBJXygj7e26-bWhSTK7md7iSpcKhFXUXtQWL7kDqTQOMP7ktycHhB84jv0RwGtqR~VcN7RlbrMyS2GBJdE-cMtIrq97P0PcczGNjHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
  ]);


  return (
    <div className='pageHeader ourTeams'>
    <Container >
    <h1>HAQQIMIZDA</h1>
    <p>KOMANDAMIZ</p>
    <Row id='teamRow'>
    {team.map((teammate) => 
    <Col lg={4} key={teammate.id} >
    <div>
      <img src={teammate.image} alt={'pic'} width={'70px'} height={'70px'} />
      <h2>{teammate.head}</h2>
      <p>{teammate.text}</p>
    </div>
    </Col>
    )}
    </Row>
    </Container>

    </div>
  )
}

export default AboutUsTeam ;
