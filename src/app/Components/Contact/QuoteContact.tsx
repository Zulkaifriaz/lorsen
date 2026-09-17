"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const QuoteContact = () => {

    const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Quote Request${form.projectType ? ' - ' + form.projectType : ''} from ${form.name || 'Website'}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`
        );
        window.location.href = `mailto:talk@lorsen.org?subject=${subject}&body=${body}`;
    };

    return (
        <div id="contact">
            <section className="contact-us-section fix section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/18.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            Our Head Office
                                        </h3>
                                        <p>
                                            Lorsen Limited operates project sites worldwide, coordinated from our head office.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main style-2">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/19.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="mailto:talk@lorsen.org">talk@lorsen.org</a>
                                        </h3>
                                        <p>
                                            Email us for project enquiries and quotes anytime.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="contact-us-main">
                                <div className="contact-box-items">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/20.svg" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="https://www.linkedin.com/company/lorsen-limited" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        </h3>
                                        <p>
                                            Follow Lorsen Limited for project updates and news.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us-section-2 section-bg-2 fix">
                <div className="container">
                    <div className="contact-us-wrapper">
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-us-contact">
                                    <div className="section-title text-center">
                                        <span className="sub-title text-white wow fadeInUp">
                                            Request A Quote
                                        </span>
                                        <h2 className="text-white wow fadeInUp wow" data-wow-delay=".2s">
                                            Tell Us About Your Project
                                        </h2>
                                    </div>
                                    <div className="comment-form-wrap">
                                        <form id="quote-form" onSubmit={handleSubmit}>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="name" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="email" name="email" id="email4" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <input type="text" name="projectType" id="projectType" placeholder="Project Type (e.g. Commercial, Residential)" value={form.projectType} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <textarea name="message" id="message" placeholder="Tell us about your project" value={form.message} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <button type="submit" className="theme-btn">
                                                        Request A Quote
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuoteContact;
