import Link from "next/link";
import { useGetAllTeamData } from "@/src/services/TeamService";
import "@/public/css/about-styles.css";
import "./profileStyle.css";
function TeamPage() {
  const { teamsData } = useGetAllTeamData();
  return (
    <>
      <header className="aboutHeader">
            <img
              src="/images/banner/teamBanner.webp"
              className="headerSimpleImg"
              alt="team"
            />
      </header>
      {/* <section className="section meetOurTeam">
        <div className="container">
          <h4 className="sctionMdTitle text-primary text-center mb-5">
            MEET THE TEAM
          </h4>
          <p className="fs-12 text-secondary mxWdtext mb-5">
            Meet the exceptional team at Range International Property
            Investments, the driving force behind our success. With a wealth of
            experience and a keen understanding of the real estate market, they
            excel at forging strong client relationships and delivering
            outstanding results.
          </p>
        </div>
      </section> */}

      <section>
              <div className="conainer">
                    <div className="profileArea">
                          <div className="proCardhead">
                             <img src="/images/logo.png" alt="Range Internation Property Investments" className="prLogoImg" width="175" />
                          </div>
                          <div className="proCardBody">
                                 <div className="userInfoDetails">
                                      <img src="/images/team/team-img-4.png" alt="Range Internation Property Investments" className="proCircleImg" />
                                      <h1 className="useNmetext">Nitin Choppra</h1>
                                      <span className="smText">Founder & CEO</span>

                                      <div className="infoHoriBoxList">
                                          <div className="row">
                                              <div className="col-md-6">
                                                    <a href="#" className="infoHoriBox">
                                                          <div className="iconBox">
                                                              <i className="bi bi-phone"></i>
                                                          </div>
                                                          <p className="">+971 55 544 4974</p>
                                                    </a>
                                                    <a href="#" className="infoHoriBox">
                                                          <div className="iconBox">
                                                            <i className="bi bi-envelope"></i>
                                                          </div>
                                                          <p className="">nitin@range.ae</p>
                                                    </a>
                                              </div>
                                              <div className="col-md-6">
                                                  <a href="#" className="infoHoriBox">
                                                        <div className="iconBox">
                                                            <img src="/images/icons/world-icon.svg" alt="web icon" className="webIcon" />
                                                        </div>
                                                        <p className="">www.range.ae</p>
                                                  </a>
                                                  <a  href="#" className="infoHoriBox">
                                                        <div className="iconBox">
                                                        <i className="bi bi-geo-alt-fill"></i>
                                                        </div>
                                                        <p className="">2601 Aspect Tower, Business Bay, United Arab Emirates</p>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                 </div>
                          </div>
                          <div className="vertiBoxLit">
                               <a className="vertiBox">
                                    <i className="bi bi-person-add"></i>
                                    <p className="">Add</p>
                               </a>
                               <a className="vertiBox">
                                    <i className="bi bi-envelope"></i>
                                    <p className="">Email</p>
                               </a>
                               <a className="vertiBox">
                                  <i className="bi bi-whatsapp"></i>
                                    <p className="">WhatsApp</p>
                               </a>
                          </div>
                          <div className="QRcodeBox">
                               <img src="/images/icons/qr-code.png" alt="QR code" className="QRcodeImg" />
                                
                          </div>
                          <div className="socialIconsList">
                                <a href="#" className="iconBox bgClr">
                                      <img src="/images/icons/fb-icon.svg" alt="QR code" className="socialicon" />
                                </a>
                                <a href="#" className="iconBox bgClr">
                                   <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="iconBox bgClr">
                                   <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#" className="iconBox bgClr">
                                    <img src="/images/icons/linkedinIcon.svg" alt="QR code" className="socialicon" />
                                </a>
                                <a href="#" className="iconBox bgClr">
                                   <i className="bi bi-youtube"></i>
                                </a>
                                <a href="#" className="iconBox bgClr">
                                    <i className="bi bi-tiktok"></i>
                                </a>
                          </div>
                    </div>
              </div>
      </section>





      <section className="teamSection">
        <div className="container">
          <div className="TeamRow">
            {teamsData &&
              teamsData.map(function (team, index) {
                return (
                  <div className="teamCard" key={team.id} >
                    <div className="imgBox">
                      <img
                        src={team?.image}
                        className="mainCrd"
                        alt={team?.name}
                      />
                    </div>
                    <div className="teamContentBox">
                      <div className="teamContent">
                        <h5 className="title">{team?.name}</h5>
                        <p className="titleText">{team?.designation}</p>
                        <p className="titleText"> {team?.languages.join(', ')} </p>
                      </div>
                      <div className="socialLinkList">
                        {team && team?.contact && (
                          <a
                            href={"tel:" + team?.contact}
                            className="text-decoration-none socialLink"
                            target="_blanket"
                          >
                            <img
                              src="/images/icons/team-call.png"
                              className="crdSocialIcon"
                              alt="phone"
                            />
                          </a>
                        )}
                        {team && team?.email && (
                          <a
                            href={"mailto:" + team?.email}
                            className="text-decoration-none socialLink"
                            target="_blanket"
                          >
                            <img
                              src="/images/icons/team-mail.png"
                              className="crdSocialIcon"
                              alt="mail"
                            />
                          </a>
                        )}

                        {team && team?.whatsapp && (
                          <a
                            href={"https://wa.me/" + team?.whatsapp+"?text=Hi, "+ team?.name +" Please let me know more about investing in Dubai Real Estate"}
                            className="text-decoration-none socialLink"
                            target="_blanket"
                          >
                            <img
                              // src="/images/icons/team-whatsapp1.png"
                              src="/images/icons/team-whatsapp.png"
                              className="crdSocialIcon"
                              alt="whatsapp"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* <button className="bdrBtn mrAuto loadBtn mb-5">View All</button> */}
        </div>
      </section>
    </>
  );
}
export default TeamPage;
