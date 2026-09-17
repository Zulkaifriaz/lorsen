"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

const Cta2 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cta-bg-section fix bg-cover" data-background="/assets/img/cta-bg.jpg" >
            <div className="container">
                <div className="row">
                   <div className="cta-wrapper">
                    <div className="section-title text-center">
                        <span className="sub-title text-white wow fadeInUp">
                            Let's Build Together
                        </span>
                        <h2 className="text-white wow fadeInUp wow" data-wow-delay=".3s">
                            We Provide The Best Building <br/>
                             Facilities Worldwide
                        </h2>
                    </div>
                    <div className="cta-btn wow fadeInUp wow" data-wow-delay=".5s">
                        <Link href="#contact" className="theme-btn">Request A Quote<i className="bi bi-arrow-right"></i></Link>
                     </div>
                   </div>
                </div>
            </div>

        </section>
    );
};

export default Cta2;
