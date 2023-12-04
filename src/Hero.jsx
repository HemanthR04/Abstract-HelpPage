function Hero() {
    return ( 
        <>
            <div className="hero-container w-full bg-heroBG text-center ">
                <p className="font-Poppins text-6xl p-14 pt-28 font-medium">How can we help?</p>
                <input type="text"  className=" w-1/3 p-4 mb-20 rounded-md font-Poppins border-2 border-black shadow-2xl" placeholder="Search"/>
            </div>
        </>
     );
}

export default Hero;