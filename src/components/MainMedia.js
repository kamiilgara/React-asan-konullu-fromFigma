import React from "react";
import socialMedias from '../images/socialMedias2.png'
import { Col, Row, Container } from "react-bootstrap";

function MainMedia() {
  return (
    <Row>
      <Col lg={4}>
        <div className="ourProjects">
          <p>MEDIA</p>
          <h5>ASAN Könüllüləri Mediada!</h5>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod</h4><h4>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,</h4><h4>
            quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in</h4>
        </div>
        <button type={'button'} className={'defaultButton'}>Ətraflı oxu</button>
      </Col>
      <Col lg={8}>
        <Container>
          {/* <Container style={{position : 'absolute'}}>
        <a className="mainPageMediaIcons" id="facebookbtn" href={'/'}><img width={'34.46px'} src={'https://s3-alpha-sig.figma.com/img/3198/f8a0/02c4d4aefece1619c8d221f138b7a564?Expires=1674432000&Signature=j0jr2cxwm5Q-bbw4Cp87-plbUvhx0bubiF5jciu0uswkSVvMFPR4iP~jDiZPbycwotxgPFu2t182Q4oQb37KGeiFt2wV6J4zU~rkanIL~rU14RyyoouvMPPUqH6sE-P5-tWh7V-f9yAH~SwhxZMFwLq2pA0xwGpemHg0sa20gLOdCl0oGqHp4InkCWlfSNLn3DUoSWY0KuakoZpah7hH~c4QZ2Vo34DPvmNZ6M3Hp7vUnWnDoTFBDMO7d0xri1vHSNEPEByalyFCaNgMeQG-gMOZozpaEnfdlY7X1u54LDBZSeOansYLfPqigKd95HHFSBW7zNh0t2p9RM-icJmRvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt={'/'} /></a>
        <a className="mainPageMediaIcons" id="businessbtn" href={'/'}><div>BUSINESS<br/>INSIDER</div></a>
        <a className="mainPageMediaIcons" id="forbesbtn" href={'/'}><div>Forbes</div></a>
        <a className="mainPageMediaIcons" id="bbcbtn" href={'/'}><div>BBC</div></a>
        <a className="mainPageMediaIcons" id="guardianbtn" href={'/'}><div><i>The</i><b>Guardian</b></div></a>
        <a className="mainPageMediaIcons" id="linkedinbtn" href={'/'}><img width={'26.35px'} src={'https://s3-alpha-sig.figma.com/img/cecc/84f4/51db9c6baa4fd85a3cabbb06de2d402c?Expires=1675036800&Signature=htFfzd96OmFlIC5BRKzQL2fInRPagKwJMpzoVZxsmgpwAiYgCGYLDopvGHqZh7zJdix8Cogqq8Bilkqo5LBtPNM6H86Mb9X6pBorRrIUlromwfDToNCh41DtW65saj6n8JLvIwzORPLfP1ln-JbmlSdOVpkGfa-CMav-ltlp-L51R6h9DPsG9j5p76Da~t0PzolQmK-m90cVWQpTbkeGX7~I2~KyEf9gJo~Tc8TPcpgU039yHv9LKUPhzj-DzYISE~s6ndXTClHkqxB~Ww2nW-IxoT0rbQOTl~z-AGmYoswJVMLDIJK-sZ25Jz8-uYGnI3lvX0YunB3dO60p0KH44w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt={'/'} /></a>
        <a className="mainPageMediaIcons" id="bingbtn" href={'/'}><img width={'34.46px'} src={'https://s3-alpha-sig.figma.com/img/2206/1633/73f0d005512d8961a458306a9ed4003d?Expires=1675036800&Signature=qF2nicp5sXX1Wvt9vGePf3J6LgX~T6ntI9bL-mg0z27NfqWZME3PmnpjLVTAcpyQIVDJEkk5C8UN2Ok-2LuKqhKuWKI8XCGUuwaLGSZHb88yDt3qQpAR14vu5L6xd~m2-94OZjsUX0uArkLW76pORdzuCWcMT3v2ED6HwTcSs~cxdLi5lDaACj0HiVbCfrqqg2z1Kbh1Do-ZnDIQ8O-gyr0Zs3EsnqVxc9dgrLzd-1BFgZe14ZO1xeO9nVH-iSdHM7IgyN6w0-9gTQt362Ajh8Wv~UxlTWQW~vjyW7GrZW3qGyahE9tp469Y9IBCNRv8mL2l6ST54MUjUY4Yd0GyKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt={'/'} /></a>
        <a className="mainPageMediaIcons" id='youtubebtn' href={'/'}><img width={'49.66px'} src={'https://s3-alpha-sig.figma.com/img/4998/8b6b/7db7855de4ff352c5d2f9e561a7cfc3b?Expires=1675036800&Signature=EgA2pHUh5r3mk~DXX79IjjGGAtsmivo-xOewbadtKcQPcdL-cEFX2UBNOsLBGzW96gbrvneYhV3A7gv09i8pDxvrtJ1sret2JpWbmzsYaba0eVW4fLebjFhccX6l~r~oIjXaOKecPxeVFog1Yca0f-idlUOZXyiTZkImJvNO-9PLwRUSM1lvscndwz2aQevGec1jU7qXYbk-fWWapRMoVQzCxTO91LCiXBAdXFJOaeWZlWt-Aa-chBzx82RIGD2niAdT3rszDqOU~Q6tn4XSeXLtqH8-94kTuk8vE~8rW72ixI8Dt95UL~CEZMnuH~v3sZxQ-wgUQ~AwYgJNcLm-6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt={'/'} /></a> */}
          {/* <a className="mainPageMediaIcons" href={'/'}><img width={'50.68px'} src={''} alt={'/'} /></a> */}
          {/* <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a>
        <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a>
        <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a>
        <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a>
        <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a>
        <a className="mainPageMediaIcons" href={'/'}><img src={''} alt={'/'} /></a> */}
          {/* </Container> */}

          <img className="d-block ms-auto mt-5" src={socialMedias} alt="immgg" />
        </Container>
      </Col>
    </Row>
  );
}

export default MainMedia;
