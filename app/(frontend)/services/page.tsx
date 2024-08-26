"use client";

import { useRouter } from "next/navigation";
import React, {useRef, useState } from "react";
import { toast } from "react-toastify";
import { saveContactFormApi } from "@/src/services/HomeService";
import ContactModel from "../components/models/contactModel";
import ServiceModel from '@/app/(frontend)/components/models/ServiceModel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import "@/public/css/services-styles.css";
import {Navigation, Pagination } from 'swiper/modules';
import SwiperCore, { Swiper as SwiperType } from "swiper";
function Services() {
  const router = useRouter();
  const contactSideText =" An esteemed award-winning real estate brokerage based in Dubai, UAE.";
  const pageUrl ="Services"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    formName: "enquireForm",
    page: "services",
  });
  const PropertySwiperRef = useRef<SwiperCore>();
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      return toast.error("Please fill required field");
    }
    saveContactFormApi(formData)
      .then((res) => {
        toast.success(
          "Enquire form submitted successfully, out support teams contact you soon"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          formName: "enquireForm",
          page: "services",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong, please try again");
      });
  };
  const goldenHandler = () => {
    router.push("/goldenVisa");
  };
  return (
    <section className="pageArea">
      {/*<header className="serviceHeader">
        <img src="/images/banner/service-banner.webp" className="headerImg" />
         <div className="p-relative">
          <video
            className="d-block w-100 videoMain"
            autoPlay
            loop
            muted
            preload="metadata"
            poster="/images/services/service-header.webp"
          >
            <source src="/videos/services.mp4" type="video/mp4" />
            <source src="/videos/services.mp4" type="video/mov" />
            Sorry, your browser doesn't support videos.
          </video>
          <div className="videoOverlay"></div>
        </div> 
      </header>*/}


      {/* <section className="servicePageSec">
        <div className="container">
          <h4 className="sctionMdTitle text-primary text-center mb-4">
            SERVICES  
          </h4>
          <p className="fs-14 text-secondary mb-4">
            Explore a comprehensive range of specialized services. We have a
            diverse range of services to cater to a wide spectrum of real estate
            needs, offering personalized solutions for each client. From
            residential sales & leasing to investment consultants, our team is
            dedicated to delivering exceptional results.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service1.webp"
                  className="serviceCardImg"
                  alt="Residential Sales & Leasing"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">
                    Residential Sales & Leasing
                  </h3>
                  <p className="fs-14 text-secondary mb-4">
                    With decades of experience and helping thousands of people,
                    our team possesses an in-depth knowledge of residential
                    sales and leasing. Our dedicated team is committed to
                    assisting you in finding ideal buyers and maximizing your
                    ROI.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service2.webp"
                  className="serviceCardImg"
                  alt="Commercial Sales & Leasing"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">
                    Commercial Sales & Leasing
                  </h3>
                  <p className="fs-14 text-secondary mb-4">
                    Range specializes in matching commercial properties to
                    businesses of all sizes, from startups to established
                    corporations. We prioritize your needs and goals to find the
                    ideal space for your business growth, whether it's offices
                    or retail.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service3.webp"
                  className="serviceCardImg"
                  alt="Property Management"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">Property Management</h3>
                  <p className="fs-14 text-secondary mb-4">
                    We offer comprehensive property management services tailored
                    to meet your unique needs. Our experienced team is dedicated
                    to ensuring your property is well-maintained and optimized
                    for its highest potential.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service4.webp"
                  className="serviceCardImg"
                  alt="Holiday Homes"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">Holiday Homes</h3>
                  <p className="fs-14 text-secondary mb-4">
                    We have a curated selection of luxurious holiday homes,
                    designed to elevate your vacation experience. With
                    extraordinary locations & amenities, our properties provide
                    the perfect backdrop for creating lasting memories with
                    loved ones.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service5.webp"
                  className="serviceCardImg"
                  alt="Mortgage Services"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">Mortgage Services</h3>
                  <p className="fs-14 text-secondary mb-4">
                  My mortgage brokerage is dedicated to helping our clients achieve their dream of home ownership. Our team of experienced professionals are committed to providing exceptional customer service and personalised solutions to meet the specific needs of each of our clients.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serviceCard">
                <img
                  src="/images/services/service6.webp"
                  className="serviceCardImg"
                  alt=" Investment Consultancy"
                />
                <div className="serCardContent ">
                  <h3 className="cardTitle text-center">
                    Investment Consultancy{" "}
                  </h3>
                  <p className="fs-14 text-secondary mb-4">
                    Our seasoned advisors offer in-depth market analysis and
                    customized recommendations to help you make informed
                    investment decisions. With Range, you will have access to a
                    wealth of knowledge and expertise to diversify your property
                    portfolio.
                  </p>
                  <button
                    className="fillBtn  mrAuto cardBtn"
                    data-bs-toggle="modal"
                    data-bs-target="#enquireNow"
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="imgSection overlayBgClr">
        <div className="contentBox">
          <h2>CHECK YOUR ELIGIBILITY FOR GOLDEN VISA</h2>
          <button
            className="bdrBtn largBtn text-white border border-white"
            onClick={goldenHandler}
          >
            Check Now
          </button>
        </div>
      </section> */}
      <ServiceModel></ServiceModel>

      <header className="servicesHeader">
             <img src="/images/banner/banner-6.png"alt="service image" className="serviceHdrImg"/>
      </header>
      <section className="investSection">
              <div className="container">
                    <img src="/images/banner/banner-8.png" className="banner8" />
                    <h4 className="sctionMdTitle text-primary  mb-5 text-center texWt">
                          BENEFITS OF INVESTING IN DUBAI
                    </h4>
                    <div className="row align-items-center">
                         <div className="col-md-6">
                              <img src="/images/properties/p9.png" className="pro9Img"/>
                         </div>
                         <div className="col-md-6">
                               <div className="benefitsList">
                                    <div className="benefitItem">
                                         <img src="/images/icons/circle-icon-1.png" className="circleIcon"/>
                                         <p>Tax-free Income</p>
                                    </div>
                                    <div className="benefitItem">
                                         <img src="/images/icons/circle-icon-2.png" className="circleIcon" />
                                         <p>Golden Visa</p>
                                    </div>
                                    <div className="benefitItem">
                                         <img src="/images/icons/circle-icon-3.png" className="circleIcon" />
                                         <p>One of the world's safest cities</p>
                                    </div>
                                    <button className="btn btn-blue text-uppercase btn-lg mx-2 whtBtn" >BOOK YOUR SLOT NOW</button>
                               </div>
                               
                         </div>
                    </div>
               </div>
               
      </section>
      <section className="dubaiSection">
               <div className="container">
                     <div className="row">
                           <div className="col-md-4">
                                <div className="sliderclmContent">
                                      <h4 className="sctionMdTitle text-primary  mb-3">
                                          WHY DUBAI?
                                      </h4>
                                      <p className="text-secondary mb-5">
                                          Dubai is a global hub of ambition and innovation. Here, efficiency
                                          meets opportunity, offering unparalleled access to emerging markets 
                                          and a secure environment that fosters accelerated growth. Dubai seamlessly 
                                          integrates people, processes, and technology, creating a dynamic and agile 
                                          foundation for businesses across all industries.
                                      </p>
                                      <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                </div>
                           </div>
                           <div className="col-md-8">
                               <Swiper
                                      slidesPerView={3}
                                      spaceBetween={15}
                                      pagination={{
                                        clickable: true,
                                      }}

                                      breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 480px
                                        480: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                          slidesPerView: 2,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                          slidesPerView: 3,
                                        },
                                      }}
              
                                        modules={[Pagination]}
                                        className="multiSlider overflowSlider"
                                      >
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p12.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent">
                                                           <p>The third most-visited city in the world.</p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p11.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent">
                                                           <p>
                                                              At almost 17 million arrivals in 2023, Dubai outranked travel giants, 
                                                              including Paris, Bangkok, and New York City.
                                                            </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p10.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent">
                                                           <p>
                                                              Dubai has around 600 hotels and over 100,000 rooms, so
                                                               you’ll always find somewhere amazing to stay.
                                                           </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p11.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent">
                                                           <p>
                                                              At almost 17 million arrivals in 2023, Dubai outranked travel giants, 
                                                              including Paris, Bangkok, and New York City.
                                                            </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      
                                  
                                </Swiper>
                           </div>

                     </div>
               </div>
      </section>
      <section className="exploreSection">
               <div className="container">
                      <h4 className="sctionMdTitle text-primary  mb-5 text-center">EXPLORE A WORLD OF LIVING OPTIONS</h4>
                          
                           <div className="">
                               <Swiper
                                      slidesPerView={3}
                                      spaceBetween={0}
                                      pagination={{
                                        clickable: true,
                                      }}

                                      breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 480px
                                        480: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                          slidesPerView: 3,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                          slidesPerView: 3,
                                        },
                                      }}
              
                                        modules={[Pagination]}
                                        className="multiSlider multipleItemsSlider slider3d"
                                      >
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p13.png" className="sliderCrdImg" />
                                                      <div className="sliderCntntBx">
                                                            <p>APARTMENTS</p>
                                                            <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p14.png" className="sliderCrdImg" />
                                                      <div className="sliderCntntBx">
                                                            <p>APARTMENTS</p>
                                                            <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p15.png" className="sliderCrdImg" />
                                                      <div className="sliderCntntBx">
                                                            <p>APARTMENTS</p>
                                                            <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p16.png" className="sliderCrdImg" />
                                                      <div className="sliderCntntBx">
                                                            <p>APARTMENTS</p>
                                                            <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p13.png" className="sliderCrdImg" />
                                                      <div className="sliderCntntBx">
                                                            <p>APARTMENTS</p>
                                                            <button className="btn btn-blue text-uppercase btn-lg mx-2">BOOK YOUR SLOT NOW</button>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      
                                  
                                </Swiper>
                           </div>

                     
               </div>
      </section>
      <section className="beachfrontSection">
               <div className="container">
                      <h4 className="sctionMdTitle text-primary  mb-5 text-center">BEACHFRONT & ISLAND LIVING</h4>
                          
                           <div className="">
                               <Swiper
                                      slidesPerView={4}
                                      spaceBetween={15}
                                      navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                      }}
                                      pagination={{
                                        clickable: true,
                                      }}

                                      breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 480px
                                        480: {
                                          slidesPerView: 1,
                                        },
                                        // when window width is >= 768px
                                        768: {
                                          slidesPerView: 2,
                                        },
                                        // when window width is >= 1024px
                                        1024: {
                                          slidesPerView: 4,
                                        },
                                      }}
                                      
                                      onSwiper={(swiper) => {
                                        PropertySwiperRef.current = swiper;
                                      }}
              
                                        modules={[Pagination]}
                                        className="multiSlider  multipleItemsSlider"
                                      >
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p13.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent  textCenter">
                                                           <p>RED DESIRE</p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p14.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent  textCenter">
                                                           <p>
                                                               DUBAI HARBOUR
                                                            </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p15.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent  textCenter">
                                                           <p>
                                                               SINIYA ISLAND
                                                           </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p16.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent  textCenter">
                                                           <p>
                                                              SEAPOINT
                                                            </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                                 <div className="sliderImgCrd">
                                                      <img src="/images/properties/p13.png" className="sliderCrdImg" />
                                                      <div className="sliderOverlayContent textCenter">
                                                           <p>
                                                               DUBAI HARBOUR
                                                            </p>
                                                      </div>
                                                 </div>
                                      </SwiperSlide>
                                      <div
                                          className="swiper-button-prev swiperUniquePrev text-white"
                                          onClick={() =>
                                            PropertySwiperRef.current?.slidePrev()
                                          }
                                          >
                                          <span className="">
                                            <i className="bi bi-chevron-left fs-1"></i>
                                          </span>
                                      </div>
                                      <div
                                          className="swiper-button-next swiperUniqueNext text-white"
                                          onClick={() =>
                                            PropertySwiperRef.current?.slideNext()
                                          }
                                        >
                                          <span className="">
                                            <i className="bi bi-chevron-right fs-1"></i>
                                          </span>
                                      </div>
                                </Swiper>
                           </div>

                     
               </div>
      </section>
      <section className="exploreSection">
               <div className="container">
                      <h4 className="sctionMdTitle text-primary  mb-5 text-center">EXTRAORDINARY COMMUNITIES WITH WORLD-CLASS AMENITIES</h4>
                      <div className="">
                          <Swiper
                                slidesPerView={2}
                                spaceBetween={30}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl: ".swiper-button-prev",
                                }}
                                pagination={{
                                  clickable: true,
                                }}

                                  breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                      slidesPerView: 1,
                                    },
                                    // when window width is >= 480px
                                    480: {
                                      slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                      slidesPerView: 2,
                                    },
                                    // when window width is >= 1024px
                                    1024: {
                                      slidesPerView: 3,
                                    },
                                  }}
                                onSwiper={(swiper) => {
                                  PropertySwiperRef.current = swiper;
                                }}
        
                                  modules={[Pagination]}
                                  className="multiSlider multipleItemsSlider "
                                >
                                <SwiperSlide>
                                            <a href="#" className="sliderImgCrd">
                                                <img src="/images/properties/p17.png" className="sliderCrdImg" />
                                                <p className="sliderPtitle">GOLFCOURSE</p>
                                            </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <a href="#" className="sliderImgCrd">
                                                <img src="/images/properties/p18.png" className="sliderCrdImg" />
                                                <p className="sliderPtitle">LAZY RIVER</p>
                                            </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <a href="#" className="sliderImgCrd">
                                                <img src="/images/properties/p17.png" className="sliderCrdImg" />
                                                <p className="sliderPtitle">GOLFCOURSE</p>
                                            </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <a href="#" className="sliderImgCrd">
                                                <img src="/images/properties/p18.png" className="sliderCrdImg" />
                                                <p className="sliderPtitle">LAZY RIVER</p>
                                            </a>
                                </SwiperSlide>
                                
                                <div
                                    className="swiper-button-prev swiperUniquePrev text-white"
                                    onClick={() =>
                                      PropertySwiperRef.current?.slidePrev()
                                    }
                                    >
                                    <span className="">
                                      <i className="bi bi-chevron-left fs-1"></i>
                                    </span>
                                </div>
                                <div
                                     className="swiper-button-next swiperUniqueNext text-white"
                                    onClick={() =>
                                      PropertySwiperRef.current?.slideNext()
                                    }
                                  >
                                    <span className="">
                                      <i className="bi bi-chevron-right fs-1"></i>
                                    </span>
                                </div>
                          </Swiper>
                      </div>
               </div>
      </section>
      <section className="aboutRangeSection">
               <div className="container">
                     <div className="row">
                          <div className="col-md-6">
                               <div className="gridImgRow">
                                      <div className="gridImgClm">
                                          <img src="/images/properties/p19.png" className="gridClmImg"/>
                                          <h2 className="h2MdText">TOP BROKERS IN DUBAI</h2>
                                      </div>
                                      <div className="gridImgClm grdSecondClm">
                                          <img src="/images/properties/p20.png" className="gridClmImg "/>
                                      </div>
                                </div>  
                          </div>
                          <div className="col-md-6">
                                <div className="aboutRangeContent">
                                     <h4 className="sctionMdTitle text-primary  mb-3">ABOUT RANGE</h4>
                                     <p className="text-secondary mb-3">
                                        Range International Property Investments is an esteemed award-winning real 
                                        estate brokerage based in Dubai, UAE. With over two decades of unmatched experience,
                                        we have established ourselves as industry leaders, renowned for our exceptional 
                                        services and deep knowledge of the real estate market locally and internationally.
                                     </p>
                                     <div className="iconTextBar">
                                          <img src="/images/icons/about-mission-icon.png" className="mdIcon" />
                                          <h5 className="h5MdText">MISSION</h5>
                                     </div>
                                     <p className="text-secondary mb-3">
                                         We aspire to shape tomorrow’s real estate through unparalleled services,
                                         cutting-edge products, and seamless transactions. Our commitment is to redefine
                                         customer satisfaction, offer diverse investment opportunities, and set new industry
                                          standards.
                                     </p>
                                     <div className="iconTextBar">
                                          <img src="/images/icons/about-vision-icon.png" className="mdIcon" />
                                          <h5 className="h5MdText">VISION</h5>
                                     </div>
                                     <p className="text-secondary mb-4">
                                          Empowering aspirations in real estate, we envision excellence as a premier
                                          brokerage in the UAE, expanding our influence across diverse markets. 
                                          We aim to unlock untapped potential in real estate technology, propelling 
                                          us to pioneer and craft bespoke products tailored for international markets, 
                                          ultimately reshaping the global real estate landscape.
                                     </p>
                                     <button className="btn btn-blue text-uppercase btn-lg mx-2">EXPLORE MORE</button>
                                </div>
                          </div>
                     </div>
               </div>
      </section>
      <section className="whyChooseSection">
               <div className="container">
                      <h4 className="sctionMdTitle text-primary  mb-5 text-center">WHY CHOOSE US?</h4>
                      <p className="text-secondary text-center">
                          At Range International Property Investments, we understand the frustrations of 
                          navigating the real estate market. That's why we've crafted an exclusive service tailored 
                          to your needs.
                      </p>
                      
                      <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                  // when window width is >= 320px
                                  320: {
                                    slidesPerView: 1,
                                  },
                                  // when window width is >= 480px
                                  480: {
                                    slidesPerView: 1,
                                  },
                                  // when window width is >= 768px
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  // when window width is >= 1024px
                                  1024: {
                                    slidesPerView: 3,
                                  },
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                onSwiper={(swiper) => {
                                  PropertySwiperRef.current = swiper;
                                }}
        
                                  modules={[Pagination]}
                                  className="multiSlider multipleItemsSlider iconCardSlider  simpleArrows"
                                >
                                <SwiperSlide>
                                            <div className="slidericonCard">
                                                 <img src="/images/icons/sldr-icon-1.png" className="sldrBoxicon"/> 
                                                 <h3 className="h3LgText maxWd">Explore and Compare</h3>
                                                 <p className="text-secondary text-center">
                                                    Our verified agents will guide you through a comprehensive exploration of 
                                                     the market, ensuring you understand all your options.
                                                 </p>
                                            </div>
                                </SwiperSlide>
                             
                                <SwiperSlide>
                                            <div className="slidericonCard">
                                                 <img src="/images/icons/sldr-icon-2.png" className="sldrBoxicon"/> 
                                                 <h3 className="h3LgText maxWd">Transparency Guaranteed</h3>
                                                 <p className="text-secondary text-center">
                                                    Our verified agents will guide you through a comprehensive exploration of 
                                                     the market, ensuring you understand all your options.
                                                 </p>
                                            </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <div className="slidericonCard">
                                                 <img src="/images/icons/sldr-icon-3.png" className="sldrBoxicon"/> 
                                                 <h3 className="h3LgText maxWd">Personalized Guidance</h3>
                                                 <p className="text-secondary text-center">
                                                    Our verified agents will guide you through a comprehensive exploration of 
                                                     the market, ensuring you understand all your options.
                                                 </p>
                                            </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <div className="slidericonCard">
                                                 <img src="/images/icons/sldr-icon-1.png" className="sldrBoxicon"/> 
                                                 <h3 className="h3LgText maxWd">Explore and Compare</h3>
                                                 <p className="text-secondary text-center">
                                                    Our verified agents will guide you through a comprehensive exploration of 
                                                     the market, ensuring you understand all your options.
                                                 </p>
                                            </div>
                                </SwiperSlide>

                                <div
                                    className="swiper-button-prev swiperUniquePrev "
                                    onClick={() =>
                                      PropertySwiperRef.current?.slidePrev()
                                    }
                                    >
                                    <span className="">
                                      <i className="bi bi-chevron-left fs-1"></i>
                                    </span>
                                </div>
                                <div
                                     className="swiper-button-next swiperUniqueNext"
                                    onClick={() =>
                                      PropertySwiperRef.current?.slideNext()
                                    }
                                  >
                                    <span className="">
                                      <i className="bi bi-chevron-right fs-1"></i>
                                    </span>
                                </div>
                            
                          </Swiper>
                         <div className="sldBtnsFlexBar">
                             <button className="btn btn-blue text-uppercase btn-lg mx-2 mar">BOOK A CALL</button>
                         </div>
               </div>
      </section>
      <section className="serviceSection">
               <div className="container">
                      <h4 className="sctionMdTitle text-primary  mb-5 text-center">SERVICES</h4>
                      <p className="text-secondary text-center">
                          Explore a comprehensive range of specialized services. We have a diverse range of services to cater to a wide 
                          spectrum of real estate needs, offering personalized solutions for each client. 
                          From residential sales & leasing to investment consultants, our team is dedicated to
                           delivering exceptional results.
                      </p>
                      
                      <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                  // when window width is >= 320px
                                  320: {
                                    slidesPerView: 1,
                                  },
                                  // when window width is >= 480px
                                  480: {
                                    slidesPerView: 1,
                                  },
                                  // when window width is >= 768px
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  // when window width is >= 1024px
                                  1024: {
                                    slidesPerView: 3,
                                  },
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                onSwiper={(swiper) => {
                                  PropertySwiperRef.current = swiper;
                                }}
        
                                  modules={[Pagination]}
                                  className="multiSlider multipleItemsSlider iconCardSlider simpleArrows"
                                >
                                <SwiperSlide>
                                            <div className="sliderimageCard">
                                                 <img src="/images/services/service1.webp" className="sldcrdimg"/> 
                                                 <div className="sliderimageCardContent">
                                                
                                                      <h3 className="h3MdText">Residential Sales & Leasing</h3>
                                                      <p className="text-secondary text-center">
                                                          With decades of experience and helping thousands of people, our team possesses
                                                          an in-depth knowledge of residential sales and leasing. Our dedicated team is 
                                                          committed to assisting you in finding ideal buyers and maximizing your ROI.
                                                      </p>
                                                      <button className="btn btn-blue text-uppercase btn-lg mx-2 ">ENQUIRE NOW</button>
                                                 </div>
                                            </div>
                                </SwiperSlide>
                             
                                <SwiperSlide>
                                            <div className="sliderimageCard">
                                                 <img src="/images/services/service2.webp" className="sldcrdimg"/>
                                                 <div className="sliderimageCardContent">
                                                    <h3 className="h3MdText">Commercial Sales & Leasing </h3>
                                                    <p className="text-secondary text-center">
                                                        Range specializes in matching commercial properties to businesses of all sizes, 
                                                        from startups to established corporations. We prioritize your needs and goals to 
                                                        find the ideal space for your business growth, whether it's offices or retail.
                                                    </p>
                                                    <button className="btn btn-blue text-uppercase btn-lg mx-2 ">ENQUIRE NOW</button>
                                                </div>
                                            </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <div className="sliderimageCard">
                                               <img src="/images/services/service-header.webp" className="sldcrdimg"/> 
                                               <div className="sliderimageCardContent">
                                                    <h3 className="h3MdText">Property Management</h3>
                                                    <p className="text-secondary text-center">
                                                        OWe offer comprehensive property management services tailored to meet your 
                                                        unique needs. Our experienced team is dedicated to ensuring your property 
                                                        is well-maintained and optimized for its highest potential.
                                                    </p>
                                                    <button className="btn btn-blue text-uppercase btn-lg mx-2 ">ENQUIRE NOW</button>
                                                </div>
                                            </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                            <div className="sliderimageCard">
                                                 <img src="/images/services/service1.webp" className="sldcrdimg"/> 
                                                 <h3 className="h3MdText">Residential Sales & Leasing</h3>
                                                 <div className="sliderimageCardContent">
                                                      <p className="text-secondary text-center">
                                                          With decades of experience and helping thousands of people, our team possesses
                                                          an in-depth knowledge of residential sales and leasing. Our dedicated team is 
                                                          committed to assisting you in finding ideal buyers and maximizing your ROI.
                                                      </p>
                                                      <button className="btn btn-blue text-uppercase btn-lg mx-2 ">ENQUIRE NOW</button>
                                                 </div>
                                            </div>
                                </SwiperSlide>

                                <div
                                    className="swiper-button-prev swiperUniquePrev text-white"
                                    onClick={() =>
                                      PropertySwiperRef.current?.slidePrev()
                                    }
                                    >
                                    <span className="">
                                      <i className="bi bi-chevron-left fs-1"></i>
                                    </span>
                                </div>
                                <div
                                     className="swiper-button-next swiperUniqueNext text-white"
                                    onClick={() =>
                                      PropertySwiperRef.current?.slideNext()
                                    }
                                  >
                                    <span className="">
                                      <i className="bi bi-chevron-right fs-1"></i>
                                    </span>
                                </div>
                            
                      </Swiper>
                         
               </div>
      </section>
      
    </section>
  );
}
export default Services;
