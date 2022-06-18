import React from "react";
import Slider from "react-slick";
import SliderData from "../SliderData.json";
import styles from './HomeSlider.module.css';

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 1,
    updateCount: 3,
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <div className={styles.commonSliderHeading}>
          <h2>QUICK BITES</h2>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {SliderData.quickbites.map((item) => (
            <div className={styles.itemDiv} key={Math.random()*1000} style={{outline:"none"}}>
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
          max={6}
          className={styles.sliderProgress}
        ></progress>
      </div>
    );
  }
}
