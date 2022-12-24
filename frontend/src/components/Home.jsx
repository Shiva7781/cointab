import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const handleFetch = async () => {
    if (isFetching)
      alert("Please wait... Previous fetching request is in process!");

    setIsFetching(true);
    try {
      await axios.post("https://shy-red-kitten-wig.cyclic.app/fetchusers");
      setIsFetching(false);

      // alert("Fetch Succesful");
    } catch (err) {
      console.log("err:", err);
      setIsFetching(false);
    }
  };

  const handleDelete = () => {
    const result = window.confirm(
      "Are you sure you want to delete all records!"
    );

    if (!result) return;

    try {
      axios.delete("https://shy-red-kitten-wig.cyclic.app/deleteusers");
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDetails = () => {
    navigate("/userdetails");
  };

  return (
    <div className="Home">
      <h1>Home Page</h1>

      <button onClick={handleFetch}>Fetch Users</button>
      <button onClick={handleDelete}>Delete Users</button>
      <button onClick={handleDetails}>User Details</button>

      <p>{isFetching ? "Fetching..." : null}</p>
    </div>
  );
};

export default Home;
