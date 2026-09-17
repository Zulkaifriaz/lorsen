"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner1 = () => {


    const heroContent = [
        {img:'/assets/img/hero/01.jpg', subtitle:'Next level builders, worldwide', title:'We design and build <br> landmark buildings'},
        {img:'/assets/img/hero/02.jpg', subtitle:'Next level builders, worldwide', title:'Engineering excellence <br> on every site'},
        {img:'/assets/img/hero/03.jpg', subtitle:'Next level builders, worldwide', title:'From blueprint to <br> skyline, we deliver'},
      ];

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


    return (
        <section id="hero" className="hero-section">
        <div className="swiper hero-slider">
            <div className="swiper-wrapper">
            <Slider {...settings}>
            {heroContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                    <div className="hero-1">
                        <div className="hero-bg bg-cover" data-background={item.img}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="hero-content">
                                        <div className="sub-title">
                                        {item.subtitle}
                                        </div>
                                        <h1>
                                        {parse(item.title)}
                                        </h1>
                                        <div className="hero-cta-area">
                                            <Link href="#contact" className="theme-btn">Request A Quote <i className="bi bi-arrow-right"></i></Link>
                                            <Link href="#projects" className="theme-btn style-2">View Our Projects <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="counter-area">
                                        <div className="counter-items">
                                            <div className="counter-text">
                                                <h2><span className="count">250</span>+</h2>
                                                <p>Projects Completed</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">40</span>+</h2>
                                                <p>Countries Served</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">25</span>+</h2>
                                                <p>Years of Building</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                 </Slider>

            </div>
        </div>
    </section>
    );
};

export default HeroBanner1;
