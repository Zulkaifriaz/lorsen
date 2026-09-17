"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <Link href="#hero">
                                        <img src="/assets/img/logo/white-log.svg" alt="Lorsen Limited" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <h3>Lorsen Limited</h3>
                                    <p>Next level builders, shaping skylines across the world.</p>
                                    <div className="social-icon d-flex align-items-center justify-content-center">
                                        <a href="mailto:talk@lorsen.org" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
                                        <a href="https://www.linkedin.com/company/lorsen-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="#hero">
                                            Home 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about">
                                            About Us  
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#projects">
                                            Projects 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#team">
                                            Our Team 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Services</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link href="#services">
                                            Residential Construction  
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="#services">
                                            Commercial Buildings
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="#services">
                                            Industrial Facilities
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="#services">
                                            Infrastructure Projects
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="#services">
                                            Hospitality Developments
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>Building projects worldwide</h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:talk@lorsen.org">talk@lorsen.org</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="icon">
                                       <i className="bi bi-linkedin"></i>
                                       </div>
                                       <div className="content">
                                           <h6>
                                               <a href="https://www.linkedin.com/company/lorsen-limited" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright © <span>Lorsen Limited,</span> All Rights Reserved.
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">Website designed by X</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;
