function NavBar() {
    return ( 
        <>
            <div className="nav-container bg-black text-white flex items-center justify-between  text-xl font-Poppins font-medium">
                <div className="logo-container flex gap-4 mx-12">
                    <img src="" alt="" />
                    <p className=" border-r-2 px-8">Abstract</p>
                    <p className="px-8">Help Center</p>
                </div>
                <div className="nav-link-container flex gap-4 mx-12">
                    <button className="border-2 px-8 py-2 my-4  rounded-xl">Submit a Request</button>
                    <button className="bg-Purple1 px-8 my-4 rounded-lg ">Sign In </button>
                </div>
            </div>
        </>
     );
}

export default NavBar;