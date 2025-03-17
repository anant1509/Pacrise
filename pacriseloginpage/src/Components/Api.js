import React, { useEffect } from "react";

const Api = () => {
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch("http://192.168.1.5:5000/login", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error fetching message:", error));

    // empty dependency array
    // fetch("http://192.168.1.29:5000/user") // Call Flask API
    // // fetch("http://127.0.0.1:5000/data")
    // .then((response) => response.json())
    // .then((data) => console.log(data.message)) // Set message in state
    // .catch((error) => console.error("Error fetching message:", error));
  });

  return <div>Data Fetching</div>;
};

export default Api;
