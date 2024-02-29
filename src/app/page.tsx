"use client";
import React, { useEffect } from "react";
import { useSortingAlgorithmContext } from "@/context/Visualizer";
import Slider from "@/components/Input/Slider";
import Select from "@/components/Input/Select";
import { algorithmOptions, generateAnimationArray, sortingAlgorithmsData } from "@/lib/utils";
import { SortingAlgorithmType } from "@/lib/types";
import { RotateCcw } from "lucide-react";
import { PlayCircle } from "lucide-react";

const Home = () => {
    const {
        arrayToSort,
        isSorting,
        animationSpeed,
        setAnimationSpeed,
        selectedAlgorithm,
        setSelectedAlgorithm,
        requiresReset,
        resetArrayAndAnimation,
        runAnimation,
    } = useSortingAlgorithmContext();
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
    };
    const handlePlay = () => {
        if (requiresReset) {
            resetArrayAndAnimation();
            return;
        }
        generateAnimationArray(selectedAlgorithm, isSorting, arrayToSort, runAnimation);
    };
    return (
        <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
            <div className="flex h-full justify-center">
                <div className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4" id="content-container">
                    <div className="h-[66px] relative block md:flex items-center justify-between w-full">
                        <h1 className="text-gray-300 text-xl font-light text-center py-4 my-2 border-b sm:p-0 sm:border-0">Sorting Algorithms Visualizer</h1>
                        <div className="flex items-center justify-center gap-4">
                            <Slider isDisabled={isSorting} value={animationSpeed} handleChange={(e) => setAnimationSpeed(Number(e.target.value))} />
                            <Select options={algorithmOptions} defaultValue={selectedAlgorithm} onChange={handleSelectChange} isDisabled={isSorting} />
                            <button className="flex items-center justify-center" onClick={handlePlay}>
                                {requiresReset ? <RotateCcw className="text-gray-400 " size={18} /> : <PlayCircle className="text-system-green60" size={18} />}
                            </button>
                        </div>
                        <div className="flex absolute top-[180%] sm:top-[120%] left-0 w-full">
                            <div className="flex w-full text-gray-400 p-4 rounded border border-system-purple20 bg-system-purple80 bg-opacity-10 gap-6 ">
                                <div className="flex flex-col items-start justify-start w-full sm:w-3/4">
                                    <h3 className="text-lg">{sortingAlgorithmsData[selectedAlgorithm].title}</h3>
                                    <p className="text-sm text-grey-500 pt-2">{sortingAlgorithmsData[selectedAlgorithm].description}</p>
                                </div>
                                <div className="hidden sm:flex flex-col items-start justify-start w-1/4 gap-2">
                                    <h3 className="text-lg">Time Complexity</h3>
                                    <div className="flex flex-col gap-2">
                                        <p className="flex w-full text-sm text-grey-500">
                                            <span className="w-28">Worst Case:</span>
                                            <span>{sortingAlgorithmsData[selectedAlgorithm].worstCase}</span>
                                        </p>
                                        <p className="flex w-full text-sm text-grey-500">
                                            <span className="w-28">Average Case:</span>
                                            <span>{sortingAlgorithmsData[selectedAlgorithm].averageCase}</span>
                                        </p>
                                        <p className="flex w-full text-sm text-grey-500">
                                            <span className="w-28">Best Case:</span>
                                            <span>{sortingAlgorithmsData[selectedAlgorithm].bestCase}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
