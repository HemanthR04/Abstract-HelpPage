function FooterComponent() {

    const footerData = [
        {
            name:"Abstract",
            link1:"Branches",
        },
        {
            name:"Resources",
            link1:"Blog",
        },
        {
            name:"Community",
            link1:"Twiiter",
        },
        {
            name:"Company",
            link1:"About ",
        }
    ]
    return ( 
        <>
        <div className="container py-36">
            <p className="text-3xl mb-10">Abstract</p>
            <ul className="pb-10">
                <li>Start Trail</li>
                <li>Pricing</li>
                <li>Download</li>
            </ul>
        </div>
        </>
     );
}

export default FooterComponent;