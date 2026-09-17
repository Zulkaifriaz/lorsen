"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Choose1 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="travel-feature-section section-padding fix" data-background="/assets/img/travel-bg.jpg" >
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Ready to build with us?
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        Next Level Builders, Trusted Worldwide
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    Lorsen Limited partners with developers, governments and private clients to deliver buildings that stand the test of time, wherever in the world the project takes us.
                                </p>
                               <div className="feature-area">
                                    <div className="line-shape">
                                        <Image src="/assets/img/line-shape.png" alt="img" width={1} height={174}   />
                                    </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/08.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Ambitious Builds <br/> 
                                                Done Right
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>
                                                From concept and design through <br/>
                                                to structural completion.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".7s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/09.svg" alt="img" width={29} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Every Project Starts <br/>
                                                 With A Conversation
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                       <li>
                                            <span>
                                                Tell us what you want to build, <br/>
                                                we'll help you plan it.
                                            </span>
                                       </li>
                                    </ul>
                                </div>
                               </div>
                               <Link href="#contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Contact US<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-image wow img-custom-anim-left">
                                <Image src="/assets/img/man-image.png" alt="img" width={636} height={577}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;
