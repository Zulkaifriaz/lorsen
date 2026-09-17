import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Destination1 = () => {

    const destinationContent = [
        {img:'/assets/img/destination/01.jpg', location:'Jakarta, Indonesia', title:'Brooklyn Heights Tower', year:'2024', floors:'42 Floors'},      
        {img:'/assets/img/destination/02.jpg', location:'Chumphon, Thailand', title:'Chumphon Civic Center', year:'2023', floors:'6 Floors'},      
        {img:'/assets/img/destination/03.jpg', location:'Bali, Indonesia', title:'Java & Bali Resort Complex', year:'2024', floors:'8 Floors'},      
        {img:'/assets/img/destination/04.jpg', location:'Singapore', title:'November Business Park', year:'2022', floors:'28 Floors'},      
        {img:'/assets/img/destination/05.jpg', location:'Dubai, UAE', title:'Brooklyn Beach Residences', year:'2023', floors:'35 Floors'},      
        {img:'/assets/img/destination/06.jpg', location:'Bangkok, Thailand', title:'Chumphon Logistics Hub', year:'2022', floors:'4 Floors'},      
        {img:'/assets/img/destination/07.jpg', location:'Bali, Indonesia', title:'Java & Bali One Life Resort', year:'2021', floors:'10 Floors'},      
        {img:'/assets/img/destination/08.jpg', location:'London, UK', title:'November Riverside Offices', year:'2021', floors:'18 Floors'},       
      ]; 

    return (
        <section id="projects" className="popular-destination-section section-padding pt-0">
            <div className="container">
                <div className="section-title-area justify-content-between">
                    <div className="section-title">
                        <span className="sub-title wow fadeInUp">
                            Our Portfolio
                        </span>
                        <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                            Featured Projects Across The World
                        </h2>
                    </div>
                    <Link href="#contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".5s">Start A Project<i className="bi bi-arrow-right"></i></Link>
                </div> 
                <div className="row">
                {destinationContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="destination-card-items">
                            <div className="destination-image">
                                <Image src={item.img} alt="img" width={304} height={254}   />
                            </div>
                            <div className="destination-content">
                                <ul className="meta">
                                    <li>
                                    <i className="bi bi-geo-alt"></i>
                                        {item.location}
                                    </li>
                                </ul>
                                <h5>
                                    {item.title}
                                </h5>
                                <ul className="info">
                                    <li>
                                    <i className="bi bi-calendar"></i>
                                        {item.year}
                                    </li>
                                    <li>
                                    <i className="bi bi-building"></i>
                                        {item.floors}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Destination1;
