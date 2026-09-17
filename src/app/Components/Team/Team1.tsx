import Image from 'next/image';
import React from 'react';

const Team1 = () => {

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Esther Howard', content:'Principal Architect'},
        {img:'/assets/img/team/02.jpg', name:'Leslie Alexander', content:'Chief Structural Engineer'},
        {img:'/assets/img/team/03.jpg', name:'Theresa Webb', content:'Head of Project Delivery'},
        {img:'/assets/img/team/04.jpg', name:'Floyd Miles', content:'Director of Operations'},
      ];

    return (
        <section id="team" className="team-section fix section-padding">
            <div className="jip-shape float-bob-x">
                <Image src="/assets/img/team/jip.png" alt="img" width={172} height={135}   />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        Meet The Team
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">Our Leadership</h2>
                </div>
                <div className="row">
                {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="team-card-item">
                            <div className="team-image">
                                <Image src={item.img} alt="img" width={306} height={348}   />
                            </div>
                            <div className="team-content">
                                <h4>{item.name}</h4>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                     ))}


                </div>
            </div>
         </section>
    );
};

export default Team1;
