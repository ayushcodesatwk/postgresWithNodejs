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
        <h1 className="text-2xl text-center font-bold text-green-600 mb-6">
          Student List
        </h1>

        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-md w-fit m-auto p-4">
          {students.length > 0 ? (
            students.map((student, index) => (
              
              <div
                key={index}
                className="flex gap-10 items-center border-b border-gray-200 py-2"
              >
                <div className="text-lg font-medium">
                  Name:&nbsp; &nbsp;{student.name}
                </div>
                ||
                <div className="text-lg font-medium">
                  City:&nbsp; &nbsp;{student.city}
                </div>
                <button
                  onClick={() => deleteHandler(student.roll_no)}
                  className="p-3 rounded-lg bg-red-400 hover:bg-red-800 text-white"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No students found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
