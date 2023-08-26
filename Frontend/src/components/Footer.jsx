import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black pt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-around">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Links
                    </div>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        About Us
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Contact Us
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Privacy Policy
                    </a>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Follow Us
                    </div>
                    <div className="flex mb-4">
                        <a href="#" className="mr-4 bg-gray-500 p-3 rounded-full hover:bg-white duration:700">
                            <FaFacebook />
                        </a>
                        <a href="#" className="mr-4 bg-gray-500 p-3 rounded-full hover:bg-white duration:700">
                            <FaTwitter />
                        </a>
                        <a href="#" className="mr-4 bg-gray-500 p-3 rounded-full hover:bg-white duration:700">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Newsletter
                    </div>
                    <input
                        type="text"
                        placeholder="Your email"
                        className="bg-gray-900 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent w-full"
                    />
                    <button
                        className="bg-gray-700 text-white rounded-sm px-4 py-2 mt-3 hover:bg-gray-600 duration-700"
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="pt-2">
                <div
                    className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col
                    md:flex-row max-w-6xl"
                >
                    <div className="mt-2">
                        © 2023 FinCatalyst. All rights reserved.
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <FaFacebook />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  