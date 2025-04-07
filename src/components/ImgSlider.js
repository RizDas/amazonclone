import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Carousel {...settings}>
      <div>
        <img src="/images/banner1.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner2.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner3.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner4.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner5.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner6.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner7.jpg" alt="" />
      </div>
      <div>
        <img src="/images/banner8.jpg" alt="" />
      </div>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  top: 0;
  right: 0;
  left: 0;
  width: 98.8vw;
  height: auto;
  mask: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin-bottom: -230px;

  div {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
`;

export default ImgSlider;
