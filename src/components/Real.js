import React from "react";
import { db } from "../../firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
const Real = () => {
  useEffect(() => {
    const fetchData = () => {
      onValue(ref(db), (snapshot) => {
        //setTodos([]);
        const data = snapshot.val();
        console.log(data);
      });
    };
    fetchData();

    // Set up an interval to run fetchData every 5 seconds
    const interval = setInterval(fetchData, 5000);
  }, []);
  return <div>vvvvv</div>;
};

export default Real;
