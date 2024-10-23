const Login = () => {
    return (
        <div id="login" className="w-full h-fit flex flex-col  bg-[#F0F3FA]">
            {/* Language Selector */}
            <div className="relative w-full p-2">
                <div className="flex justify-end">
                    <select className="form-select form-select-sm block w-32 text-xs border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <option value="en" defaultValue>English</option>
                        <option value="fr">Français</option>
                        <option value="ar">العربية</option>
                        <option value="de">Deutsch</option>
                        <option value="es">español</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row items-center h-full px-4 py-4 ">
                {/* Image Section */}
                <div className="w-7/12  mb-0">
                    <img className="w-full  " src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/image_1705919272447.png" alt="Main Illustration"/>
                </div>

                {/* Login Form Section */}
                <div className="w-5/12 -mt-10">
                    <div className="max-w-md mx-auto">
                        <div className="mb-6">
                            <img src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png" alt="Logo" className="w-48 "/>
                        </div>

                        <div className="bg-white shadow-xl rounded-md  px-6 pt-6 pb-10">
                            <form className="space-y-4">
                                <div className=" mb-4">
                                    <h4 className="text-2xl mb-2 font-semibold">Welcome Back!</h4>
                                    <p className="text-gray-600 text-sm">Login to your dashboard with your username and password.</p>
                                </div>

                                <div className="mb-4">
                                    <input className="w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" name="username" placeholder="Your username" />
                                </div>

                                <div className="mb-4">
                                    <div className="relative">
                                        <input className="w-full text-xl px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" type="password" name="password" placeholder="Your password" />
                                        <button type="button" className="absolute inset-y-0 bg-[#FF5722] text-white right-0 flex items-center px-3  hover:text-gray-900">
                                            <i className="bi bi-eye-slash"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-2">
                                    <a href="#" className="text-violet-800 text-xs hover:underline">Forgot Password?</a>
                                </div>

                                <p className="text-xs py-3 text-gray-600">
                                    By clicking login, I accept the <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-indigo-600 hover:underline">Terms & Conditions</a>
                                </p>

                                <div className="my-6">
                                    <button className="w-full px-4 py-2 bg-[#FF5722] text-white text-lg font-semibold rounded-lg shadow-sm hover:bg-orange-700">Login</button>
                                </div>
                            </form>

                           
                        </div>
                        <p className="py-3 text-center text-md">
                                Don&apos;t have an account? <a href="/register" className="text-indigo-600 hover:underline">Register Now!</a>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
