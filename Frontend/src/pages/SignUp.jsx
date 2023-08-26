import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        gender: '',
        DOB: '',
        number: ''
    });
    const [passwordError, setPasswordError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const handleEmailExists = (email) => {
        axios
            .get(`http://localhost:4000/checkEmail?email=${email}`)
            .then((response) => {
                setEmailExists(response.data.exists);
            })
            .catch((error) => {
                console.error("Error checking email:", error);
                // Handle the error
            });
    };
    
    const passwordValidator = (password) => {
        // Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number
        // Regex explanation:
        // ^(?=.*[a-z]) The string must contain at least 1 lowercase alphabetical character
        // (?=.*[A-Z]) The string must contain at least 1 uppercase alphabetical character
        // (?=.*[0-9]) The string must contain at least 1 numeric character
        // .{8,} The string must be eight characters or longer
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
        return regex.test(password);
    };

    const PhoneNumberValidator = (number) => {
        const regex = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        return regex.test(number);
    };

    const handlePasswordChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (passwordValidator(e.target.value)) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    };

    const handleNumberChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (PhoneNumberValidator(e.target.value)) {
            setNumberError(false);
        } else {
            setNumberError(true);
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/signup', formData)
            .then((response) => {
                console.log(response.data);
                setSignupSuccess(true);
                // Handle success or redirect to another page
            })
            .catch((error) => {
                console.error("Error uploading data:", error);
                // Handle the error
            });
    };
    if (signupSuccess) {
        navigate('/Dashboard');
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="abc@gmail.com"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => {
                                        handleChange(event);
                                        handleEmailExists(event.target.value);
                                    }}
                                />

                                
                            </div>
                        </div>
                        {emailExists && (
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                Email already exists
                            </p>
                        )}
                        {/* ... */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password <sub>(password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number)</sub>
                            </label>
                            <div className="mt-2">
                                <input

                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    placeholder="Enter Here"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    onChange={handlePasswordChange}

                                />
                            </div>
                        </div>
                        {/* Gender */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Gender
                                </label>
                            </div>
                            <div className="mt-2">
                                <select
                                    id="gender"
                                    name="gender"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                    {/* Add more gender options as needed */}
                                </select>
                            </div>
                        </div>
                        {/* ... */}
                        {/* for DOB */}
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                                DOB
                            </label>
                            <div className="mt-2">
                                <input
                                    id="age"
                                    name="age"
                                    type="date"
                                    placeholder="Enter your DOB"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {/* ... */}
                        {/* //for mobile number */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone Number
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="number"
                                    name="phone"
                                    type="tel"
                                    maxLength={13}  // Adjust the maxLength value as necessary
                                    placeholder="Enter your mobile number"
                                    autoComplete="number"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange && handleNumberChange}
                                />
                            </div>
                        </div>
                        <div>
                            {/* <button
                                type="submit"
                                onSubmit={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Sign Up
                            </button> */}
                            {passwordError && (
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number
                                </p>
                            )}
                            {numberError && (
                                <p className="mt-2 text-sm text-red-600" id="email-error">
                                    Enter a valid phone number
                                </p>
                            )}
                            <button
                                type="submit"
                                onSubmit={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Sign Up
                            </button>

                        </div>
                    </form>
                    <p className="mt-1 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to='/login'>
                            <a href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500 hover:underline">
                                Login now
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUp;
