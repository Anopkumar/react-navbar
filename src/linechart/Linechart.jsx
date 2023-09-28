/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { LineChart, Line , XAxis , YAxis } from 'recharts';

const Linechart = () => {
    const mathmarks = [
        {
            "Student_ID": 1,
          "Student_Name": "John",
          "Math Marks": 85,
          "Physics Marks": 78,
          "Chemistry Marks": 92
        },
        {
            "Student_ID": 2,
            "Student_Name": "Emily",
          "Math Marks": 92,
          "Physics Marks": 88,
          "Chemistry Marks": 76
        },
        {
            "Student_ID": 3,
            "Student_Name": "Michael",
          "Math Marks": 78,
          "Physics Marks": 75,
          "Chemistry Marks": 84
        },
        {
            "Student_ID": 4,
            "Student_Name": "Sophia",
          "Math Marks": 88,
          "Physics Marks": 92,
          "Chemistry Marks": 89
        },
        {
            "Student_ID": 5,
            "Student_Name": "William",
          "Math Marks": 76,
          "Physics Marks": 80,
          "Chemistry Marks": 77
        },
        {
            "Student_ID": 6,
            "Student_Name": "Olivia",
          "Math Marks": 95,
          "Physics Marks": 89,
          "Chemistry Marks": 94
        },
        {
            "Student_ID": 7,
            "Student_Name": "Daniel",
          "Math Marks": 89,
          "Physics Marks": 82,
          "Chemistry Marks": 88
        },
        {
            "Student_ID": 8,
            "Student_Name": "Ava",
          "Math Marks": 70,
          "Physics Marks": 65,
          "Chemistry Marks": 72
        },
        {
            "Student_ID": 9,
            "Student_Name": "Matthew",
          "Math Marks": 84,
          "Physics Marks": 76,
          "Chemistry Marks": 81
        },
        {
          "Student_ID": 10,
          "Student_Name": "Ella",
          "Math Marks": 91,
          "Physics Marks": 87,
          "Chemistry Marks": 93
        }
      ]
      
      
      
    return (
        <div>
            <LineChart width={500} height={400} data ={mathmarks}> 
             <Line type="monotone" dataKey= "Math Marks" stroke="#8884d8" />
            <XAxis dataKey="Student_Name" />
            <YAxis dataKey=""/>
            <Line dataKey="Physics Marks" stroke='blue'></Line>
            <Line dataKey="Chemistry Marks" stroke='red'></Line>
            </LineChart>
           
           
        </div>
    );
};

export default Linechart;