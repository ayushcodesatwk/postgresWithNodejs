import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Sales = () => {

    const [course_sales, setCourseSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            const sales = await axios.get("http://localhost:4001/sales");

            if (sales.status == 200) {
              console.log('sales data--',sales.data);
              setCourseSales(sales.data);
            } else {
              return console.log("ERROR FETCHING COURSES");
            }
          };

          fetchSales();
    }, [])

  return (
    <>
    <div >
    <h1 className="text-3xl mt-5 text-center font-bold text-blue-500 mb-6">
          Sales
        </h1>
        {course_sales.length > 0 && (
        <div className="overflow-x-auto border border-gray-300 rounded-lg m-auto mt-10 w-[800px] min-w-96">
          <table className="min-w-full text-left text-sm">
            <thead className="">
              <tr className="bg-gray-100 border-b">
                <th className="px-6 py-3 font-medium text-gray-900">
                  Course ID
                </th>
                <th className="px-6 py-3 font-medium text-gray-900">
                  Student ID
                </th>
                <th className="px-6 py-3 font-medium text-gray-900">Price</th>
              </tr>
            </thead>

            <tbody>
              {course_sales.map((course, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{course.course_id}</td>
                  <td className="px-6 py-4">{course.student_id}</td>
                  <td className="px-6 py-4">{course.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    
    </div>
    
    </>
  )
}

export default Sales;