import React, { useState, useRef, useEffect } from 'react'
// import './Page.css'
import "./Page.css"
import img1 from '../assets/img1.jpg'
import Footer from '../components/Footer'
import { Link as LinkRouter } from 'react-router-dom'

import { Link, animateScroll as scroll } from 'react-scroll';
import { RoughNotation } from "react-rough-notation";
function Page() {
    const targetRef = useRef(null);
    const targetRef2 = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });
        observer.observe(targetRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible2(true);
                }
            });
        });
        observer.observe(targetRef2.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <React.Fragment>
            <div className="hero">
                <nav className="flex items-center justify-space-around bg-black-200 p-1">
                    <ul className="flex space-x-4 transform scale-110">
                        <li>
                            <LinkRouter
                                to="/login"
                                className="text-white-500 duration:700 hover:border p-2 hover:border-bottom-white hover:text-blue-700 hover:bg-white rounded-lg m-2 cursor:pointer"
                            >
                                Login
                            </LinkRouter>
                        </li>
                        <li>
                            <LinkRouter
                                to="/signup"
                                className="text-white-500 duration:700 hover:border p-2 hover:border-bottom-white hover:text-blue-700 hover:bg-white rounded-lg m-2 cursor:pointer"
                            >
                                Sign-up
                            </LinkRouter>
                        </li>
                        <li>
                            <Link
                                to="thirdDiv"
                                smooth={true}
                                duration={1000}
                                className="text-white-500 duration:700 hover:border p-2 hover:border-bottom-white hover:text-blue-700 hover:bg-white rounded-lg m-2 cursor:pointer"
                            >
                                Services</Link></li>
                        <li><Link
                            to="footer"
                            smooth={true}
                            duration={1000}
                            className="text-white-500 duration:700 hover:border p-2 hover:border-bottom-white hover:text-blue-700 hover:bg-white rounded-lg m-2 cursor:pointer"
                        >Contact Us</Link></li>
                    </ul>
                </nav>

                <header>
                    <div className="heading">
                        FinCatalyst
                    </div>
                </header>
                {/* <section className='afterHeading'>
                    <div className='svgLeft'>
                        <svg width="145px" height="145px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5b5860" transform="matrix(1, 0, 0, -1, 0, 0)rotate(-45)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#5b5860" strokeWidth="1.392" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div className="cont">
                        <div className='firstDiv'>
                            <RoughNotation type='underline' animate={true} show={true}>
                                Stay Informed with Cryptocurrency Services
                            </RoughNotation>
                        </div>
                        <div className='secondDiv'>
                            <RoughNotation type='bracket' show={true} animate={true} brackets={['left', 'right']}>

                                Track, compare, and visualize real-time crypto data at your fingertips. We’ve got everything you need to make informed decisions in the ever-changing world of cryptocurrencies.
                            </RoughNotation>
                        </div>
                    </div>
                </section> */}
                <section className='afterHeading'>
                    <div className='svgLeft'>
                        <svg width="145px" height="145px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5b5860" transform="matrix(1, 0, 0, -1, 0, 0)rotate(-45)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffff" strokeWidth="0.192"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#5b5860" strokeWidth="1.392" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="cont">
                        <div className='firstDiv'>
                            <RoughNotation type='underline' animate={true} show={true}>
                                Stay Informed with Cryptocurrency Services
                            </RoughNotation>
                        </div>
                        <div className='secondDiv'>
                            <RoughNotation type='bracket' show={true} animate={true} brackets={['left', 'right']} iterations={10}>
                                Track, compare, and visualize real-time crypto data at your fingertips. We’ve got everything you need to make informed decisions in the ever-changing world of cryptocurrencies.
                            </RoughNotation>
                        </div>
                    </div>
                </section>

            </div>
            <div className='secondPage'>
                <div className='square'>
                    <svg width="350px" height="350px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.757 7.19271C16.3812 5.54691 14.3129 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 12.5121 4.55133 13.0123 4.64913 13.4956M19.3004 10.2738C19.4309 10.828 19.5 11.4059 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C9.61377 19.5 7.48782 18.3856 6.1142 16.6489" stroke="#000000" strokeLinecap="round"></path> <path d="M18.125 5.5V7.5H16.125" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7.875 16.5L5.875 16.5V18.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 8V16" stroke="#000000" strokeLinecap="round"></path> <path d="M13.8102 10.1516C13.6905 9.62158 13.0066 9.0317 12.0063 9.03169C11.0061 9.03168 10.2366 9.68143 10.2366 10.5022C10.2366 12.3659 13.947 11.4084 13.947 13.5713C13.947 14.3531 13.0065 15.0161 12.0063 15.0161C11.0062 15.0161 10.3135 14.4006 10.1084 13.7423" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <div className='sf'>
                        50+
                    </div>
                    <div className='ff'>
                        Exchanges
                    </div>
                </div>
                <div className='square'>
                    &nbsp;&nbsp;
                    <svg width="300px" height="300px" viewBox="0 0 1024 1024" fill="#000000" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M887.978 352.01H136.024c-4.422 0-8-3.578-8-8 0-13.232-10.764-23.998-23.998-23.998-4.422 0-8-3.578-8-8V72.028c0-4.422 3.578-8 8-8 13.234 0 23.998-10.766 23.998-23.998 0-4.422 3.578-8 8-8H887.98a7.994 7.994 0 0 1 7.998 8c0 13.232 10.766 23.998 24 23.998 4.422 0 8 3.578 8 8v239.984c0 4.422-3.578 8-8 8-13.234 0-24 10.766-24 23.998a7.998 7.998 0 0 1-8 8z m-744.752-16h737.548c3.204-15.648 15.544-28.006 31.202-31.194V79.222c-15.656-3.188-27.998-15.546-31.202-31.194H143.226c-3.204 15.648-15.546 28.006-31.202 31.194v225.596c15.656 3.186 28 15.546 31.202 31.192z" fill=""></path><path d="M951.974 384.008H72.028c-4.422 0-8-3.578-8-8V8.032c0-4.422 3.578-8 8-8h879.948a7.994 7.994 0 0 1 7.998 8v367.976a7.998 7.998 0 0 1-8 8z m-871.946-16h863.948V16.03H80.028v351.978z" fill=""></path><path d="M512 288.014c-34.186 0-79.994-50.654-79.994-102.448h15.998c0 46.436 42.92 86.448 63.996 86.448 21.078 0 63.996-40.012 63.996-86.448h16c0 51.794-45.808 102.448-79.996 102.448z" fill=""></path><path d="M610.372 305.028c-0.954 0-1.922-0.172-2.86-0.532-55.514-21.296-55.514-30.374-55.514-35.794 0-4.42 3.578-8 8-8a8.012 8.012 0 0 1 7.844 6.398c2.454 2.828 14.466 10.592 45.386 22.458a8.01 8.01 0 0 1 4.61 10.336 7.992 7.992 0 0 1-7.466 5.134z" fill=""></path><path d="M559.998 276.702c-4.422 0-8-3.578-8-8v-19.608c0-4.422 3.578-8 8-8s8 3.578 8 8v19.608c0 4.422-3.578 8-8 8zM413.678 305.012a8 8 0 0 1-2.872-15.468c30.92-11.876 42.902-19.624 45.356-22.444a8.012 8.012 0 0 1 7.844-6.398c4.422 0 8 3.578 8 8 0 5.414 0 14.468-55.452 35.78a8.17 8.17 0 0 1-2.876 0.53z" fill=""></path><path d="M464.004 276.702c-4.422 0-8-3.578-8-8v-19.592c0-4.422 3.578-8 8-8s8 3.578 8 8v19.592c0 4.422-3.578 8-8 8z" fill=""></path><path d="M512 352.01c-43.058 0-83.494-21.146-110.96-58.012-21.294-28.56-33.03-64.778-33.03-101.978 0-88.22 64.59-159.99 143.99-159.99 79.402 0 143.992 71.77 143.992 159.99S591.402 352.01 512 352.01z m0-303.982c-70.572 0-127.992 64.598-127.992 143.992 0 33.78 10.61 66.598 29.858 92.416 24.422 32.78 60.186 51.576 98.134 51.576 70.574 0 127.992-64.598 127.992-143.992S582.574 48.028 512 48.028z" fill=""></path><path d="M440.006 192.02a8.016 8.016 0 0 1-7.968-7.25c-3.188-33.982 3.704-60.55 20.482-78.978 37.374-41.044 107.822-25.866 109.134-25.592 3.438 0.726 6 3.61 6.312 7.108a8.008 8.008 0 0 1-4.938 8.124c-1.36 0.554-2.438 1.062-3.296 1.516 9.656 2.766 43.154 17.578 32.154 88.298a7.994 7.994 0 0 1-6.594 6.664c-3.39 0.586-6.796-1.124-8.406-4.18L556.248 148.28c-8.67 3.648-24.264 8.664-44.482 8.664-20.124 0-35.466-4.96-44.042-8.618L447.1 187.73a8.02 8.02 0 0 1-7.094 4.29z m119.742-62.31c0.734 0 1.454 0.102 2.172 0.296a8.094 8.094 0 0 1 4.922 3.992l11.186 21.396c-1.218-38.498-22.294-43.036-23.358-43.24a9.62 9.62 0 0 1-1.672-0.476c-1.984-0.812-11.858-5.32-11.858-14.5 0-1.21 0.172-2.352 0.484-3.414-20.672-1.468-56.342-0.188-77.278 22.794-7.844 8.624-13 19.726-15.438 33.202L457.16 134a7.988 7.988 0 0 1 4.968-4 7.936 7.936 0 0 1 6.312 0.898c0.14 0.086 16.936 10.046 43.324 10.046 26.718 0 43.702-9.992 43.874-10.092a7.916 7.916 0 0 1 4.11-1.142zM240.018 240.016c-26.466 0-47.998-21.53-47.998-47.998s21.532-47.998 47.998-47.998 47.996 21.53 47.996 47.998-21.53 47.998-47.996 47.998z m0-79.994c-17.64 0-31.998 14.35-31.998 31.998s14.358 31.998 31.998 31.998c17.638 0 31.998-14.35 31.998-31.998s-14.36-31.998-31.998-31.998z" fill=""></path><path d="M240.018 240.016c-4.422 0-8-3.578-8-8V152.022c0-4.42 3.578-8 8-8s8 3.578 8 8v79.996a7.994 7.994 0 0 1-8 7.998zM919.976 991.97H104.026c-4.422 0-8-3.578-8-8V647.992c0-4.422 3.578-8 8-8h815.952c4.422 0 8 3.578 8 8v335.978a8 8 0 0 1-8.002 8z m-807.95-15.998h799.952v-319.98H112.026v319.98z" fill=""></path><path d="M831.98 943.972c-26.466 0-47.996-21.53-47.996-47.996s21.53-47.996 47.996-47.996c26.468 0 47.998 21.53 47.998 47.996s-21.528 47.996-47.998 47.996z m0-79.994c-17.638 0-31.996 14.358-31.996 31.998s14.358 31.998 31.996 31.998c17.64 0 32-14.358 32-31.998s-14.358-31.998-32-31.998z" fill=""></path><path d="M831.98 943.972a7.994 7.994 0 0 1-7.998-7.998v-79.996a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v79.996a7.994 7.994 0 0 1-8 7.998zM695.99 783.984c-4.422 0-8-3.578-8-8v-79.996c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v79.996c0 4.422-3.578 8-7.998 8zM767.984 783.984c-17.638 0-31.996-14.36-31.996-32v-31.996c0-17.64 14.358-32 31.996-32 17.64 0 32 14.36 32 32v31.996c0 17.64-14.36 32-32 32z m0-79.996c-8.826 0-15.998 7.172-15.998 16v31.996c0 8.828 7.172 16 15.998 16 8.828 0 16-7.172 16-16v-31.996c0-8.828-7.172-16-16-16zM847.98 783.984c-17.64 0-31.998-14.36-31.998-32v-31.996c0-17.64 14.358-32 31.998-32s31.998 14.36 31.998 32v31.996c0 17.64-14.356 32-31.998 32z m0-79.996c-8.828 0-16 7.172-16 16v31.996c0 8.828 7.172 16 16 16s16-7.172 16-16v-31.996c0-8.828-7.172-16-16-16z" fill=""></path><path d="M679.99 719.988a8 8 0 0 1-5.654-13.656l15.998-16a8 8 0 0 1 11.31 11.312l-15.998 16a7.964 7.964 0 0 1-5.656 2.344zM711.988 783.984h-31.998c-4.42 0-7.998-3.578-7.998-8s3.578-8 7.998-8h31.998c4.422 0 8 3.578 8 8s-3.578 8-8 8zM296.014 991.97c-4.422 0-8-3.578-8-8V647.992c0-4.422 3.578-8 8-8s8 3.578 8 8v335.978c0 4.422-3.578 8-8 8z" fill=""></path><path d="M280.016 687.988h-47.998c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h47.998a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M232.018 719.988c-4.422 0-8-3.578-8-8v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998c0 4.422-3.578 8-8 8z" fill=""></path><path d="M280.016 719.988h-47.998c-4.422 0-8-3.578-8-8s3.578-8 8-8h47.998c4.42 0 7.998 3.578 7.998 8s-3.578 8-7.998 8zM136.024 959.972c-4.422 0-8-3.578-8-8v-47.996c0-4.422 3.578-8 8-8s8 3.578 8 8v47.996c0 4.422-3.578 8-8 8zM184.022 959.972c-13.234 0-24-10.766-24-23.998v-16c0-13.232 10.766-23.998 24-23.998 13.232 0 23.998 10.766 23.998 23.998v16c0 13.234-10.766 23.998-23.998 23.998z m0-47.996c-4.406 0-8 3.594-8 7.998v16a8.016 8.016 0 0 0 8 7.998 8.014 8.014 0 0 0 7.998-7.998v-16a8.014 8.014 0 0 0-7.998-7.998zM248.018 959.972c-13.234 0-24-10.766-24-23.998v-16c0-13.232 10.766-23.998 24-23.998 13.232 0 23.998 10.766 23.998 23.998v16c0 13.234-10.766 23.998-23.998 23.998z m0-47.996c-4.406 0-8 3.594-8 7.998v16a8.016 8.016 0 0 0 8 7.998 8.014 8.014 0 0 0 7.998-7.998v-16a8.014 8.014 0 0 0-7.998-7.998zM711.988 224.018c-4.422 0-8-3.578-8-8V168.022c0-4.422 3.578-8 8-8s8 3.578 8 8v47.996c0 4.422-3.578 8-8 8zM759.986 224.018c-13.234 0-23.998-10.766-23.998-23.998v-16c0-13.232 10.764-23.998 23.998-23.998 13.232 0 23.998 10.766 23.998 23.998v16c0 13.232-10.766 23.998-23.998 23.998z m0-47.998c-4.406 0-8 3.586-8 8v16c0 4.414 3.594 8 8 8a8.01 8.01 0 0 0 7.998-8v-16c0-4.414-3.594-8-7.998-8zM823.982 224.018c-13.234 0-23.998-10.766-23.998-23.998v-16c0-13.232 10.764-23.998 23.998-23.998 13.232 0 23.998 10.766 23.998 23.998v16c0 13.232-10.766 23.998-23.998 23.998z m0-47.998c-4.406 0-8 3.586-8 8v16c0 4.414 3.594 8 8 8a8.01 8.01 0 0 0 7.998-8v-16c0-4.414-3.594-8-7.998-8z" fill=""></path><path d="M392.008 911.976c-4.422 0-8-3.578-8-8v-127.992c0-4.422 3.578-8 8-8s8 3.578 8 8v127.992c0 4.422-3.578 8-8 8zM440.006 911.976c-4.422 0-8-3.578-8-8v-31.998c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v31.998c0 4.422-3.578 8-7.998 8zM536 911.976c-4.422 0-8-3.578-8-8v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998c0 4.422-3.578 8-8 8zM583.996 911.976c-4.422 0-8-3.578-8-8v-127.992c0-4.422 3.578-8 8-8s8 3.578 8 8v127.992c0 4.422-3.578 8-8 8z" fill=""></path><path d="M440.006 879.976c-4.422 0-8-3.578-8-7.998 0-45.748 20.404-71.996 55.996-71.996 4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998c-26.544 0-39.998 18.844-39.998 55.998a7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M536 879.976c-4.422 0-8-3.578-8-7.998 0-37.154-13.454-55.998-39.998-55.998-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8 35.592 0 55.998 26.248 55.998 71.996a7.994 7.994 0 0 1-8 7.998zM456.004 911.976h-79.994c-4.422 0-8-3.578-8-8s3.578-8 8-8h79.994c4.422 0 8 3.578 8 8s-3.578 8-8 8zM599.996 911.976H520c-4.422 0-8-3.578-8-8s3.578-8 8-8h79.996c4.422 0 8 3.578 8 8s-3.578 8-8 8zM599.996 783.984H376.01c-4.422 0-8-3.578-8-8s3.578-8 8-8h223.986c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""></path><path d="M599.996 783.984c-4.422 0-8-3.578-8-8v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998c0 4.422-3.578 8-8 8z" fill=""></path><path d="M599.996 751.984H376.01c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h223.986c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M376.01 783.984c-4.422 0-8-3.578-8-8v-31.998c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v31.998c0 4.422-3.578 8-7.998 8zM599.996 943.972c-4.422 0-8-3.578-8-7.998v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M599.996 943.972H520c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h79.996c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M520 943.972c-4.422 0-8-3.578-8-7.998v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998a7.994 7.994 0 0 1-8 7.998zM456.004 943.972c-4.422 0-8-3.578-8-7.998v-31.998c0-4.422 3.578-8 8-8s8 3.578 8 8v31.998a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M456.004 943.972h-79.994c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h79.994c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M376.01 943.972c-4.422 0-8-3.578-8-7.998v-31.998c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v31.998a7.994 7.994 0 0 1-7.998 7.998zM408.008 783.984c-4.422 0-8-3.578-8-8v-8c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v8c0 4.422-3.578 8-7.998 8zM456.004 783.984c-4.422 0-8-3.578-8-8v-8c0-4.422 3.578-8 8-8s8 3.578 8 8v8c0 4.422-3.578 8-8 8zM488.002 783.984c-4.422 0-8-3.578-8-8v-8c0-4.422 3.578-8 8-8s8 3.578 8 8v8c0 4.422-3.578 8-8 8zM520 783.984c-4.422 0-8-3.578-8-8v-8c0-4.422 3.578-8 8-8s8 3.578 8 8v8c0 4.422-3.578 8-8 8zM567.998 783.984c-4.422 0-8-3.578-8-8v-8c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v8c0 4.422-3.578 8-7.998 8zM615.994 751.984H363.338c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h252.656c4.422 0 8 3.578 8 8a7.994 7.994 0 0 1-8 7.998zM416.006 735.986c-17.638 0-31.998-14.358-31.998-31.998 0-4.422 3.578-8 8-8s8 3.578 8 8c0 8.828 7.172 16 15.998 16 8.828 0 16-7.172 16-16 0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8c0 17.64-14.358 31.998-31.998 31.998zM559.998 735.986c-17.638 0-31.998-14.358-31.998-31.998 0-4.422 3.578-8 8-8s8 3.578 8 8c0 8.828 7.17 16 15.998 16s15.998-7.172 15.998-16c0-4.422 3.578-8 8-8s8 3.578 8 8c0 17.64-14.36 31.998-31.998 31.998z" fill=""></path><path d="M440.006 711.988h-47.998c-4.422 0-8-3.578-8-8s3.578-8 8-8h47.998c4.42 0 7.998 3.578 7.998 8s-3.578 8-7.998 8zM583.996 711.988H536c-4.422 0-8-3.578-8-8s3.578-8 8-8h47.996c4.422 0 8 3.578 8 8s-3.578 8-8 8z" fill=""></path><path d="M951.974 623.992H72.028c-4.422 0-8-3.578-8-7.998 0-4.422 3.578-8 8-8h879.948a7.994 7.994 0 0 1 7.998 8 7.998 7.998 0 0 1-8 7.998z" fill=""></path><path d="M951.974 1023.968c-4.422 0-8-3.578-8-8V615.994c0-4.422 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v399.974c0 4.422-3.578 8-7.998 8z" fill=""></path><path d="M951.974 1023.968H72.028c-4.422 0-8-3.578-8-8s3.578-8 8-8h879.948c4.42 0 7.998 3.578 7.998 8s-3.58 8-8 8z" fill=""></path><path d="M72.028 1023.968c-4.422 0-8-3.578-8-8V615.994c0-4.422 3.578-8 8-8s8 3.578 8 8v399.974c0 4.422-3.578 8-8 8z" fill=""></path><path d="M456.004 591.996c-4.422 0-8-3.578-8-8v-175.99c0-4.42 3.578-8 8-8s8 3.578 8 8v175.99c0 4.422-3.578 8-8 8z" fill=""></path><path d="M488.002 448.004a7.976 7.976 0 0 1-5.656-2.344l-31.998-31.998a8 8 0 1 1 11.312-11.312l31.998 31.998a8 8 0 0 1-5.656 13.656z" fill=""></path><path d="M424.006 448.004a8 8 0 0 1-5.656-13.656l31.998-31.998a8 8 0 1 1 11.312 11.312l-31.998 31.998a7.976 7.976 0 0 1-5.656 2.344zM567.998 591.996c-4.422 0-8-3.578-8-8v-175.99c0-4.42 3.578-8 8-8a7.994 7.994 0 0 1 7.998 8v175.99c0 4.422-3.578 8-7.998 8z" fill=""></path><path d="M567.998 591.996a7.976 7.976 0 0 1-5.656-2.344l-31.998-32a8 8 0 0 1 11.312-11.31l31.996 31.998a8 8 0 0 1-5.654 13.656z" fill=""></path><path d="M567.998 591.996a8 8 0 0 1-5.656-13.656l31.998-31.998a8 8 0 0 1 11.312 11.31l-32 32a7.972 7.972 0 0 1-5.654 2.344z" fill=""></path></g>
                    </svg>
                    <div className='sf'>
                        1900+
                    </div>
                    <div className='ff'>
                        Currencies Tracked
                    </div>
                </div>
            </div>
            <section className='thirdDiv' id="thirdDiv">

                <div className="square1">
                    <p className='leftsquare'>
                        <RoughNotation type='underline' animate={true} show={true} multiline={true}>
                            Real-time Cryptocurrency Prices
                        </RoughNotation>
                    </p>
                    <p className='rightsquare'>
                        Find up-to-date prices, track changes, and explore the world of cryptocurrencies with our powerful tools.
                    </p>
                </div>
                <div className="square2">
                    <img src={img1} alt="Image of Crypto" />
                </div>
            </section>
            <section id='fourthdiv'>
                <div>
                    <svg width="100px" height="100px" fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M10.08,7l1,1,3.44-3.45L11,1,10,2l1.8,1.8H2v1.4h9.82ZM5.86,9l-1-1L1.42,11.5,4.91,15l1-1L4.1,12.2H14V10.8H4.1Z"></path> </g> </g></svg>
                </div>
                <div ref={targetRef}>
                    {isVisible && (
                        <>
                            <div className='leftsquare'>Compare Cryptocurrency Prices</div>
                            <RoughNotation type='box' animate={true} show={true}>
                                <div className='rightsquare'>
                                    <div id='div1'>
                                        Discover the differences between a wide range of cryptocurrencies with our easy-to-use comparison tool.
                                    </div>
                                    <div id='div2'>
                                        Compare price trends, market cap, and more, so you can make the best choice for your investments.
                                    </div>
                                </div>
                            </RoughNotation>
                        </>
                    )}
                </div>
            </section>
            <section id='fifthDiv'>
                <div>
                    <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.651 386.651" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M342.367,135.781c-2.674-1.367-5.889-1.122-8.324,0.635l-138.556,99.968l-89.233-83.725 c-3.032-2.844-7.736-2.892-10.826-0.112l-74.395,66.959c-1.685,1.518-2.648,3.679-2.648,5.946v91.451c0,4.418,3.582,8,8,8h312.339 c4.418,0,8-3.582,8-8v-174C346.724,139.899,345.041,137.149,342.367,135.781z M53.507,308.903H34.385v-79.889l19.122-17.211 V308.903z M88.045,308.903H69.507v-111.5l18.538-16.685V308.903z M122.582,308.903h-18.538V172.526l18.538,17.393V308.903z M157.12,308.903h-18.538V204.931l18.538,17.394V308.903z M192.015,308.903H173.12v-71.565l16.227,15.226 c0.791,0.741,1.702,1.288,2.667,1.65V308.903z M226.91,308.903h-18.896v-61.828l18.896-13.634V308.903z M261.806,308.903H242.91 v-87.006l18.895-13.633V308.903z M296.701,308.903h-18.896V196.72l18.896-13.634V308.903z M330.724,308.903h-18.022v-137.36 l18.022-13.003V308.903z"></path> <path d="M385.375,65.087c-1.439-2.148-3.904-3.404-6.461-3.337l-50.696,1.368c-3.471,0.094-6.429,2.547-7.161,5.941 c-0.732,3.395,0.95,6.85,4.074,8.366l11.846,5.75L196.96,183.012l-95.409-86.504c-4.738-4.296-11.955-4.322-16.723-0.062 L4.173,168.491c-5.149,4.599-5.594,12.501-0.995,17.649c4.598,5.148,12.499,5.594,17.649,0.995l72.265-64.55l94.533,85.709 c2.369,2.147,5.376,3.239,8.398,3.239c2.532,0,5.074-0.767,7.255-2.322L350.82,104.01l0.701,11.074 c0.22,3.464,2.777,6.329,6.193,6.939c0.444,0.079,0.889,0.118,1.328,0.118c2.938,0,5.662-1.724,6.885-4.483l20.077-45.327 C387.052,69.968,386.815,67.234,385.375,65.087z"></path> </g> </g></svg>

                </div>
                <div className='leftsquare'>Visualize Market Capitalization</div>
                <div className='rightsquare'>
                    <div ref={targetRef2}>
                        {isVisible2 &&
                            (<RoughNotation type='box' animate={true} show={true}>
                                <div id='div1'>
                                    Dive into the world of market cap visualization with our intuitive and user-friendly charts.
                                </div>
                                <div id='div2'>
                                    Stay ahead of the game with the latest market trends and make educated decisions.
                                </div>
                            </RoughNotation>)}
                    </div>
                </div>

            </section>
            <section id='joinNow'>
                <div id="Last">

                    <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9999 15.2547C13.8661 14.4638 12.4872 14 10.9999 14C7.40399 14 4.44136 16.7114 4.04498 20.2013C4.01693 20.4483 4.0029 20.5718 4.05221 20.6911C4.09256 20.7886 4.1799 20.8864 4.2723 20.9375C4.38522 21 4.52346 21 4.79992 21H9.94465M13.9999 19.2857L15.7999 21L19.9999 17M14.9999 7C14.9999 9.20914 13.2091 11 10.9999 11C8.79078 11 6.99992 9.20914 6.99992 7C6.99992 4.79086 8.79078 3 10.9999 3C13.2091 3 14.9999 4.79086 14.9999 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <div>
                        Ready to Explore the <RoughNotation type='highlight' animate='true' show='true' color='black'>
                            <span style={{ color: "white", margin: "20px 20" }}>
                                Crypto World?
                            </span>
                        </RoughNotation>
                    </div>
                    <div className='font-medium text-semibold'>
                        Start your journey with Crypto Services and unlock a wealth of knowledge. What are you waiting for?
                    </div>
                    <button id="jn">
                        Get Started!
                    </button>
                </div>
            </section>
            <div id="footer">
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Page