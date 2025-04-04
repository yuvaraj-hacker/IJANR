import React from 'react'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col  md:gap-4 gap-2">

                            <div className=' '>
                                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                                    Peer Review Process
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                            The International Journal of Advanced Nursing Research follows a rigorous double-blind peer review process to ensure the highest standards of academic quality, research integrity, and relevance. All submitted manuscripts are initially screened by the editorial board for scope, originality, and adherence to submission guidelines. Those meeting the basic criteria are then reviewed anonymously by at least two independent experts in the field. This process ensures that each manuscript is evaluated objectively based on its scientific merit, methodological soundness, clarity, and contribution to nursing knowledge and practice. The journal is committed to maintaining a transparent, fair, and timely review process to uphold scholarly excellence.
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#8F3300]   lg:text-2xl   text-lg ">
                                Initial Screening
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className=""> Upon submission, the editorial team conducts an initial screening to ensure the manuscript aligns with the journal’s scope, originality standards, and formatting requirements.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Manuscripts that do not meet the basic criteria may be returned to the authors with recommendations for revision prior to further review.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Additionally, all submissions are checked for ethical compliance, including plagiarism screening and adherence to research ethics involving human or animal subjects.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2 ">
                            <h1 className="    merry   font-semibold text-[#8F3300]   lg:text-2xl   text-lg ">
                                Double-Blind Peer Review
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Manuscripts that pass the initial screening are forwarded to at least two independent experts for thorough evaluation based on scientific quality, relevance, and originality.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">To maintain objectivity and ensure unbiased assessments, the journal follows a double-blind peer review process—where the identities of both authors and reviewers remain anonymous throughout the review.

</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#8F3300]   lg:text-2xl   text-lg ">
                                Author Revisions
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Based on reviewer feedback, authors may be requested to revise their manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">A revised version must be submitted within the specified deadline, with a detailed response addressing the reviewers' comments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#8F3300]   lg:text-2xl   text-lg ">
                                Editorial Decision
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                                After revisions, the editorial board makes the final decision:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Accepted: The manuscript is approved for publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Minor/Major Revisions: The author must make necessary changes before acceptance.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Rejected: The manuscript does not meet the journal's standards.</p>
                                </div>


                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The decision is communicated to the author via email.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#8F3300]   lg:text-2xl   text-lg ">
                                Final Proof & Publication
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">Once accepted, authors receive a final proof for approval before publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-right  text-[#8F3300]   flex items-center"></i>
                                    <p className="">The article is published in the upcoming issue and indexed accordingly.</p>
                                </div>



                            </div>
                        </section>


                    </section>
                </div>
            </section>
        </>
    )
}

export default PeerReview

