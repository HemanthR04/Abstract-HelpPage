
/* eslint-disable react/prop-types */
function FeatureCard(props) {
const {imgUrl , title , subHead} = props.data;


    return ( 
        <>
            <div className="card-container flex items-center justify-start font-Poppins m-auto gap-12 w-8/12">
                <div className="feature-img w-32 h-28  ">
                    <img src={imgUrl} alt="" className='w-32 h-28 max-w-none'/>
                </div>
                <div className="feature-details flex flex-col justify-center">
                    <p className='text-black  font-semibold text-2xl'>{title}</p>
                    <p className=''>{subHead}</p>
                    <a href="" className='text-blue-500'>Learn More</a>
                </div>
            </div>
        </>
     );
}

export default FeatureCard;