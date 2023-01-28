import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function OurAwards() {
  
  const [ourAwards, setourAwards] = useState([
    {
      key: 1,
      image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1672617600&Signature=nZpfIHNIorK7L-ZNtadFAaHmH0fKv3KbNDUjkCPuZjs6yT5J1HZMFXq8f00EI6MzzUGoVWISN5HA8IvlHPi-cWAPZrovf48sf4eFYFfdV7YA7Tsmm9EqBX8XePhXgnCG017cpDcC2LbXr4ScJ~H20Y~B8kqEuSMLi-2ikCriVP1qKogdWokNreVPnHyTwTdqN1zm-aFFUQpr2J-Qle29jxg9bjbaDAcmEY1N1mm2iDzy3Y33U9kkhulVQ06wnC0NN4-JmV17g6OkXIUod0PQs9MuYojewd6dnel8AvUeQmRoJdQQaKjCxf27JnB9HkwiyJ17LtSlliDNDjU7Bvwjnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      key: 2,
      image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1672617600&Signature=gxRG-cbASs7C9IPQgsZOQDOQX9lXK4Q-GbNkCr2ps4YLNn~~4lT02jlSranRRk2fsgwtMuaV-CYtSAdvWKjtfkudm-qp6g1PQdAmy2ajjL1JR7~GCZ4812CF~QLAGZiHQN71LVTIL-5Zz7fczx7uabCpdz2uE4qnm4aNgiKJUGadXQfyNpx7NJaTCZe78bCSirEOwPNuuji0qJaMDoCyGNc70fYoMr5FAf90-h7VmeUYtljrYy2cPtAm6p~nQq29YLusLi0yExceW1s~gtBQdaiDZjQ4qEUKmEi9JICuQvca6hGJoNKIPKiRN3NngYb~SjOpEwEgcFEmxXMwm8ooqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
    {
      key: 3,
      image: "https://s3-alpha-sig.figma.com/img/c355/5ed1/5f67c38e46dc6bf5758cf1f4e54657d3?Expires=1672617600&Signature=nZpfIHNIorK7L-ZNtadFAaHmH0fKv3KbNDUjkCPuZjs6yT5J1HZMFXq8f00EI6MzzUGoVWISN5HA8IvlHPi-cWAPZrovf48sf4eFYFfdV7YA7Tsmm9EqBX8XePhXgnCG017cpDcC2LbXr4ScJ~H20Y~B8kqEuSMLi-2ikCriVP1qKogdWokNreVPnHyTwTdqN1zm-aFFUQpr2J-Qle29jxg9bjbaDAcmEY1N1mm2iDzy3Y33U9kkhulVQ06wnC0NN4-JmV17g6OkXIUod0PQs9MuYojewd6dnel8AvUeQmRoJdQQaKjCxf27JnB9HkwiyJ17LtSlliDNDjU7Bvwjnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin Ən Uğurlu Gənclər Təşkilatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
    {
      key: 4,
      image: "https://s3-alpha-sig.figma.com/img/f6ba/89b9/a22db462748c3da526dddebf9a698486?Expires=1672617600&Signature=gxRG-cbASs7C9IPQgsZOQDOQX9lXK4Q-GbNkCr2ps4YLNn~~4lT02jlSranRRk2fsgwtMuaV-CYtSAdvWKjtfkudm-qp6g1PQdAmy2ajjL1JR7~GCZ4812CF~QLAGZiHQN71LVTIL-5Zz7fczx7uabCpdz2uE4qnm4aNgiKJUGadXQfyNpx7NJaTCZe78bCSirEOwPNuuji0qJaMDoCyGNc70fYoMr5FAf90-h7VmeUYtljrYy2cPtAm6p~nQq29YLusLi0yExceW1s~gtBQdaiDZjQ4qEUKmEi9JICuQvca6hGJoNKIPKiRN3NngYb~SjOpEwEgcFEmxXMwm8ooqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      head: "İlin  Ən Yaradıcı Layihəsi Mükafatı - 2021",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
  ]);

  return (
    <div className="ourAwards">
    <h1 className="ourAwards-h1">MÜKAFATLARIMIZ</h1>
      <Carousel responsive={responsive} renderArrowsWhenDisabled removeArrowOnDeviceType={["tablet", "mobile"]} >
        {ourAwards.map((award) => (
          <div key={award.key}>
          <div id="multi-carousel-awards">
            <img
              src={award.image}
              width={"110px"}
              height={"110px"}
              alt={"BMT"}
            />
            <h5>{award.head}</h5>
            <p>{award.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default OurAwards;
