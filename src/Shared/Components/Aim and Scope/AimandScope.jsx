import React from 'react'
import { FaUnlockAlt } from 'react-icons/fa'

function AimandScope() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className="flex flex-col  md:gap-4 gap-2">
                            <div className=' '>
                                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                                    Aim and Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Advanced Nursing Research  aims to promote the advancement of nursing science, education, and clinical practice by publishing high-quality, peer-reviewed research. The journal provides a global platform for scholars, clinicians, educators, and healthcare professionals to share innovative studies, evidence-based practices, and interdisciplinary insights that improve patient care and influence health policy. IJANR covers a broad range of topics including clinical nursing, nursing education, leadership, community and public health, mental health, geriatrics, women’s health, nursing informatics, and holistic care, with a strong emphasis on research excellence, ethical standards, and real-world impact.
                                </p>
                        </section>

                        <section className="flex flex-col  md:gap-4 gap-2">
                            <div className=' '>
                                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                                    Aim
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Advanced Nursing Research aims to be a leading platform for publishing high-quality research that advances nursing science, clinical practice, and education. The journal fosters innovation by connecting academic research with real-world healthcare practice, encouraging interdisciplinary collaboration, and promoting evidence-based approaches that enhance patient outcomes and transform healthcare delivery.
                            </p>                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className=""> Advancing research in nursing science, clinical care, and healthcare innovation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Bridging the gap between academic research and clinical nursing practice.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Encouraging interdisciplinary studies integrating nursing, public health, education, informatics, and healthcare policy.

                                    </p>
                                </div>


                            </div>
                        </section>
                        <section className="flex flex-col  md:gap-4 gap-2">
                            <div className=' '>
                                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                                    Scope
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Advanced Nursing Research covers a wide range of topics in nursing science, including clinical practice, nursing education, leadership, public health, mental health, geriatrics, women's health, nursing informatics, and evidence-based practice. The journal welcomes original research, reviews, and case studies that contribute to improving patient care, advancing nursing knowledge, and supporting professional development in diverse healthcare settings.
                            </p>
                        </section>

                        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5'>
                            <div className=" border border-[#CB6527]  border-t-4  flex flex-col justify-between ">
                                <div className=" p-4 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Innovation</h2>
                                        {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                                    </div>
                                    <div className="flex  md:gap-4 gap-2  ">
                                        <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                                        <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research encourages groundbreaking research and novel approaches that advance nursing science and healthcare practices. By fostering innovative methodologies, evidence-based interventions, and emerging trends, IJANR aims to drive meaningful progress in patient care, nursing education, and health policy.


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
                                        <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Collaboration</h2>
                                        {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                                    </div>
                                    <div className="flex  md:gap-4 gap-2  ">
                                        <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                                        <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research promotes interdisciplinary and international collaboration among researchers, practitioners, and educators. By encouraging partnerships across institutions and specialties, IJANR fosters a shared vision to advance nursing knowledge, improve healthcare outcomes, and support global health initiatives.


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
                                        <h2 className="text-[#8F3300] font-semibold   md:text-lg ">Research Excellence</h2>
                                        {/* <FaUnlockAlt className="text-[#8F3300]" /> */}
                                    </div>
                                    <div className="flex  md:gap-4 gap-2  ">
                                        <i className="fi fi-sr-right mt-1  text-[#8F3300]  "></i>
                                        <p className=" md:text-base text-sm">The International Journal of Advanced Nursing Research is dedicated to publishing high-quality, evidence-based research that advances nursing science and healthcare practice. We uphold rigorous peer review standards to ensure the integrity, relevance, and innovation of every published article.
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

export default AimandScope

