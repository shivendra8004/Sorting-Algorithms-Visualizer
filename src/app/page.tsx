"use client";
import React, { useEffect } from "react";
import { useSortingAlgorithmContext } from "@/context/Visualizer";
import Slider from "@/components/Input/Slider";

const Home = () => {
    const { arrayToSort, isSorting, animationSpeed, setAnimationSpeed } = useSortingAlgorithmContext();
    useEffect(() => {
        console.log("animationSpeed", animationSpeed);
    }, [animationSpeed]);
    return (
        <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
            <div className="flex h-full justify-center">
                <div className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4" id="content-container">
                    <div className="h-[66px] relative flex items-center justify-between w-full">
                        <h1 className="text-gray-300 text-xl font-light hidden md:flex">Sorting Algorithms Visualizer</h1>
                        <div className="flex items-center justify-center gap-4">
                            <Slider isDisabled={isSorting} value={animationSpeed} handleChange={(e) => setAnimationSpeed(Number(e.target.value))} />
                        </div>
                    </div>
                    <div className="relative h-[calc(100vh-66px)] w-full">
                        <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
                            {arrayToSort.map((value, index) => (
                                <div
                                    key={index}
                                    className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                                    style={{
                                        height: `${value}px`,
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
