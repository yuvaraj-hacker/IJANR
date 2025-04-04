import React from 'react'

function Copyrights() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] md:py-10 py-5  mx-auto md:px-5 px-3">
                <div className="  relative">

                    <section className="flex flex-col md:gap-10 gap-5">
                        <section className='grid   grid-cols-1   gap-2'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[#8F3300] font-bold merry md:text-lg '>Copyright Transfer:</h2>
                                <div className='flex   gap-3'>
                                    <i className="fi fi-sr-right  text-[#8F3300]     "></i>
                                    <p className="text-justify  md:text-base text-sm">By signing this form, the author(s) agree to transfer the copyright of the submitted article to The International Journal of Advanced Nursing Research, effective upon acceptance of the article for publication. This transfer includes the exclusive rights to reproduce, distribute, and publish the article in all forms, including reprints, translations, electronic formats, and other reproductions of similar nature.
                                    </p>
                                </div>
                            </div>
                            <p className="">The author(s) retain:</p>
                            <ol className="list-disc  pl-5  space-y-2  md:text-base text-sm ">
                                <li className="  ">
                                    I/We shall not publish the submitted article elsewhere in any form, in whole or in part, without prior written permission from IJANR, unless substantial modifications have been made.
                                    </li>
                                <li className="  ">
                                    I/We affirm that the submitted work is original, and where excerpts from copyrighted sources are included, proper permissions have been obtained and cited. The article contains no defamatory or unlawful content and does not violate any copyright, trademark, patent, or other proprietary rights.
                                </li>
                                <li className="  ">
                                    I/We confirm that I/we have the full authority to enter into this agreement. The manuscript does not contain any content that infringes upon the rights or privacy of others and all factual statements are accurate to the best of our knowledge or based on sound research.                                </li>
                                <li className="">
                                    I/We agree to hold the editorial board and publisher of IJANR harmless from any legal claims, liabilities, or expenses that may arise as a result of a breach of this declaration.
                                </li>
                            </ol>

                        </section>
                        <section className="flex flex-col  md:gap-4 gap-2">
                            <div className=' '>
                                <h1 className=" text-[#8F3300] text-center bg-[#D9D9D9] w-fit mx-auto p-1 px-5   font-semibold  lg:text-2xl   text-lg ">
                                    Declaration
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                I/We ____________________________, the author(s) of the research paper/article entitled ______________________, hereby grant permission for the publication of the above-mentioned paper/article in The International Journal of Advanced Nursing Research.
                            </p>
                            <p className="text-justify md:text-base text-sm">
                                <p className=""> It is agreed that :</p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li className="  ">
                                        I/We shall not publish the aforementioned contribution elsewhere without prior written consent from the publisher, unless it has undergone substantial modifications.                                    </li>
                                    <li className="  ">
                                        I/We confirm that the submission is original and, where excerpts from other copyrighted works are included, proper permissions have been obtained. The article does not contain any libelous or unlawful content and does not infringe upon any copyright, trademark, patent, or proprietary rights of others. The corresponding author accepts full responsibility on behalf of all co-authors.
                                    </li>
                                    <li className="  ">
                                        I/We affirm that we have full authority to enter into this agreement. The manuscript does not include content that violates any legal rights or privacy of individuals, and all factual statements are true to the best of our knowledge or are supported by appropriate research.                                    </li>
                                    <li className="">
                                        I/We agree to indemnify the editors and publishers of IJANR against any legal claims, damages, or expenses arising as a result of a breach of this declaration.                                    </li>
                                </ol>
                            </p>

                            <div className='flex justify-between'>
                                <div>
                                    <p className="">Date : </p>
                                    <p className="">Mobile : </p>
                                </div>
                                <div className='text-center'>
                                    <p className="">Author's Signature : </p>
                                    <p className="">Author Name(s) : </p>
                                    <p className="">Address : </p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Copyrights
