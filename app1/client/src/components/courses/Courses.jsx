import axios from "axios";
import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await axios.get("http://localhost:4001/courses");

      if (courses.status == 200) {
        console.log(courses.data);
        setCourses(courses.data);
      } else {
        return console.log("ERROR FETCHING COURSES");
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
    <div >
    <h1 className="text-3xl mt-5 text-center font-bold text-blue-500 mb-6">
          Courses
        </h1>
      {courses.length > 0 && (
        <div className="overflow-x-auto border border-gray-300 rounded-lg m-auto mt-10 w-[800px] min-w-96">
          <table className="min-w-full text-left text-sm">
            <thead className="">
              <tr className="bg-gray-100 border-b">
                <th className="px-6 py-3 font-medium text-gray-900">
                  Course ID
                </th>
                <th className="px-6 py-3 font-medium text-gray-900">
                  Course Name
                </th>
                <th className="px-6 py-3 font-medium text-gray-900">Price</th>
                <th className="px-6 py-3 font-medium text-gray-900">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{course.course_id}</td>
                  <td className="px-6 py-4">{course.course_name}</td>
                  <td className="px-6 py-4">{course.price}</td>
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-3 bg-emerald-500 text-white hover:bg-emerald-700">
                      Add to cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </>
  );
};

export default Courses;
