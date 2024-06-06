import React, { useState, useContext, useEffect } from 'react';
import loginLogo from "../assets/image/login2.png";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"
import LoginContext from '../context/loginContext.js';

export default function Login() {
    const {loginStatus, setLoginStatus} = useContext(LoginContext)
    const navigate = useNavigate();

    useEffect( () => {
        if(loginStatus){
            navigate("/")
        }
    }, [loginStatus,navigate])
    

    const [user, setUser] = useState({
        email: "", password: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    };

    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        await axios.post("/api/v1/users/login", {
            email,
            password
        })
        .then((response) => {
            if(response.status === 200){
                // window.alert("Login Successfully");
                console.log("Login Successfully");
                setLoginStatus(true)
                navigate("/")
            } else {
                setLoginStatus(false)
                window.alert(response.message);
                console.log(response.message);
            }
        }).catch((error) => {
            setLoginStatus(false)
            window.alert(error.message)
        })        
    };

    return (
        <div className="relative flex items-top justify-center min-h-[400px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <div className='mb-4'>
                                <img src={loginLogo} alt="image" />
                            </div>
                            <div>
                                <p className='text-red-800 font-medium'>Don't have an account?</p>
                                <NavLink to='/signup'>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Sign Up</button>
                                </NavLink>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center" method='POST' onSubmit={postData}>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="password" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password" // Corrected the id from "pasword" to "password"
                                    placeholder="*******"
                                    value={user.password}
                                    onChange={handleInputs}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
// http://localhost:8000