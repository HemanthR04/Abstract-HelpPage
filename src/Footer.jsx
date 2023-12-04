import FooterComponent from "./FooterComponent";
import './Footer.css'


function Footer() {
  
    const footerData = [
        {
            name:"Abstract",
            link1:"Branches",
            id:1,
        },
        {
            name:"Resources",
            link1:"Blog",
            id:2,
        },
        {
            name:"Community",
            link1:"Twiiter",
            id:3,
        },
        {
            name:"Company",
            link1:"About Us",
            id:4,
        }
    ]
    return ( 
        <>
        
        <div className="footer-container bg-black text-white font-Poppins w-full flex px-24 ">
                
             
            <FooterComponent/>
            <FooterComponent/>
            <FooterComponent/>
            <FooterComponent/>
            <div className="contact flex flex-col justify-end p-12">
                <p>Copyright 2023</p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
            </div>
        </div>
        </>
     );
}

export default Footer;