
import React from 'react'

function Contact() {
    return (
        <>
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 md:py-10 py-5 ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-full w-full ">
                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                            <div className="  :bg-gray-900 lg:px-20   md:px-5  ">
                                <div className="    mx-auto max-w-screen-md bg-white    border-[#8F3300] border md:p-6  p-3 ">
                                    <div className=' '>
                                        <h1 className="   text-center merry text-[#8F3300] font-semibold  lg:text-2xl   text-lg ">
                                            Contact
                                        </h1>
                                    </div>
                                    <form className="w-full  flex flex-col  md:gap-4 gap-2  " ngNativeValidate>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm   text-[#8F3300]   mt-4 :text-gray-300">
                                                Name
                                            </label>
                                            <input type="text" name="name" id="name" ngModel className="shadow-sm   border border-[#8F3300] text-[#8F3300] text-sm    focus:outline-none block w-full p-2.5   mt-4        "
                                                placeholder="Enter Your Name" required
                                            />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm   text-[#8F3300]   mt-4  :text-gray-300">
                                                Email
                                            </label>
                                            <input type="email" name="email" id="email" ngModel className="shadow-sm  border border-[#8F3300] text-[#8F3300] text-sm    focus:outline-none block w-full p-2.5   mt-4 "
                                                placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm   text-[#8F3300]   mt-4 :text-gray-300"  >
                                                Contact Number
                                            </label>
                                            <input type="text" name="number" id="number" ngModel className="shadow-sm  border border-[#8F3300] text-[#8F3300] text-sm    focus:outline-none block w-full p-2.5   mt-4  "
                                                placeholder="Enter Your Mobile Number" required
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label for="message" className="block mb-2 text-sm text-[#8F3300]">
                                                Your Message
                                            </label>
                                            <textarea id="message" name="message" ngModel
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-[#8F3300]    shadow-sm border border-[#8F3300]  focus:outline-none   mt-4 "
                                                placeholder="Leave a Message..."
                                            ></textarea>
                                        </div>
                                        <div className="text-center ">
                                            <button type="submit" className="py-3 px-5 text-sm  bg-primary-blue-color  text-center   bg-[#8F3300]   cursor-pointer hover:text-primary-blue-color hover:border border text-white   bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >
                                                Send message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <h3 className="mt-5 text-center text-sm md:text-lg">
                                    {" "}
                                    For any queries contact Email :{' '}
                                    <a href="mailto:editor@ijatra.com" className="text-blue-700 " >
                                        editor@ijanr.com
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact

