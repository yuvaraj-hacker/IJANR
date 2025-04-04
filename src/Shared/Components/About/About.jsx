import React from 'react'
import { FaUnlockAlt } from 'react-icons/fa'

function About() {
  return (
    <>
      <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-10 gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col  md:gap-4 gap-2">
                <div className=' '>
                  <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                    About Us
                  </h1>
                </div>
                <p className="text-justify md:text-base text-sm">
                  The International Journal of Advanced Nursing Research is a peer-reviewed, open-access journal committed to publishing high-quality research in nursing and healthcare. It serves as a platform for researchers, academicians, and healthcare professionals to share innovative findings, evidence-based practices, and theoretical advancements in nursing science. The journal covers a wide range of topics, including clinical nursing, patient care, nursing education, healthcare policies, nursing informatics, and emerging trends in the field. By fostering interdisciplinary collaboration and knowledge exchange, the journal aims to contribute to the enhancement of nursing practice, education, and healthcare delivery on a global scale.                </p>
              </div>
              {/* <img className="mx-auto  border p-0.5 border-[#3e8000] " src="/assets/Images/aboutt.png" alt="" /> */}
            </section>
            <section className="flex flex-col  md:gap-4 gap-2">

              <div className=' '>
                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                  Scope
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Advanced Nursing Research is dedicated to publishing high-quality, peer-reviewed research that advances the science, education, and practice of nursing. The journal serves as a platform for academics, clinicians, educators, and healthcare professionals to share innovations and developments that improve patient care and influence health policy across diverse healthcare systems.              </p>
              <div className='flex flex-col gap-2 md:text-base text-sm'>
                <div className=' flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                    <p className=""><span className='  font-semibold'>Advanced Clinical Nursing Practice</span> </p>
                  </div>
                  <ul className='list-inside list-disc pl-5'>
                    <li>Evidence-based clinical interventions</li>
                    <li> Management of chronic and acute health conditions</li>
                    <li> Advanced nursing diagnostics and treatment plans</li>
                    <li>Clinical decision-making and critical thinking in nursing</li>
                  </ul>
                </div>
                <div className=' flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                    <p className=""><span className='  font-semibold'>Nursing Education & Professional Development</span> </p>
                  </div>
                  <ul className='list-inside list-disc pl-5'>
                    <li> Innovations in nursing curricula and pedagogy</li>
                    <li> Simulation and virtual learning in clinical education  </li>
                    <li>  Competency-based assessments and skill development</li>
                    <li> Continuing education and lifelong learning for nurses</li>
                  </ul>
                </div>
                <div className=' flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                    <p className=""><span className='  font-semibold'>Nursing Leadership & Health Policy</span> </p>
                  </div>
                  <ul className='list-inside list-disc pl-5'>
                    <li>Nurse leadership roles in healthcare systems</li>
                    <li>Strategic planning and administrative practices</li>
                    <li> Health policy formulation and advocacy</li>
                    <li>Quality assurance and patient safety programs</li>
                  </ul>
                </div>
                <div className=' flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                    <p className=""><span className='  font-semibold'> Community & Public Health Nursing</span> </p>
                  </div>
                  <ul className='list-inside list-disc pl-5'>
                    <li>Health promotion and disease prevention strategies</li>
                    <li> Community outreach and population health management</li>
                    <li> Maternal and child health nursing</li>
                    <li> Nursing roles in public health emergencies and global health</li>
                  </ul>
                </div>
                <div className=' flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                    <p className=""><span className='  font-semibold'>Mental Health & Psychiatric Nursing</span> </p>
                  </div>
                  <ul className='list-inside list-disc pl-5'>
                    <li> Mental health assessments and therapeutic interventions</li>
                    <li> Psychiatric nursing care and rehabilitation</li>
                    <li> Crisis intervention and behavioral health nursing</li>
                    <li> Substance abuse treatment and dual diagnosis care</li>
                  </ul>
                </div>


              </div>
            </section>
            <section className="flex flex-col  md:gap-4 gap-2">
              <div className=' '>
                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                  Mission
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The mission of the International Journal of Advanced Nursing Research is to advance the science, education, and practice of nursing through the dissemination of high-quality, peer-reviewed research. The journal is committed to fostering innovation, promoting evidence-based practice, and supporting the global exchange of knowledge that enhances healthcare outcomes. IJANR serves as a platform for nursing professionals, educators, researchers, and policymakers to share insights that improve patient care, shape health policy, and empower the nursing community worldwide.
              </p>
              <div className='flex flex-col gap-2  md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                  <p className=""><span className='  font-semibold'>Publishing High-Impact Nursing Research</span> – Providing a platform for innovative and evidence-based studies in nursing science and healthcare practice.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                  <p className=""><span className='  font-semibold'>Bridging Research & Clinical Practice</span> – Promoting research that translates into improved patient care, nursing interventions, and health outcomes.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                  <p className=""><span className='  font-semibold'>Facilitating Global Knowledge Exchange</span> – Offering an open-access journal for nursing professionals and researchers worldwide to share insights and discoveries.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                  <p className=""><span className='  font-semibold'>Upholding Research Integrity & Excellence</span> – Ensuring the highest standards through a rigorous peer-review process and ethical publishing practices.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                  <p className=""><span className='  font-semibold'>Encouraging Interdisciplinary Collaboration</span> –  Supporting research that integrates nursing with fields such as public health, informatics, education, and clinical medicine.</p>
                </div>

              </div>
            </section>

            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
              <div className=" border border-[#CB6527]  border-t-4  flex flex-col justify-between ">
                <div className=" p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Editorial Excellence</h2>
                    {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                  </div>

                  <div className="flex  md:gap-4 gap-2  ">
                    <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                    <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research upholds the highest standards of editorial integrity and scholarly rigor. Our experienced editorial board comprises leading experts in nursing and healthcare who are committed to ensuring the quality, relevance, and impact of every published article through a fair and thorough peer-review process.</p>
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
                    <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Global Reach and Impact</h2>
                    {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                  </div>

                  <div className="flex  md:gap-4 gap-2  ">
                    <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                    <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research is dedicated to advancing nursing knowledge across borders. With its open-access model and international editorial board, IJANR ensures that high-quality nursing research reaches a global audience—supporting evidence-based practice, education, and healthcare policy worldwide.

                    </p>
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
                    <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Publication Ethics</h2>
                    {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                  </div>

                  <div className="flex  md:gap-4 gap-2  ">
                    <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                    <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research upholds the highest standards of publication ethics. All authors, reviewers, and editors are expected to follow ethical guidelines ensuring integrity, transparency, and accountability in research. IJANR strictly prohibits plagiarism, data fabrication, and unethical research practices.
                    </p>
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
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
