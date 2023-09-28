/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */

import Priceoption from "./priceoption/Priceoption"


const Priceoptions = () => {
    
       const  price_options = [
          {
            "id": "1",
            "name": "Basic Membership",
            "price": 39,
            "features": [
              "Access to gym facilities",
              "Cardio equipment ",
            
              "Locker room access",
              "Group fitness classes ",
              "Free Wi-Fi",
             
            ]
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "price": 59,
            "features": [
              "Access to gym facilities",
          
             
              "Locker room access",
           
              "Access to sauna and steam room",
        
              "10% discount on merchandise",
              "No enrollment fee"
            ]
          },
          {
            "id": "3",
            "name": "Family Membership",
            "price": 99,
            "features": [
       
             
              "Strength training equipment",
              "Locker room access",
           
              "Access to sauna and steam room",
         
              "15% discount on merchandise",
              "No enrollment fee"
            ]
          },
          {
            "id": "4",
            "name": "Student Membership",
            "price": 29,
            "features": [
              "Access to gym facilities",
       
    
              "Locker room access",
        
              "Valid student ID required",
              "No enrollment fee"
            ]
          }
        ]
      
      
      
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center ">Best price For ur Feetness</h1>

          <div className="grid md:grid-cols-3 gap-4">
          {
                price_options.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }

            
          </div>
            
        </div>
    );
};

export default Priceoptions;