/* eslint-disable react/prop-types */
import { AiFillDownCircle } from "react-icons/ai";


const Feature = ( { feature }) => {
    return (
        <div>
            <p className="flex items-center gap-2">
            <AiFillDownCircle></AiFillDownCircle>
                {feature}

            </p>
            
        </div>
    );
};

export default Feature;