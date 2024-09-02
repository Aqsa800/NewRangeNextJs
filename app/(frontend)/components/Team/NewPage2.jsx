import React, { useRef, useState } from 'react';
import './NewPage2Styles.css';

function NewPage2() {
  return (
    <section className='mainSection'>
     <header className='pageHeaderArea imgHeader'>
          <img src='/images/slider/header-img-1.jpg' className='headerImg pHeaderImg'/>
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
                                             <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Investing in Dubai</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Selling or Renting</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Property Management</a>
                                        </li>
                                      
                                   </ul>
                                   
                              </div>
                    <a href="#" className='simpleBtn'>
                              REQUEST A CALL
                         </a>
               </nav>
               </div>
          </div>
          <div className='container'>
               <div className='headerContent'>
                         <h1>A call with Range</h1>
                         <p>Your Trusted Real Estate Experts in Dubai</p>
                         <a href="#" className='simpleBtn'>
                              REQUEST A CALL
                         </a>
                    </div>
          </div>
     </header>
     <section className='aboutSection'>
               <div className='container'>
                    <div className='row align-items-center'>
                         <div className='col-md-6'>
                              <h4 class="sctionMdTitle textDark  mb-4">About Us</h4>
                              <p className='fs-14 text-secondary mb-4 pad-r-40'>
                              Range International Property Investments is an esteemed, award-winning 
                              real estate brokerage based in Dubai, UAE. With over two decades of 
                              unmatched experience, we are industry leaders renowned for our 
                              exceptional services and deep knowledge of the real estate market, 
                              both locally and internationally.
                              </p>
                              <a href="#" className="simpleBtn lgBtn">LEARN MORE</a>
                         </div>
                         <div className='col-md-6'>
                              <video  controls autoplay poster="./images/services/service7.png" className='videoElement'>
                              <source src="movie.mp4" type="video/mp4" />
                              <source src="movie.ogg" type="video/ogg"/>
                              
                              </video>
                         </div>
                    </div>
               </div>
     </section>
     <section className='sectionArea'>
               <div className='container  bdrContainer'>
                    <div className='row ht100 align-items-center'>
                         <div className='col-md-4'>
                               <img src='/images/services/service8.png' className='clmImg'/>
                         </div>
                         <div className='col-md-8'>
                              <div className='secContent'>
                                   <span className='descripText'>INVESTING IN DUBAI</span>
                                   <h3 className='h3Title'>
                                        Thinking about investing in Dubai? Unsure whether to choose an off-plan or 
                                        ready property?
                                   </h3>
                                   <p className='pMdPrimaryText'>
                                        Contact Range for a free consultation! 
                                   </p>
                                   <p className='fs-14 text-secondary mb-4'>
                                        Our expert agents will guide you every step of the way and help you
                                        find the ideal investment option tailored to your needs.
                                   </p>
                                   <a href="#" className="simpleBtn lgBtn">SCHEDULE YOUR FREE CONSULTATION</a>
                              </div>
                         </div>
                    </div>
               </div>
     </section>

     <section className='sectionArea'>
               <div className='container  bdrContainer'>
                    <div className='row ht100 align-items-center'>
                    <div className='col-md-8'>
                              <div className='secContent pad-l-0 pad-r-40'>
                                   <span className='descripText'>
                                        SELLING OR RENTING YOUR PROPERTY
                                   </span>
                                   <h3 className='h3Title'>
                                         Planning to sell or rent your property in Dubai but unsure how to secure the 
                                         best deal?
                                   </h3>
                                   <p className='pMdPrimaryText'>
                                       Contact Range for a free consultation!
                                   </p>
                                   <p className='fs-14 text-secondary mb-4'>
                                        Our experts will provide valuable market insights, guide you through 
                                        the selling process, and help you achieve the best value for your property.
                                   </p>
                                   <a href="#" className="simpleBtn lgBtn">GET YOUR FREE CONSULTATION</a>
                              </div>
                         </div>
                         <div className='col-md-4'>
                               <img src='/images/services/service9.png' className='clmImg'/>
                         </div>
                         
                    </div>
               </div>
     </section>

     <section className='sectionArea'>
               <div className='container  bdrContainer'>
                    <div className='row ht100 align-items-center'>
                         <div className='col-md-4'>
                               <img src='/images/services/service10.png' className='clmImg'/>
                         </div>
                         <div className='col-md-8'>
                              <div className='secContent'>
                                   <span className='descripText'>RENTING A PROPERTY</span>
                                   <h3 className='h3Title'>
                                       Looking to rent a property in Dubai but unsure which area or property is
                                       the best fit?
                                   </h3>
                                   <p className='pMdPrimaryText'>
                                       Schedule a free consultation with our experts!
                                   </p>
                                   <p className='fs-14 text-secondary mb-4'>
                                        We’ll help you find the perfect place with the right amenities and excellent 
                                        connectivity to prime locations. Let us make the renting process smooth and
                                        hassle-free for you. 
                                   </p>
                                   <a href="#" className="simpleBtn lgBtn">FIND YOUR PERFECT RENTAL</a>
                              </div>
                         </div>
                    </div>
               </div>
     </section>

     <section className='sectionArea'>
               <div className='container  bdrContainer'>
                    <div className='row ht100 align-items-center'>
                    <div className='col-md-8'>
                              <div className='secContent pad-l-0 pad-r-40'>
                                   <span className='descripText'>
                                        PROPERTY MANAGEMENT
                                   </span>
                                   <h3 className='h3Title'>
                                        Frustrated with property management? Finding reliable tenants, managing daily 
                                        inquiries, and scheduling viewings can be overwhelming.
                                   </h3>
                                   <p className='pMdPrimaryText'>
                                        Schedule a free consultation with our experts! 
                                   </p>
                                   <p className='fs-14 text-secondary mb-4'>
                                        We will help you secure stable tenants, minimize turnover, and streamline
                                        the viewing process, ensuring efficient property management.
                                   </p>
                                   <a href="#" className="simpleBtn lgBtn">STREAMLINE YOUR PROPERTY MANAGEMENT</a>
                              </div>
                         </div>
                         <div className='col-md-4'>
                               <img src='/images/services/service11.png' className='clmImg'/>
                         </div>
                         
                    </div>
               </div>
     </section>
     <section className='whyChooseSection'>
              <div className='container'>
                     <h4 className="sctionMdTitle text-primary text-center mb-4 ">WHY CHOOSE US?</h4>
                     <p class="fs-14 text-secondary mb-4 text-center max900">
                         At Range International Property Investments, we understand the frustrations 
                         of navigating the real estate market. That's why we've crafted an exclusive 
                         service tailored to your needs.
                     </p>
                     <img src='/images/banner/award-banners.png' className='awardsImg'/>
              </div>
     </section>   
     <section className='section pad-y-60'>
              <div className='container'>
                    <div className='row'>
                           <div className='col-md-4'>
                                 <div className='simpleIconCard'>
                                     <img src='/images/icons/card-icon-1.png' className='crdIcon' />
                                      <h4>
                                         Award-Winning <br/>Service
                                      </h4>
                                      <p className='fs-14 text-secondary mb-4'>
                                        Recognized for excellence in real estate.
                                      </p>

                                 </div>
                           </div>
                           <div className='col-md-4'>
                                 <div className='simpleIconCard'>
                                     <img src='/images/icons/card-icon-2.png' className='crdIcon' />
                                      <h4>
                                         Two Decades of <br/>Experience
                                      </h4>
                                      <p className='fs-14 text-secondary mb-4'>
                                         Proven track record in the industry.
                                     </p>

                                 </div>
                           </div>
                           <div className='col-md-4'>
                                 <div className='simpleIconCard'>
                                     <img src='/images/icons/card-icon-3.png' className='crdIcon' />
                                      <h4>
                                         Local & International <br/> Expertise
                                      </h4>
                                      <p className='fs-14 text-secondary mb-4'>
                                          Proven track record in the industry.
                                      </p>

                                 </div>
                           </div>
                    </div>
              </div>
     </section>     
     <footer>
             <div className='container'>
                   <div className='footerContent'>
                         <img src='./images/logo.png' className='ftLogoImg'/>
                         <h5 className='ftH5Text'>YOUR TRUSTED PARTNER FOR ALL REAL ESTATE NEEDS IN DUBAI.</h5>
                         <p className='ftPtext'>TOLL FREE 800 72 888 | sales@range.ae</p>
                         
                   </div>
                  
             </div>
     </footer>

    </section>
  )
}

export default NewPage2;