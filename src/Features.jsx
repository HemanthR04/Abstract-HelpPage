import FeatureCard from "./FeatureCard";
import { featureData } from "./Config";

function Features() {

    return (
        <>
            <div className="features-container grid grid-cols-2 px-40 py-40 gap-20">


                {featureData.map((featureData) => (
                    <FeatureCard key={featureData.id} data={featureData} />
                ))}

                


            </div>
        </>
    );
}

export default Features;