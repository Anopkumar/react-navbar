/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Feature from "./Feature";



const Priceoption = ({ option }) => {
    const { name , price , features}  = option
    return (
        <div className="bg-red-500 p-5 rounded-md gap-5 flex flex-col " >
            <h1 className="text-center" >
                <span className="text-5xl">{price}</span>
                <span  className="text-xl">/mon</span>
            </h1>
            <h1 className="font-bold text-center">
                {name}
            </h1>
            {
                features.map(feature=> <Feature feature={feature}></Feature>)
            }
            <button className=" bg-emerald-500 w-full rounded-md mt-5 p-2   hover:text-white hover:bg-emerald-950">Buy Now</button>
            
        </div>
    );
};

export default Priceoption;