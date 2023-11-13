import { useGetAllFaqsData } from "@/src/services/FaqService";
import parse from "html-react-parser";


function ContactPage() {
  const { faqsData } = useGetAllFaqsData();
  return (
    <>
      <header>
        <img src="images/banner/banner-2.png" className="headerSimpleImg" />
      </header>
      <section className="section contactSection">
        <div className="container">
          <h4 className="sctionMdTitle text-primary text-center ">
            CONTACT US
          </h4>
          <p className="fs-12 text-secondary mxWdtext mb-5">
            Connect with Range for unparalleled real estate solutions. From
            inquiries to collaborations, our team is ready to assist. Reach out
            through the form below or stay updated on industry insights through
            our social channels. Let's transform your property goals into
            reality – contact Range today.
          </p>
        </div>
      </section>
      <section className="section contactBoxsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contactBox">
                <h5>Call Us</h5>
                <a href="#" className="textFlexBar">
                  <img
                    src="/images/icons/phone-icon.png"
                    className="contact-icon"
                  />
                  <p>800 72 888</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contactBox bdr">
                <h5>Email</h5>
                <a href="mailto:sales@range.ae" className="textFlexBar">
                  <img
                    src="/images/icons/mail-icon.png"
                    className="contact-icon"
                  />
                  <p>sales@range.ae</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contactBox">
                <h5>WhatsApp</h5>
                <a href="#" className="textFlexBar">
                  <img
                    src="/images/icons/whatsapp-icon.png"
                    className="contact-icon"
                  />
                  <p>+971 56 1234567</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="addressSection">
        <div className="container">
          <div className="AddressArea">
            <div className="addressBox">
              <h4>Request a Call back</h4>
              <p>Please fill up the form</p>
              <div className="addressBoxContent">
                <div className="row ">
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      className="form-control cntInptField"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="email"
                      className="form-control cntInptField"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="email"
                      className="form-control cntInptField"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control cntInptField textareaField"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    className="fillBtn submitBtn"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
            <div className="addressBox">
              <div className="addressBoxHead">
                <h4>Location</h4>
                <p className=" text-secondary">
                  2601, Aspect Tower, Business Bay, Dubai, UAE, 114888
                </p>
              </div>
              <div className="addressBoxContent pad-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.330369250141!2d55.26378107538162!3d25.192078977714353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5b3fdaac1%3A0xb73489ebcf242a4f!2sRange%20International%20Property%20Investments!5e0!3m2!1sen!2sae!4v1699861068005!5m2!1sen!2sae"
                  width="600"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faqSection">
        <div className="container">
          <h4 className="sctionMdTitle text-primary ">FAQS</h4>
          <div className="accordion" id="FAQAccordion">


            {faqsData &&
              faqsData?.map((faq, index) => {
                return (
                  <div className="accordion-item" key={faq.id}>
                    <button
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#faqCollapse-"+faq.id}
                      aria-expanded="true"
                    >
                      {faq.question}
                    </button>
                    <div
                      id={"faqCollapse-"+faq.id}
                      className="accordion-collapse collapse show"
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
      </section>
      <section className="sectionBanner">
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
              <a href="" className="fillBtn contactBtn btn">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactPage;