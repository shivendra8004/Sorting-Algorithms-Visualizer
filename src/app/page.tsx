"use client";
import React, { useEffect } from "react";
import { useSortingAlgorithmContext } from "@/context/Visualizer";

const Home = () => {
    const { arrayToSort, isSorting } = useSortingAlgorithmContext();
    useEffect(() => {
        console.log(arrayToSort);
        console.log(isSorting);
    }, []);
    return <div>Hello</div>;
};

export default Home;
