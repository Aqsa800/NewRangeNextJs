"use client";
import React, { useRef, useState } from "react";
// import Link from "next/link";
// import { useGetAllFaqsData } from "@/src/services/FaqService";
// import parse from "html-react-parser";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "@/public/css/faq-styles.css";


function FaqsPage() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const totalSteps = 4;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can perform form submission or further processing here
    console.log(formData);
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const calculatePercentage = () => {
    return (step / totalSteps) * 100;
  };



  // const [query, setQuery] = useState("");
  // const { faqsData } = useGetAllFaqsData(query);
  // const [activeIndex, setActiveIndex] = useState(0);


    const [phone, setPhone] = useState('');
    const handlePhoneChange = (value) => {
      setPhone(value);
    };
  
  return (
    <>
       
     <section>
               <div className="container">
                  <div className="wizardFormArea">
                      <div className="progress-bar-wrapper">
                          <label className="progress-bar-value" > 40% Completed</label>
                          <progress id="progress-bar" value="30" max="100"></progress>
                      </div>   

                      <div>
                      {/* choose steps  start */}
                        <div className="formstep step-1 active">
                              <h2 className="wizardTitle">What are you looking for?</h2>
                              <div className="row">
                                    <div className="col-md-6">
                                          <div className="radioInputBar">
                                            <input type="radio" id="radioButton1" name="radio-group" />
                                            <label  htmlFor="radioButton1" className="frmLabelBtn">New Purchase</label>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="radioInputBar">
                                            <input type="radio" id="radioButton2" name="radio-group" />
                                            <label htmlFor="radioButton2" className="frmLabelBtn">Mortgage Refinances</label>
                                        </div>
                                    </div>

                              </div>
                              <div className="wizardBtnsBar">
                                    <button className="wzBrdBtn">Back</button>
                                    <button className="wzFillBtn">Next</button>
                              </div>
                        </div>
                      {/* choose steps  End */}

                      {/* ------------------------------------------------    */}

                            {/* New Purchase setup start */}
                            <div className="formstep step-2 stepNone">
                                    <h2 className="wizardTitle">What are you looking for?</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                             <div className="radioInputBar">
                                                  <input type="radio" id="radioButton3" name="radio-group"/>
                                                   <label  htmlFor="radioButton3" className="frmLabelBtn">Just browsing the market</label>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                             <div className="radioInputBar">
                                               <input type="radio" id="radioButton4" name="radio-group" />
                                               <label htmlFor="radioButton4" className="frmLabelBtn">I’ve started looking around</label>
                                             </div>
                                          </div>
                                          <div className="col-md-12">
                                             <div className="radioInputBar">
                                                 <input type="radio" id="radioButton5" name="radio-group" />
                                                 <label htmlFor="radioButton5" className="frmLabelBtn">I’ve found my dream home</label>
                                             </div>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                              </div>
                            {/* New Purchase setup End */}


                       {/* ---------------------------------------------- */}

                       {/* ---------------------------------------------- */}

                            {/* Mortgage Refinances  start */}
                            <div className="formstep step-2 stepNone">
                                    <h2 className="wizardTitle">Perfect! Let’s get some more information about you existing mortgage</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <label className="labelText">Which bank is your mortgage with?</label>
                                                <select className="form-select selectField" aria-label="Default select example">
                                                      <option selected>Choose a Bank</option>
                                                      <option value="1">Dubai Islamic Bank</option>
                                                      <option value="2">Emirate Islamic Bank</option>
                                                      <option value="3">ADCB Abu Dhabi Commercial Bank</option>
                                                      <option value="4">Dubai Islamic Bank</option>
                                                      <option value="5">Emirate Islamic Bank</option>
                                                      <option value="6">ADCB Abu Dhabi Commercial Bank</option>
                                                    
                                                </select>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                            </div>

                            <div className="formstep step-3 stepNone">
                                    <h2 className="wizardTitle">Alright, let's get a few details about your property?</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <label className="labelText">Which bank is your mortgage with?</label>
                                                <div className="inputBar">
                                                     <input type="number" className="wzInput" placeholder="Enter Amount"/>
                                                     <span className="inputNmbText">AED</span>
                                                </div>
                                                <span className="inputUsetText">Not sure what the amount is? Give us an approximate figure.</span>
                                          </div>
                                          <div className="col-md-6">
                                                <label className="labelText">Outstanding loan amount</label>
                                                <div className="inputBar">
                                                     <input type="number" className="wzInput" placeholder="Enter Amount"/>
                                                     <span className="inputNmbText">AED</span>
                                                </div>
                                                <span className="inputUsetText">Not sure what the amount is? Give us an approximate figure.</span>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                            </div>

                            <div className="formstep step-4 stepNone">
                                    <h2 className="wizardTitle">What’s the remaining mortgage term?</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <label className="labelText">Number of years remaining?</label>
                                                <select className="form-select selectField" aria-label="Default select example">
                                                      <option selected>Select year</option>
                                                      <option value="1">1 Year</option>
                                                      <option value="2">2 Years</option>
                                                      <option value="3">3 Years</option>
                                                      <option value="4">4 Years</option>
                                                      <option value="5">5 Years</option>
                                                      <option value="6">6 Years</option>
                                                      <option value="7">7 Years</option>
                                                      <option value="8">8 Years</option>
                                                      <option value="9">9 Years</option>
                                                      <option value="10">10 Years</option>
                                                    
                                                </select>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                            </div>

                            <div className="formstep step-5 stepNone">
                                    <h2 className="wizardTitle">What’s your current mortgage monthly installment?</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                                <label className="labelText">Monthly installment amount?</label>
                                                <div className="inputBar">
                                                     <input type="number" className="wzInput" placeholder="Enter Amount"/>
                                                     <span className="inputNmbText">AED</span>
                                                </div>
                                                <span className="inputUsetText">Not sure what the amount is? Give us an approximate figure.</span>
                                          </div>
                                         

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                            </div>

                            <div className="formstep step-6 stepNone">
                                    <h2 className="wizardTitle">Let's get some details to help serve you better!</h2>
                                    <div className="row">
                                          <div className="col-md-6 mb-3">
                                                <label className="labelText">Your full name</label>
                                                <div className="inputBar">
                                                     <input type="text" className="wzInput" placeholder="Enter name"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <label className="labelText">Email address</label>
                                                <div className="inputBar">
                                                     <input type="text" className="wzInput" placeholder="Enter email eddress"/>
                                                </div>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <label className="labelText">Phone number</label>
                                                <div className="inputPackage">
                                                    <PhoneInput
                                                      
                                                        country={'ae'}
                                                        value={phone}
                                                        onChange={handlePhoneChange}
                                                        
                                                    />
                                                </div>
                                          </div>
                                         

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                            </div>

                            <div className="formstep step-7 stepNone">
                                    <h2 className="wizardTitle">Do you hold a UAE passport?</h2>
                                    <div className="row">
                                          <div className="col-md-6">
                                               <div className="radioInputBar">
                                                  <input type="radio" id="radioButton7" name="radio-group" />
                                                  <label  htmlFor="radioButton7" className="frmLabelBtn">Yes</label>
                                               </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="radioInputBar">
                                                  <input type="radio" id="radioButton8" name="radio-group" />
                                                  <label htmlFor="radioButton8" className="frmLabelBtn">No</label>
                                              </div>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                              </div>

                              <div className="formstep step-8 stepNone">
                                    <h2 className="wizardTitle">Do you hold a UAE passport?</h2>
                                    <div className="row">
                                         <div className="col-md-6 mb-3">
                                                <label className="labelText">Your date of birth</label>
                                                <div className="inputBar">
                                                     <input type="date" className="wzInput dateInput"/>
                                                </div>
                                          </div>
                                          

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                              </div>
                              <div className="formstep step-9 stepNone">
                                    <h2 className="wizardTitle">Choose your employment status</h2>
                                    <div className="row">
                                          <div className="col-md-4">
                                             <div className="radioInputBar">
                                                  <input type="radio" id="radioButton9" name="radio-group"/>
                                                   <label  htmlFor="radioButton9" className="frmLabelBtn">Employed</label>
                                              </div>
                                          </div>
                                          <div className="col-md-4">
                                             <div className="radioInputBar">
                                               <input type="radio" id="radioButton10" name="radio-group" />
                                               <label htmlFor="radioButton10" className="frmLabelBtn">Self-employed</label>
                                             </div>
                                          </div>
                                          <div className="col-md-4">
                                             <div className="radioInputBar">
                                                 <input type="radio" id="radioButton11" name="radio-group" />
                                                 <label htmlFor="radioButton11" className="frmLabelBtn">Other source of income</label>
                                             </div>
                                          </div>

                                    </div>
                                    <div className="wizardBtnsBar">
                                          <button className="wzBrdBtn">Back</button>
                                          <button className="wzFillBtn">Next</button>
                                    </div>
                              </div>
                            {/* Mortgage Refinances  End */}

                            
                      {/* ---------------------------------------------- */}




                      </div>
                  </div>
               </div>
     </section>



      {/* <section className="faqSection">
        <div className="container">
          <div className="upper-heading-div text-center padding">
            <span className="upper-heading">FAQ</span>
            <span>
              <i className="fa-solid fa-horizontal-rule"></i>
            </span>
          </div>
          <div className="location-heading-div text-center padding-bottom">
            <h2 className="location-heading">Frequently Ask Questions</h2>
          </div>

          <div className="faqSearchBar">
            <input
              type="search"
              className="searchInputField"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="searchBtn">
              <i className="fa fa-search searchIcon"></i> Search{" "}
            </button>
          </div>
         
          <div className="accordion">
            {faqsData &&
              faqsData?.map((faq, index) => {
                return (
                  <div className="accordion-item" key={index + "faq"}>
                    <button
                      className={`accordion-button ${
                        activeIndex != index ? " collapsed" : ""
                      } `}
                      data-bs-toggle="collapse"
                      data-bs-target={"#faqCollapse-" + index}
                      aria-expanded={activeIndex == index ? true : false}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                    >
                      {faq.question}
                    </button>
                    <div
                      id={"faqCollapse-" + index}
                      className={`accordion-collapse collapse  ${
                        activeIndex == index ? " show" : ""
                      } `}
                      data-bs-parent="#FAQAccordion"
                    >
                      <div className="accordion-body">
                        <p className="fs-14 text-secondary">
                          {faq && faq.answer && parse(faq?.answer ?? "")}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section> */}
      {/* <section className="sectionBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="bnrTitle">Still need help?</h2>
              <p className="fs-12 text-secondary">
                Click on the blue round button at the bottom right corner of
                this page. You can <br />
                also email our support team at{" "}
                <a href="#" className="fs-12">
                  info@range.ae
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <Link className="fillBtn contactBtn btn" href="/contactUs">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
export default FaqsPage;
