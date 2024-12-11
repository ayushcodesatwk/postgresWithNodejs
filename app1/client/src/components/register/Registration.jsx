import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4001/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, city: city }),
      });

      if(response.ok){
            console.log("STUDENT LISTED")
      }else{
            console.log("FAILED TO LIST STUDENT");     
      }

      setCity("");
      setName("");

    } catch (error) {
        return console.log("ERROR 401-", error);
    }
  };

  return (
    <>
      <div className=" w-1/2 m-auto mt-20">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form
          action="#"
          className="max-w-md mx-auto shadow-md bg-blue-200 rounded-lg px-8 py-6"
          onSubmit={submitFormHandler}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Student Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              City Name:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
