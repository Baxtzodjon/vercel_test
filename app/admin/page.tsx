"use client"

import Link from "next/link";

const Dashboard = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-center h-[90vh]">

                <div className="w-full max-w-[600px] bg-[#222] rounded-xl shadow-md py-8 px-8">

                    <h1 className="text-[28px] font-bold text-white mb-6">Add Form</h1>

                    <form action="" className="flex flex-col">

                        <div className="flex flex-col gap-[10px]">
 
                            <div className="flex items-center justify-between">

                                <input type="text" name="titles" placeholder="Enter title" className="bg-gray-700 text-white border-0 rounded-md p-2 w-[230px] focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" />

                                <input type="number" name="price" placeholder="Enter price" className="bg-gray-700 text-white border-0 rounded-md p-2 w-[230px] focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" />

                            </div>

                            <div className="flex items-center justify-between">

                                <textarea name="description" id="" placeholder="Enter description" className="bg-gray-700 text-white border-0 rounded-md p-2 w-[230px] focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300"></textarea>

                                <select name="catg_prod" id="" className="bg-gray-700 text-white border-0 rounded-md p-2 w-[230px] focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300">

                                    <option value="phones">Phones</option>
                                    <option value="computers">Computers</option>
                                    <option value="smartwatch">SmartWatch</option>
                                    <option value="camera">Camera</option>
                                    <option value="headphones">HeadPhones</option>
                                    <option value="gaming">Gaming</option>

                                </select>

                            </div>

                            <button type="submit" className="bg-gray-700 text-white font-bold w-full h-[45px] rounded shadow-lg transform transition duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 hover:shadow-2xl">Submit</button>

                            <Link href="/admin/categories" className="flex items-center justify-center bg-gray-700 text-white font-bold w-full h-[45px] rounded shadow-lg transform transition duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 hover:shadow-2xl">Admin Add Categories</Link>

                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}

export default Dashboard;