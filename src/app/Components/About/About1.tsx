"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const About1 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
            <section id="about" className="about-section section-padding  fix bg-cover" data-background="/assets/img/about/about-bg.jpg">
            <div className="right-shape float-bob-x">
                <Image src="/assets/img/about/right-shape.png" alt="img" width={362} height={382}   />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src="/assets/img/about/01.png" className="wow img-custom-anim-left" alt="img" width={350} height={425}   />
                                <div className="border-image">
                                    <Image src="/assets/img/about/border.png" alt="img" width={404} height={486}   />
                                </div>
                                <div className="about-image-2">
                                    <Image src="/assets/img/about/02.png" className="wow img-custom-anim-top" alt="img" width={360} height={384}   />
                                    <div className="plane-shape float-bob-y">
                                        <Image src="/assets/img/about/plane-shape.png" alt="img" width={299} height={187}   />
                                    </div>
                                    <div className="about-tour">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/10.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h4>Lorsen Limited</h4>
                                            <span>25 years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">About Lorsen Limited</span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        Next level builders, <br/>
                                        shaping skylines worldwide
                                    </h2>
                                </div>
                                <div className="about-area mt-4 mt-md-0">
                                    <div className="line-image">
                                        <Image src="/assets/img/about/Line-image.png" alt="img" width={1} height={187}   />
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/05.svg" alt="img" width={46} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Global Reach
                                            </h5>
                                            <p>
                                                We plan and deliver landmark buildings <br/> across continents, on time and on budget.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/06.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Safety First Always
                                            </h5>
                                            <p>
                                                Every site we run follows strict international <br/> safety and quality standards.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/07.svg" alt="img" width={35} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Expert Engineering Team
                                            </h5>
                                            <p>
                                                Certified architects and engineers oversee <br/> every project from concept to handover.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About1;
