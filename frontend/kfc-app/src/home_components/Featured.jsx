import React from "react";
import Slider from "react-slick";
import styles from "./HomeSlider.module.css";
import SliderData from "../SliderData.json";

export default class Featured extends React.Component {
  state = {
    slideIndex: 1,
    updateCount: 1,
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <div className={styles.commonSliderDiv}>
        <div
          className={styles.commonSliderHeading}
          style={{ textAlign: "center" }}
        >
          <h2>FEATURED ITEMS</h2>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {SliderData.featured.map((item) => (
            <div
              className={styles.itemDiv}
              style={{ outline: "none" }}
              key={Math.random() * 1000}
            >
              <img
                src={item.image}
                alt={item.type}
                className={styles.itemImg}
              />
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemPrice}>{item.price}</p>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </Slider>
        <progress
          value={this.state.slideIndex}
          min={0}
          max={1}
          className={styles.sliderProgress}
        ></progress>
      </div>
    );
  }
}
