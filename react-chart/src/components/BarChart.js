import React from 'react';
import { useState, useEffect } from "react";
import {Bar,Line} from 'react-chartjs-2';
import axios from 'axios';


const BarChart = () => {
    const [chartData, setChartData] = useState({});
    // const [employSalary, setEmploySalary] = useState([]);
    // const [employAge, setEmployAge] = useState([]);
  
    const chart = () => {
      let empySalary = [];
      let empyAge = [];

    //   let dataObj =[];

    //   fetch("https://dummy.restapiexample.com/api/v1/employees")
    //     .then(response => response.json())
    //     .then(data => {
    //         dataObj = data;
    //         empSal.push((dataObj.employee_salary));
    //         empAge.push((dataObj.employee_age));

    //         setChartData({
    //             labels: empAge,
    //             datasets: [
    //               {
    //                 label: "level of thiccness",
    //                 data: empSal,
    //                 backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    //                 borderWidth: 4
    //               }
    //             ]
    //           });

    //         console.log(dataObj)
    //     })

    //     .catch((error) => {
    //         console.error(error);
    //       });

      axios
        .get("https://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            empySalary.push(parseInt(dataObj.employee_salary));
            empyAge.push(parseInt(dataObj.employee_age));
          }
          setChartData({
            labels: empyAge,
            datasets: [
              {
                label: "Levels",
                data: empySalary,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4,
                
              }
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(empySalary, empyAge);
    };
  
    useEffect(() => {
      chart();
    }, []);

    
    return (
      <div className="App">
        <h1>Employee Details</h1>
        <div>
          <Line
            data={chartData}
            height = {400}
            width = {400}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: { text: "Levels", display: true },
              scales: {
                yAxes: [
                  {
                    stacked:true,
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    stacked:true,
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  };
  
  export default BarChart;











// const BarChart = () => {

//     const 

//     return <div>
//         <Bar
//             data = {{
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],

//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
            
//         }]
//             }}

//         height = {600}
//         width = {600}
        
//         options = {{
//             maintainAspectRatio: false,
//         }}
        
       
        
//         />
//         </div>
// }

// export default BarChart;