import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div className=" w-full pt-10 relative flex justify-center">
                <img
                    className=""
                    src="https://daktarbhai.com/assets/img/find_doctor_banner.png"
                    alt=""
                />

                <div className="absolute bottom-0 container bg-white p-4 w-full rounded-lg flex flex-col md:flex-row justify-between gap-8 shadow-lg">
                    <div className="relative inline-block w-full">
                        <select className=" w-full appearance-none block rounded-md border-[1px] border-gray-200 focus:border-gray-400 p-2 md:p-3 bg-[#f4f5f7] focus:bg-white placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 text-gray-500">
                            <option value="Dhaka" selected>
                                Search by Division
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chottogram ">Chottogram </option>
                            <option value="khulna ">khulna</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-500 dark:text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative inline-block w-full">
                        <select className=" w-full appearance-none block rounded-md border-[1px] border-gray-200 focus:border-gray-400 p-2 md:p-3 bg-[#f4f5f7] focus:bg-white placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 text-gray-500">
                            <option value="Dhaka" selected>
                                Search by District
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chottogram ">Chottogram </option>
                            <option value="khulna ">khulna</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-500 dark:text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative inline-block w-full">
                        <select className=" w-full appearance-none block rounded-md border-[1px] border-gray-200 focus:border-gray-400 p-2 md:p-3 bg-[#f4f5f7] focus:bg-white placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 text-gray-500">
                            <option value="Dhaka" selected>
                                Search by Doctor Name
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chottogram ">Chottogram </option>
                            <option value="khulna ">khulna</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-500 dark:text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-2/3 mx-auto space-y-16">
                <h1 className="text-center text-4xl font-semibold my-10">
                    How it Works
                </h1>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <img
                            className="w-[250px]"
                            src="https://daktarbhai.com/assets/img/works1.png"
                            alt="Search"
                        />
                    </div>
                    <div className="space-y-2 max-w-[400px]">
                        <h6 className=" uppercase text-xl text-gray-500">Search Doctor</h6>
                        <p className="text-gray-400 ">
                            Find your doctor easily with a minimum of effort. We`ve kept
                            everything organised for you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="space-y-2 max-w-[400px]">
                        <h6 className=" uppercase text-xl text-gray-500">
                            Book Appointment
                        </h6>
                        <p className="text-gray-400 ">
                            Ask for an appointment of the doctor quickly with almost a single
                            click. We take care of the rest.
                        </p>
                    </div>
                    <div>
                        <img
                            className="w-[250px]"
                            src="https://daktarbhai.com/assets/img/works2.png"
                            alt="Search"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <img
                            className="w-[250px]"
                            src="https://daktarbhai.com/assets/img/works3.png"
                            alt="Search"
                        />
                    </div>
                    <div className="space-y-2 max-w-[400px]">
                        <h6 className=" uppercase text-xl text-gray-500">Get Well Soon</h6>
                        <p className="text-gray-400 ">
                            Visit the doctor, take the service based on your appointment. Get
                            back to good health and happiness.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;