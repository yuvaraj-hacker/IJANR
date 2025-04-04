import React from "react";
import { FaDatabase, FaUnlockAlt, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* <section className="flex justify-between flex-wrap md:flex-nowrap gap-5 h-[30vh] md:px-5 px-3 bg-[url('/assets/Images/png.png')]   bg-[#D9D9D9] md:bg-contain bg-cover bg-no-repeat flex justify-center flex-col items-center   "> */}
      <section className="relative flex   flex-wrap md:flex-nowrap gap-5 h-[32vh] md:px-5 px-3 bg-[#D9D9D9]  justify-center flex-col items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/Images/png.png')]  md:bg-contain bg-cover bg-no-repeat md:opacity-100  opacity-50 z-0"></div>
        {/* <div className="flex flex-col justify-evenly md:gap-0 gap-3">
                <p className="text-justify md:text-base text-sm">
                  <strong className="text-[#3E8000]">
                    The International Journal of Advanced Trends in Robotics and
                    Automation (IJATRA)
                  </strong>{" "}
                  is a peer-reviewed, open-access journal dedicated to
                  publishing high-quality research and advancements in robotics,
                  automation, artificial intelligence, and intelligent systems.
                  It provides a platform for researchers, academicians, and
                  industry professionals to share innovative ideas,
                  methodologies, and cutting-edge developments that drive
                    automation across various industries, including manufacturing,
                  healthcare, transportation, agriculture, space exploration,
                  and smart cities. Committed to fostering interdisciplinary
                  research and technological advancements, IJATRA welcomes
                  original research articles, review papers, case studies, and
                  technical reports that contribute to the continuous evolution
                  of robotics and automation technologies.
                </p>
                <a href="https://ijatra.com/Ijatra/index.php/ijatra/about/submissions" target="_blank" rel="noopener noreferrer" className="w-fit" >
                  <button className="md:p-3 p-2 border   border-[#3E8000] text-[#3E8000] hover:bg-[#3E8000] hover:text-white duration-300 cursor-pointer w-[170px]">
                    Submit Your Paper
                  </button>
                </a>
              </div>
              <img className="mx-auto  border p-0.5 border-[#3e8000] w-52 " src="/assets/Images/Image-hero.jpeg" alt="" /> */}
        <h1 className=" text-[#8F3300] flex justify-center items-center  z-10   font-bold lg:text-5xl  md:text-3xl text-xl max-w-[50rem] text-center ">
          International Journal of Advanced Nursing Research
        </h1>
        <a href="https://ijatra.com/Ijatra/index.php/ijatra/about/submissions" target="_blank" rel="noopener noreferrer" className="w-fit group z-10" >
          <button className="md:p-3 p-2   font-semibold  flex  justify-center items-center gap-3 bg-[#8F3300] md:text-base text-sm   text-white duration-300 cursor-pointer w-[190px]">
            Submit Your Paper
            <i class="fi fi-bs-location-arrow flex items-center group-hover:translate-x-1 duration-300"></i>
          </button>
        </a>
      </section>
      <section className=" flex flex-col gap-5  max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex flex-col md: md:gap-4 gap-2 gap-2">
              <div className=' '>
                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                  About Our Publication
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Advanced Nursing Research is a peer-reviewed, open-access journal dedicated to publishing high-quality, original research in nursing and healthcare. It serves as a global platform for researchers, educators, and practitioners to share innovative findings that enhance nursing knowledge, education, clinical practice, and healthcare delivery. The journal covers a broad spectrum of topics, including clinical nursing, patient care, nursing education, public health, healthcare policy, and emerging trends in nursing science. IJANR aims to bridge the gap between research and practice, promote evidence-based care, and support the ongoing professional development of the nursing community worldwide.              </p>
              <Link to='/about' className="w-fit mx-auto group">
                <button className="md:p-3 p-2   md:w-[170px] w-[140px]    flex gap-3 items-center justify-center md:text-base text-sm    font-semibold   bg-[#8F3300]  text-white duration-300 cursor-pointer">
                  Read More
                  <i class="fi fi-bs-location-arrow flex items-center group-hover:translate-x-1 duration-300"></i>
                </button>
              </Link>
            </section>
            <section className="flex flex-col md: md:gap-4 gap-2 gap-2">
              <div className=' '>
                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                  The Jounal Covers following Areas
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 gap-3 mt-2">
                {[
                  "Clinical Nursing", "Patient Care", "Nursing Education", "Evidence-Based Practice", "Healthcare Policies", "Nursing Leadership", "Geriatric Nursing", "Pediatric Nursing", "Mental Health Nursing", "Community Health Nursing", "Critical Care Nursing", "Emergency Nursing", "Oncology Nursing", "Cardiovascular Nursing", "Neurological Nursing", "Surgical Nursing", "Obstetric and Gynecological Nursing", "Neonatal Nursing", "Nursing Ethics", "Palliative and Hospice Care", "Nursing Informatics", "Telemedicine in Nursing", "Chronic Disease Management", "Wound Care and Management", "Pain Management", "Public Health Nursing", "Nursing Theories and Models", "Transcultural Nursing", "Occupational Health Nursing", "Rehabilitation Nursing", "Disaster and Emergency Preparedness", "Holistic Nursing", "Gastroenterology Nursing", "Endocrinology Nursing", "Renal Nursing", "Infection Control and Prevention", "Nursing Education Technology", "Simulation in Nursing Education", "Nursing Assessment and Diagnosis", "Quality Improvement in Nursing", "Pharmacology in Nursing", "Psychiatric Nursing", "Addiction Nursing", "School Nursing", "Military Nursing", "Forensic Nursing", "Health Promotion and Disease Prevention", "Nutrition in Nursing", "Epidemiology in Nursing", "Burn Care Nursing", "Genetics and Genomics in Nursing", "Midwifery and Maternal Health", "Nursing Administration", "Home Healthcare Nursing", "Primary Care Nursing", "Healthcare Disparities and Nursing", "Artificial Intelligence in Nursing", "Robotics in Nursing", "Nursing Workload and Burnout", "Healthcare Economics and Nursing", "Legal Aspects in Nursing", "Ethical Issues in Nursing Research", "Spirituality in Nursing", "Gait and Mobility Nursing", "Nursing in Rural and Underserved Areas", "Cultural Competency in Nursing", "Advancements in Nursing Research", "Health Literacy and Patient Education", "Aging Population and Nursing Care", "Nursing Entrepreneurship", "Nursing and Global Health", "Interprofessional Collaboration in Healthcare"
                ].map((topics, index) => (
                  <>
                    <div key={index} className="flex items-center gap-2 mb-1 border-t md:pt-5 pt-4 border-t-[#D9D9D9]  ">
                      <i className="fi fi-sr-right  text-[#8F3300]  flex items-center "></i>
                      <h1 className="md:text-base text-sm">{topics}</h1>
                    </div>
                    {/* <hr className="bg-black h-1 w-full" /> */}
                  </>
                ))}
              </div>
            </section>
            <section className="flex flex-col md: md:gap-4 gap-2 gap-2">
              <div className=' '>
                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                  Journal Overview
                </h1>
              </div>
              <p className=" text-center md:text-base text-sm" >The International Journal of Advanced Nursing Research is a peer-reviewed, open-access journal publishing high-quality research in nursing and healthcare. It covers clinical nursing, patient care, education, policies, informatics, and emerging trends. With a rigorous peer-review process, IJANR ensures ethical, impactful research, fostering global knowledge-sharing and advancements in nursing practice, education, and leadership.</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1  ">
                <div className=" border border-[#CB6527]  border-t-4  flex flex-col justify-between ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Open Access</h2>
                      <FaUnlockAlt className="text-[#8F3300]" />
                    </div>

                    <div className="flex  md:gap-4 gap-2  ">
                        <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                      <p className=" md:text-base text-sm">IJANR follows a fully open-access publishing model, ensuring that all published articles are freely accessible to a global audience without any subscription or paywall restrictions. This promotes the widespread dissemination of nursing research and maximizes its impact on healthcare practice and policy.</p>
                    </div>
                  </div>

                  {/* <div className="   flex justify-between items-center">
                    <div className="md:p-4 p-3   bg-[#CB6527] w-fit relative bottom-0 border border-[#CB6527] text-white">
                      <FaUnlockAlt />
                    </div>
                    <div className="px-4">

                      <Link to="/about">
                        <i className="fi fi-sr-location-arrow hover:scale-105 duration-300  text-[#CB6527]  flex items-center md:text-2xl text-xl"></i>
                      </Link>
                    </div>
                  </div> */}
                </div>
                <div className=" border border-[#CB6527]  border-t-4  flex flex-col justify-between ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Peer review</h2>
                      <FaUserCheck className="text-[#8F3300]" />
                    </div>

                    <div className="flex  md:gap-4 gap-2  ">
                      <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                      <p className=" md:text-base text-sm">IJANR follows a double-blind peer review process to ensure the quality and credibility of published research. All submissions are evaluated by independent experts, with both authors and reviewers remaining anonymous to maintain fairness and objectivity.</p>
                    </div>
                  </div>

                  {/* <div className="   flex justify-between items-center">
                    <div className="md:p-4 p-3   bg-[#CB6527] w-fit relative bottom-0 border border-[#CB6527] text-white">
                      <FaUnlockAlt />
                    </div>
                    <div className="px-4">

                      <Link to="/about">
                        <i className="fi fi-sr-location-arrow hover:scale-105 duration-300  text-[#CB6527]  flex items-center md:text-2xl text-xl"></i>
                      </Link>
                    </div>
                  </div> */}
                </div>

                <div className=" border border-[#CB6527]  border-t-4  flex flex-col justify-between ">
                  <div className=" p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Indexing</h2>
                      <FaDatabase className="text-[#8F3300]" />
                    </div>

                    <div className="flex  md:gap-4 gap-2  ">
                      <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                      <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research is committed to expanding the reach and visibility of published research. The journal is in the process of being indexed in reputable academic databases to ensure discoverability and global accessibility.</p>
                    </div>
                  </div>

                  {/* <div className="   flex justify-between items-center">
                    <div className="md:p-4 p-3   bg-[#CB6527] w-fit relative bottom-0 border border-[#CB6527] text-white">
                      <FaUnlockAlt />
                    </div>
                    <div className="px-4">

                      <Link to="/about">
                        <i className="fi fi-sr-location-arrow hover:scale-105 duration-300  text-[#CB6527]  flex items-center md:text-2xl text-xl"></i>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>


          </section>
        </div>
        <section className=" ">
          <h1 className="bg-[#8F3300] h-[1px] w-full  "></h1>
        </section>
        <section className="text-center flex flex-col gap-2 xl:w-1/2 mx-auto md:mt-5">
          <p className="  md:text-base text-sm text-justify">
            We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
            <span className="text-[#8F3300] font-bold">   Our fast reviewing process is our strength. </span>
          </p>
          <div className="flex items-center  md:gap-4 gap-2">
            <i className="fi fi-tr-calendar text-white "></i>
            <h1 className="bg-[#8F3300] text-white py-2 font-semibold md:text-base text-sm   text-center mx-auto p-3">
              Launch of Next Issue: 28
              <sup>th</sup> Oct 2025
            </h1>
          </div>
          <h1 className="  ">With Warm Regards,</h1>
          <h1 className="  font-semibold  md:text-base text-sm">
            Editor-in-chief
          </h1>
          <h1 className="  font-semibold md:text-base text-sm">IJANR</h1>
        </section>
      </section>
    </>
  );
}
export default Home;
