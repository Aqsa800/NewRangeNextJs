import "@/public/css/services-styles.css";

function Services(){
    return (
        <>
         
            <header>
                     <img src="/images/banner/homeBg.webp" className="headerImg" />
                     {/* <div className="p-relative">
                        <video className="d-block w-100 videoMain" 
                                autoPlay loop  preload="metadata"
                                poster="images/banner/homeBg.webp"
                               >
                                <source src="/videos/homeVideo.mp4" type="video/mp4" />
                                <source src="/videos/homeVideo.mp4" type="video/mov" />
                                Sorry, your browser doesn't support videos.
                        </video>
                        <div className="videoOverlay"></div>
                        </div> */}
            </header>
            <section className="servicePageSec">
                    <div className="container">
                         <h4 className="sctionMdTitle text-primary text-center mb-4">SERVICES</h4> 
                         <p className="fs-14 text-secondary mb-4">
                         Explore a comprehensive range of specialized services. We have a diverse range of services to cater to a wide spectrum of real estate needs, offering personalized solutions for each client. From residential sales & leasing to investment consultants, our team is dedicated to delivering exceptional results.
                         </p>
                         <div className="row">
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Residential Sales & Leasing</h3>
                                               <p className="fs-14 text-secondary mb-4">With over two decades of experience and helping thousands of people, our team possesses an in-depth knowledge of residential sales and leasing. Our dedicated team is committed to assisting you in finding ideal buyers and maximizing your returns on investments (ROI).
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Commercial Sales & Leasing</h3>
                                               <p className="fs-14 text-secondary mb-4">Range specializes in matching commercial properties to businesses of all sizes, from startups to established corporations. We prioritize your needs and goals to find the ideal space for your business growth, whether it's offices or retail.
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Property Management</h3>
                                               <p className="fs-14 text-secondary mb-4">We offer comprehensive property management services tailored to meet your unique needs. Our experienced team is dedicated to ensuring your property is well-maintained and optimized for its highest potential. 
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Holiday Homes</h3>
                                               <p className="fs-14 text-secondary mb-4">We have a curated selection of luxurious holiday homes, designed to elevate your vacation experience. With stunning locations and impeccable amenities, our properties provide the perfect backdrop for creating lasting memories with loved ones. 
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Mortgage Services</h3>
                                               <p className="fs-14 text-secondary mb-4">Our team of mortgage advisors works closely with clients across the UAE and globally, for effective mortgage management. Our specialized home finance team provides comprehensive solutions for property purchases in Dubai and other Emirates.  
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="serviceCard">
                                          <img src="/images/banner/homeBg.webp" className="serviceCardImg" />
                                          <div className="serCardContent ">
                                              <h3 className="cardTitle text-center">Investment Consultancy </h3>
                                               <p className="fs-14 text-secondary mb-4">Our seasoned advisors offer in-depth market analysis and customized recommendations to help you make informed investment decisions. With Range, you will have access to a wealth of knowledge and expertise to diversify your property portfolio. 
                                                </p>  
                                                <button className="fillBtn  mrAuto cardBtn" >ENQUIRE NOW</button>                                         
                                          </div>
                                    </div>
                               </div>
                         </div>
                    </div>
            </section>
        <section className="imgSection overlayBgClr">
                <div className="contentBox">
                    <h2>
                        CHECK YOUR ELIGIBILITY
                        FOR GOLDEN VISA
                    </h2>
                    <button className="bdrBtn largBtn ">
                          Check Now
                    </button>
                </div>
        </section>
        
        </>
    );
}
export default Services;