import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './NewPageStyles.css';
// import  HeaderImg from '';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function NewPage() {
  return (
    <>
             <header className='pageHeaderArea'>
                  <div className='navigationArea'>
                       <div className='container'>
                       <nav className="navbar navbar-expand-lg navbar-light mainNavbar">
                              <a className="mainLogoLink" href="#">
                                   <img src='/images/logo_white.png'  className='mainLogo'/>
                              </a>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarScroll">
                                   <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Introduction</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Online Viewings</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Schedule</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                   </ul>
                                   
                              </div>
                         </nav>
                       </div>
                  </div>
                  <Swiper
                          centeredSlides={true}
                          autoplay={{
                            delay: 55500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="headerSlider"
                        >
                          <SwiperSlide className='sliderItemArea'>
                                    <img src='/images/slider/headerSlider-1.jpg' className='headerSliderImg'/>
                                    <div className='headerContent'>
                                          <h1>EXCLUSIVE UPCOMING PROJECTS IN AL MARIAN ISLAND</h1>
                                          <p>LOCATED AT RAS AL KAIMAH</p>
                                          <div className='btnsGrpFlex'>
                                                <a href='#' className='btnPrimary roundBtn '> ALL PROPERTIES</a>
                                                <a href='#' className='btnPrimary roundBtn '> GET MORE INFO</a>
                                          </div>
                                    </div>
                          </SwiperSlide>
                          <SwiperSlide className='sliderItemArea'>
                                    <img src='/images/slider/headerSlider-1.jpg' className='headerSliderImg'/>
                                    <div className='headerContent'>
                                          <h1>EXCLUSIVE UPCOMING PROJECTS IN AL MARIAN ISLAND</h1>
                                          <p>LOCATED AT RAS AL KAIMAH</p>
                                          <div className='btnsGrpFlex'>
                                                <a href='#' className='btnPrimary roundBtn '> ALL PROPERTIES</a>
                                                <a href='#' className='btnPrimary roundBtn '> GET MORE INFO</a>
                                          </div>
                                    </div>
                          </SwiperSlide>
                          <SwiperSlide className='sliderItemArea'>
                                    <img src='/images/slider/headerSlider-1.jpg' className='headerSliderImg'/>
                                    <div className='headerContent'>
                                          <h1>EXCLUSIVE UPCOMING PROJECTS IN AL MARIAN ISLAND</h1>
                                          <p>LOCATED AT RAS AL KAIMAH</p>
                                          <div className='btnsGrpFlex'>
                                                <a href='#' className='btnPrimary roundBtn '> ALL PROPERTIES</a>
                                                <a href='#' className='btnPrimary roundBtn '> GET MORE INFO</a>
                                          </div>
                                    </div>
                          </SwiperSlide>
                          
                    </Swiper>
             </header>
             <section>
                      <div className='container'>
                          <div className='row align-items-center'>
                                <div className='col-md-7'>
                                      <div className='pt-5  '>
                                            <h2 className='secTitle'>AL MARJAN ISLAND</h2>
                                            <h4 className='h4Lg mb-4'>AREA GUIDE</h4>
                                            <p className='pText'>
                                              Al Marjan Island, a premier lifestyle destination in the Gulf region, 
                                              beautifully showcases the modern allure of Ras Al Khaimah. Situated just 
                                              45 minutes from Dubai International Airport, this man-made archipelago 
                                              invites visitors to enjoy an unparalleled beach getaway in the heart of 
                                              Ras Al Khaimah
                                            </p>
                                            <p className='pText'>
                                              Comprising four coral-shaped islands, Al Marjan Island boasts world-class 
                                              hotels and resorts, cutting-edge leisure facilities, and breathtaking 
                                              natural attractions, including 7.8 kilometers of pristine sandy beaches.
                                            </p>
                                            <a href='#' className='btnPrimary roundBtn mb-5'> LEARN MORE</a>
                                      </div>
                                </div>
                                <div className='col-md-5'>
                                     <img src='/images/blogs/blog-9.jpg'  className="blog9Img"/>
                                </div>
                          </div>
                      </div>
             </section>
             <section className='propertyTypeSection'>
                       <div className='container'>
                           <h2 className='secTitle text-center mxWd50 mb-5'>CHOOSE FROM RANGE OF PROPERTY TYPES</h2>
                           <div className='row'>
                                <div className='col-md-4'>
                                      <a href='#' className='imgCard'>
                                         <img src='/images/properties/p1.png' className='proImg'/> 
                                         <div className='crdtextBar'>
                                             <p>APARTMENTS</p>
                                         </div>
                                      </a>
                                </div> 
                                <div className='col-md-4'>
                                      <a href='#' className='imgCard'>
                                         <img src='/images/properties/p2.png' className='proImg'/> 
                                         <div className='crdtextBar'>
                                             <p>VILLAS</p>
                                         </div>
                                      </a>
                                </div> 
                                <div className='col-md-4'>
                                      <a href='#' className='imgCard'>
                                         <img src='/images/properties/p3.png' className='proImg'/> 
                                         <div className='crdtextBar'>
                                             <p>TOWNHOUSES</p>
                                         </div>
                                      </a>
                                </div> 
                           </div>
                       </div>
             </section>
             <section className='highlightsSection'>
                      <div className='container'>
                           <h2 className='secTitle text-center mxWd50 mb-5 wtText'>HIGHLIGHTS</h2>
                           <div className='row '>
                                 <div className='col-md-4'>
                                      <div className='iconsCard mt-3'>
                                           <img src='/images/icons/highlight-icon.png' className='highlightIcon' />
                                           <h4>EXPECTED 11 MILLION TOURISTS EXPECTED ON 2027</h4>
                                      </div>
                                 </div>
                                 <div className='col-md-4'>
                                      <div className='iconsCard mt-3'>
                                           <img src='/images/icons/highlight-icon.png' className='highlightIcon' />
                                           <h4>EXPECTED 11 MILLION TOURISTS EXPECTED ON 2027</h4>
                                      </div>
                                 </div>
                                 <div className='col-md-4'>
                                      <div className='iconsCard mt-3'>
                                           <img src='/images/icons/highlight-icon.png' className='highlightIcon' />
                                           <h4>EXPECTED 11 MILLION TOURISTS EXPECTED ON 2027</h4>
                                      </div>
                                 </div>
                           </div>
                      </div>
             </section>

             <section className='latestProjectsSection'>
                       <div className='container'>
                             <h2 className='secTitle text-center mxWd50 mb-5'>LATEST PROJECTS</h2>
                             <Swiper
                                      slidesPerView={4}
                                     
                                      pagination={false}
                                      breakpoints={{
                                        320: {
                                             slidesPerView: 1,
                                             spaceBetween: 0,
                                           },
                                        640: {
                                          slidesPerView: 1,
                                          spaceBetween: 0,
                                        },
                                        768: {
                                          slidesPerView: 2,
                                          spaceBetween: 10,
                                        },
                                        992: {
                                             slidesPerView: 3,
                                             spaceBetween: 10,
                                           },
                                        1200: {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        }
                                       
                                      }}
                                      modules={[Pagination]}
                                      className="multiSlider firstRowArea"
                                    >
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p1.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p2.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p3.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p4.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p5.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      
                              </Swiper>
                              <Swiper
                                      slidesPerView={4}
                                     
                                      pagination={{
                                        clickable: true,
                                      }}
                                      breakpoints={{
                                        320: {
                                             slidesPerView: 1,
                                             spaceBetween: 0,
                                           },
                                        640: {
                                          slidesPerView: 1,
                                          spaceBetween: 0,
                                        },
                                        768: {
                                          slidesPerView: 2,
                                          spaceBetween: 10,
                                        },
                                        992: {
                                             slidesPerView: 3,
                                             spaceBetween: 10,
                                           },
                                        1200: {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        }
                                       
                                      }}
                                      modules={[Pagination]}
                                      className="multiSlider"
                                    >
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p7.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p8.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p6.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p1.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                   <div className='propertyCard'>
                                                        <div className='proCardHead'>
                                                             <img src='/images/properties/p3.png'  className="prptyCrdImg"/>
                                                             <span className='cardTagText'>APARTMENT</span>
                                                        </div>
                                                        <div className='proCardBody'>
                                                             <h5>Manta Bay By Major Developer</h5>
                                                             <p className='pTextlight'>Palm Jumeirah</p>
                                                             <p className='pTextprimary'>AED 8,000,000</p>
                                                             <div className='apartmentInfo'>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bed.png' className='proInfoIcon'/>
                                                                       <p>4</p>
                                                                       <span>&</span>
                                                                       <p>5</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/bath.png' className='proInfoIcon'/>
                                                                       <p>2</p>
                                                                  </div>
                                                                  <div className='infoBar'>
                                                                       <img src='images/icons/area.png' className='proInfoIcon'/>
                                                                       <p>726sqft</p>
                                                                       <span>-</span>
                                                                       <p>850 sqft</p>
                                                                  </div>
                                                             </div>
                                                             <a href='#' className='btnPrimary roundBtn proCrdBtn'>
                                                                GET INFO
                                                             </a>
                                                        </div>
                                                   </div>
                                      </SwiperSlide>
                                      
                              </Swiper>
                       </div>
             </section>
             <section className='featureSection'>
                       <div className='container'>
                           <h2 className='secTitle text-center mxWd50 mb-5'>FEATURES & AMENITIES</h2>
                           <Swiper
                                      slidesPerView={4}
                                     
                                      pagination={{
                                        clickable: true,
                                      }}
                                      breakpoints={{ 
                                        320: {
                                             slidesPerView: 2,
                                             spaceBetween: 10,
                                           },
                                        640: {
                                          slidesPerView: 3,
                                          spaceBetween: 10,
                                        },
                                        992: {
                                          slidesPerView: 4,
                                          spaceBetween: 10,
                                        },
                                        1100: {
                                          slidesPerView: 6,
                                          spaceBetween: 10,
                                        }
                                       
                                      }}
                                      modules={[Pagination]}
                                      className="multiSlider"
                                    >
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-1.png' className='featureIcon' />
                                                      <p>Wynn Casino</p>
                                                 </a>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-2.png' className='featureIcon' />
                                                      <p>Valet Parking</p>
                                                 </a> 
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-3.png' className='featureIcon' />
                                                      <p>Exclusive Resident Lounge</p>
                                                 </a>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-4.png' className='featureIcon' />
                                                      <p>BBQ Area</p>
                                                 </a>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-5.png' className='featureIcon' />
                                                      <p>Cinema & Games Room</p>
                                                 </a>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-6.png' className='featureIcon' />
                                                      <p>Splash Pad</p>
                                                 </a>
                                      </SwiperSlide>
                                      <SwiperSlide className='multiSliderItem'>
                                                 <a href='#' className='sliderIconbox'>
                                                      <img src='/images/icons/feature-icon-1.png' className='featureIcon' />
                                                      <p>Wynn Casino</p>
                                                 </a>
                                      </SwiperSlide>
                                     
                                      
                              </Swiper>
                       </div>
             </section>
             <section className='gridsSection'>
                       <div className='container'>
                           <h2 className='secTitle text-center mxWd50 mb-5'>UAE’S FIRST EVER CASINO</h2>
                           <div className='gridRow'>
                                <div className='gridClm first'>
                                     <img src='/images/properties/p10.png' className='gridImg1'/>
                                </div>
                                <div className='gridClm lg'>
                                     <div className='gridClmimg'>
                                          <img src='/images/properties/p11.png' className='gridImg2'/>
                                     </div>
                                     <div className='gridClmimg gridRow'>
                                          <img src='/images/properties/p13.png' className='gridImg3'/>
                                          <img src='/images/properties/p12.png' className='gridImg4'/>
                                          
                                     </div>
                                </div>   

                           </div>
                       </div>
             </section>
             <section className='locationSection'>
                       <div className='container'>
                              <h2 className='secTitle text-center mxWd50 mb-5'>LOCATION</h2>
                              <p className='pText'>
                                 Al Marjan Island is located away from the hustle and bustle of the city
                                 centre. The area has easy access to Sheikh Muhammad Bin Salem Road,
                                 enabling residents to get to any corner of Ras Al Khaimah, as well 
                                 as to the nearest other emirates, in just a short period of time.
                                 Thus, the centre of Ras Al Khaimah is accessible within half an
                                 hour by car. Travel time to Dubai takes about an hour from the 
                                 island. 
                              </p>
                              <p className='pText mb-5'>
                                  Al Marjan Island is a popular destination among families
                                  with children. A number of educational institutions are 
                                  accessible within a 15-minute drive, including Red Bus Nursery,
                                  Little Treasures Nursery, Jazirah Al Hamra Kindergarten, as well
                                  as Jazira Al Hamra Primary School for Boys, and RAK 
                                  Academy – British School Al Hamra. Moreover, Wisdom Business 
                                  School, Speak English Institute — RAK, Ascencia Business School
                                  and the University of West London – RAK Branch Campus are 
                                  located within a 10–20 minute drive from the archipelago.
                              </p>
                       </div>
                       <img src='/images/banner/map-img-1.png' className='mapImg1 mb-5'/>
                       <img src='/images/banner/map-img-2.png' className='mapImg2'/>
             </section>
             <section className='bookSection'>
                       <div className='container'>
                              <div className='formContentArea'>
                                   <h2 className='secTitle text-center mxWd50 mb-3 wtText textBold'>Book your Interest</h2>
                                   <p className="pText wtPtext text-center mb-4">
                                        Don’t miss the chance to explore Dubai’s finest properties from
                                        anywhere in the world. Book your online viewing today and take the
                                        first step towards your dream home or investment in Dubai.
                                   </p>
                                   <form className='frmFieldsList'>
                                         <input type='text' placeholder='Name' className='inputField'/>
                                         <input type='email' placeholder='Email Address' className='inputField'/>
                                         <input type='text' placeholder='Phone Number' className='inputField mb-3'/>
                                         <button className='frmBtn'>SUBMIT</button>
                                   </form>
                              </div>
                       </div>
             </section>
             <section className='aboutRangeSection'>
                       <div className='container'>
                          <h2 className='secTitle text-center mxWd50 mb-3 textBold'>About Range</h2>
                          <img src='/images/banner/award-banners.png' className='awardsImg'/>
                          <p className="pText  text-center mb-4 max800">
                               Range International Property Investments is an esteemed award-winning 
                               real estate brokerage based in Dubai, UAE. With over two decades of 
                               unmatched experience, we have established ourselves as industry 
                               leaders, renowned for our exceptional services and deep knowledge of
                              the real estate market locally and internationally.
                          </p>
                                  
                       </div>
             </section>
             <footer>
                    <div className='container footerContainer'>
                         <div className='row'>
                                <div className='col-md-5'>
                                     <div className='ftLogoBox'>
                                           <a href='#' className='ftLogoLink'>
                                             <img src="/images/logo.png" alt="Range Internation Property Investments" className="ftlogoImg"  />
                                               
                                           </a>
                                           <div className='ftSocialList'>
                                                <a href='#' className='socialLink'>
                                                    <img src="/images/icons/social-icon-1.svg"  className="ftSocailImg"  />
                                                </a>
                                                 <a href='#' className='socialLink'>
                                                    <img src="/images/icons/social-icon-2.svg"  className="ftSocailImg"  />
                                                </a>
                                                <a href='#' className='socialLink'>
                                                    <img src="/images/icons/social-icon-3.svg"  className="ftSocailImg"  />
                                                </a>
                                                <a href='#' className='socialLink'>
                                                    <img src="/images/icons/social-icon-4.svg"  className="ftSocailImg"  />
                                                </a>
                                                <a href='#' className='socialLink'>
                                                    <img src="/images/icons/social-icon-5.svg"  className="ftSocailImg"  />
                                                </a>
                                           </div>
                                     </div>
                                </div>
                                <div className='col-md-7'>
                                     <div className='ftContactList'>
                                          <a href='#' className='ftTextLink'>
                                              <img src="/images/icons/whatsapp.png"  className="ftSmSocailImg"  />
                                              <p>Contact us at +971 50 765 1659 </p>
                                          </a>
                                          <a href='#' className='ftTextLink'>
                                              <img src="/images/icons/mail-icon.png"  className="ftSmSocailImg"  />
                                              <p>info@range.ae </p>
                                          </a>
                                          <a href='#' className='ftTextLink'>
                                              <img src="/images/icons/location-icon.png"  className="ftSmSocailImg"  />
                                              <p> 1601, 16th Floor, Control Tower, Motor City, Dubai</p>
                                          </a>
                                     </div>
                                </div>
                         </div>
                    </div>
             </footer>
    </>
  )
}

export default NewPage