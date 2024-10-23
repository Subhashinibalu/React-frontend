
const Register = () => {
    return (
        <div id="login" className="w-full h-fit flex flex-col bg-[#F0F3FA]">
            {/* Language Selector */}
            <div className="relative w-full ">
                <div className="flex justify-end m-2">
                    <select className="form-select form-select-xs block w-28 text-xs border-gray-300 rounded-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <option value="en" defaultValue>English</option>
                        <option value="fr">Français</option>
                        <option value="ar">العربية</option>
                        <option value="de">Deutsch</option>
                        <option value="es">español</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center h-full px-4 py-8 ">
                {/* Image Section */}
                <div className="w-7/12  mb-0">
                    <img className="w-full  mx-auto" src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/image_1705919272447.png" alt="Main Illustration"/>
                </div>

                {/* Login Form Section */}
                <div className="md:w-5/12 -mt-10">
                    <div className="max-w-md mx-auto">
                        <div className="mb-6">
                            <img src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png" alt="Logo" className="w-48 "/>
                        </div>

                        <div className="bg-white shadow-sm rounded-md  px-6 pt-6 pb-8">
                            <form className="space-y-4">
                                <div className=" mb-4">
                                    <h4 className="text-2xl mb-2 font-semibold">Register Account</h4>
                                    <p className="text-gray-600 text-xs">Free on-boarding support. No credit card required.</p>
                                </div>

                                <div className="mb-4">
                                    
                                    <select className="w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-sm " name="business">
                                        <option value="">Select Business Type</option>
                                        <option value="198">Restaurant</option>
                                        <option value="199">Bar</option>
                                        <option value="200">Bakery</option>
                                        <option value="201">Cafe</option>
                                        <option value="202">Pub</option>
                                        <option value="203">Diner</option>
                                        <option value="204">Lounge</option>
                                        <option value="205">Tea House</option>
                                        <option value="206">Winery</option>
                                        <option value="207">Other</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <input type="text" className="w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-sm " name="email" placeholder="Your email" />
                                </div>
                                <div className="mb-4">
                                    <input className="w-full px-4 py-3 text-xl border border-gray-300 rounded-lg shadow-sm " name="number" type="tel" placeholder="mobile number" />
                                </div>
                               

                                <p className="text-xs text-gray-600 pb-2">
                                By clicking register, I accept <a href="https://posbytz.com/terms-and-conditions/" target="_blank" className="text-indigo-600 hover:underline">Terms & Conditions</a>
                                </p>

                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 bg-[#FF5722] text-white text-lg font-semibold rounded-lg shadow-sm hover:bg-orange-700">Register</button>
                                </div>
                            </form>

                            
                        </div>
                        <p className="py-3 text-center text-md">
                                Already have an account? <a href="/Login" className="text-violet-900 hover:underline">Login Here!</a>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
