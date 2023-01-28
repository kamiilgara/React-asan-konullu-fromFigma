import React from "react";
import { Container } from "react-bootstrap";
import ControlledCarousel from "./ControlledCarousel";
import AboutAct from "./AboutAct";
import FourLink from "./FourLink";
import TwoDivPlus from "./TwoDivPlus";
import OurProjects from "./OurProjects";
import MainMap from "./MainMap";
import OurAwards from "./OurAwards";
import MainMedia from "./MainMedia";
import HistoryToday from "./HistoryToday";
import TransitionCom from "./TransitionCom";

const ourProjects = [
  {
    id: 0,
    head: 'Beynəlxalq',
    image: 'https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1674432000&Signature=bV3YHW6MXdFr~eteieaHzGbdNndidZ3GSmxNGg6CxhFH~0Phd97CVfPBEat3LfHqrvOCO8usVTCyvj3aCTRabJiKtrSbpinVAc~aoXpHigD0episcpQf0kuGTflAnFVPRyoaJsYZiak7QZ0xYpATemJQCAjLk169GvoeM7Bs9DCrVLYL7YxWoMGpI4SmQrGlNQ~MX7SuCbsVT4bWhoH2ySxKpxbwdyQq~4ZwWU7yH2np~DrGPJArT6Ll7ui9toLsx6Ra9DvhFljvSAcj7bjUi8PVriSe4kIDPJ3DzvA~3l9YcLC~kV6wyxdGAC3wyAGZpl~itcv5Ze7OLsH7iEP0FQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 1,
    head: 'Hərbi Vətənpərvərlik',
    image: 'https://s3-alpha-sig.figma.com/img/66bd/1407/2bd03eec82877d67c06ed20c141e7591?Expires=1674432000&Signature=MxcOlS6jsL9YlsGnbv15aIatq3fEiAQl8HX0y~0~gsi2d8-B0jykJrls5yXEN5nwhjeTQy0cVrFSSDn1RA53mH4f5fowvtT~01bk0WBwtCvP55VQ0s8FOaz62OKGM16R62iCNv5o06vvAJj8pWkUFFwLq3y49Ax-53hE1RxO8s1PyiwKcx0ews7SWHtq6UAKSyGLiWacnwCJm-Xz28~35o0CM4I0Yht59j9TbeEWrpwqh8rdYRzWddktft3PVX33aZAsKyycTfbz-92J4wlnukfb85igQSkKIvBZSXg9fpeIdQU8DBjcmFhYpmtJgtpGSlNcuKanTZ7ZCfock3Fu0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 2,
    head: 'Mədəniyyət',
    image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 3,
    head: 'Şəxsi İnkişaf',
    image: 'https://s3-alpha-sig.figma.com/img/a897/f787/b053809e8b0dd3a65c415fc745b3ff20?Expires=1674432000&Signature=ohJPrE4c5gD~B-5ghLH-aenC2DxyzbedrapKKLTks~s5RJcNZjpcsVC35cE-Jjj4MwV9hBvRKvPfXW-iBNOCPrgEmpwaAOkTltA9wh89hAgl5224lDpN6S4G3RJjAVDSgH1RlyoApW0aZW7LOrGcChEpKA5i7IX4oRe~IrLKkOWadFNv~5baHH36t8oxD7RHsDFfS-TyiBm-akK~OkBcJt0dyO7EVdyA1p-0SThrrgOOssAvAj1YDQi0DNNm5SppexxaL65MQPmRmCLzovnRWz7bGTboBtAJOz6R29PeyJAQhzDwCyvcxo6iTTsXQXQE8TOTbeJjYsuk0SoEGAf9Dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 3,
    head: 'Sosial',
    image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1674432000&Signature=bu2Ll8JMriFBU77cOV~IEXI54AUY14TnVKWS0YIVNaTyE3zPrTbtEhvMF2Ly~obHZzVpSzh7ZclEBYrYS7fK~xHvzrmlfvFuUml7AZStb5ciTdHjMkhh3NXHMdxZ2CoU5QHpYR3fF5aHMCybOwpQnWLXHoZbk4Lanp0PtEnF5h9~Q0b~uHdR48M5sUh87Sn6GuhNqxsVkwetWBZYOXuyjdaxYZ0iX0cxYsbN88wuUqcD4qPbCCw0QBnz9Gu-7IB9biotVvLV~N6p6xmQjxi~-g0WXtUuthX2pX06NdFmc8YZnncTt--Y8ZgWF0StuOPJdFvEvQHQeeMyJ8WBePJEoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
]

function MainPage() {
  return (
    <div className="mainPage">
      <ControlledCarousel />
      <Container>
        <AboutAct />
        <FourLink />
        <TwoDivPlus />
        <OurProjects ourProjects={ourProjects} />
        <MainMap />
        <OurAwards />
        <MainMedia />
        <HistoryToday />
        <TransitionCom />
      </Container>
    </div>
  );
}

export default MainPage;
