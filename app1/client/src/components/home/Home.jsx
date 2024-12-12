import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios("http://localhost:4001/students");

        console.log("result--", result);

        setStudents(result.data);
      } catch (error) {
        console.log("Unable to fetch data-", error);
      }
    };
    fetchStudents();
  }, []);

  const deleteHandler = async (id) => {
    console.log(id);

    const res = await axios.delete(`http://localhost:4001/students/${id}`);

    if (res.status == 200) {
      console.log("Data Deleted...");
    } else {
      console.log("Failed to delete data...");
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl text-center font-bold text-blue-500 mb-6">
          Student List
        </h1>

        <div className="overflow-x-auto w-[900px] m-auto rounded-xl border border-gray-300">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left">Name</th>
                <th className="border border-gray-200 p-2 text-left">City</th>
                <th className="border border-gray-200 p-2 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="border border-gray-200 p-2 text-lg font-medium truncate">
                      {student.name}
                    </td>
                    <td className="border border-gray-200 p-2 text-lg font-medium truncate">
                      {student.city}
                    </td>
                    <td className="border border-gray-200 p-2">
                      <button
                        onClick={() => deleteHandler(student.roll_no)}
                        className="p-2 rounded-lg bg-red-400 hover:bg-red-800 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center p-4 text-gray-500">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
