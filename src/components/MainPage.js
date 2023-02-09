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
    image: 'https://s3-alpha-sig.figma.com/img/66bd/1407/2bd03eec82877d67c06ed20c141e7591?Expires=1676851200&Signature=n~g4OPqlrCC-h9rLUTqgA1zlTZIsuE0khREOcBrsRTHyyPzsuXRDvmblSG8sNeLm04A9b7s8IWhrDxSHmzTdJQl~vKV1XRT0w0OSn~iJbtre7U1-dw~uL2Xe1FmhQEHZ-ZiHy7y3vTuuEebAKbE1s6FfBSQasyi8zK-g3dhynJ2MEOZhtI8e0Wvm-8bzyw2puucgmjGczMlfLcYNFi2X-iXy3EaLp5m2q8MS97uxVZebblnKP7qR~7sn~-oVkwAZH4Ob~KUFdFCOiPhU0sTfI0zySIuxo4kUu6HXxbHSv7STh-8azPylxACYM-UnT2iH~xfQnoBUI8hmIef1ptEUOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 2,
    head: 'Mədəniyyət',
    image: 'https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1674432000&Signature=h8wcbCN9C7fezZgqwR4JUGjJrkfDWJyhS7-x5bODP71eX57D3zR6YdxeMF44lQu-8gmlOxfZPJh78NOxEykQmGhq3cvZO3w~ZxCDClya~vQstHCWOp4ndBASCvrt8Q~71g0pRKCMn1d2pRv2javwBkFthWHb067d2zMO-DH877q5siJHqKKXW63gNzuusg8SyIhDUHy~VQgmux4uo~IJu6lJeXjiYbQlF0gUWtNpoyfuVWFwssJnrlRl~ivx8DBeunpAXCmMmwkl17x-YR~ji6XR2Ys5wH-E2V0WdJrHViRdlIkdlgq7AjVZ2u3U9fjb-ltDAnMl6UvTYGXAQjP69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 3,
    head: 'Şəxsi İnkişaf',
    image: 'https://s3-alpha-sig.figma.com/img/a897/f787/b053809e8b0dd3a65c415fc745b3ff20?Expires=1676851200&Signature=lw11gUbtVTsXyIgkVm3aFe4LIrRXHe1qSbufXGpuFHCjqz~b6yT~7qPSArKCzZc5fODKOpkmI2-MG55iRDT8JXl82oyfSMC8VNmW-u1wtubO9PWAlyazyWcHEa6xUJJgAb8X5j~M1-RcIR7HuxMuTm7U3u54r-aCUHr1vaVT-ITe4P5O9isX-zmYx8cWH-6ZM16nqTlQlGj2THHRNe20ywdPXf5BZKmkGd9prasEvphPjqewlvz2JVbFVw73KDmS-Y~muL74-jBddA~Obfw3m~Qlm4EAyljnQ9lHku5vBplOKI8bijQUr-QI1Pg707vHseh82-X6D5c1pbOGhkGLww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 4,
    head: 'Sosial',
    image: 'https://s3-alpha-sig.figma.com/img/c2af/171f/8a95d08524408b5161b02e3b1a0eb4a5?Expires=1676851200&Signature=Rs1vF0mFTxEGYJkuSsfKlDplbNlFiE8-1m28csI4ttTNm6Bm5P5bfQZrX4DLO6M3rEYMG~7hrBP9POFIuZCZnAoWA5SnZRw23wIpD68aEV0p3ogQMu8Un42f1~Q3C78SKQdSliZJn2wwVyzsR7xvx7pCLsxPFJL9LDlEAnyQr56ftnljrl8cPU3w-HnVpOiMIl~zEekiK0fvFuYDoyYwAiHXp~zGQqWQGhrgn83pl8Ak5Dv5TT3jVKY-y70hXaAP~qp~JelOykQWDpQeQch~6sUjcOA0BYU-U7O8msrDzDWrRZI6zI1Dg02OMXrCauMVJLfRNfsJrpAsa9M0W8LMeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
