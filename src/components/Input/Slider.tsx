import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";

import React from "react";

const Slider = ({
    type,
    min = MIN_ANIMATION_SPEED,
    max = MAX_ANIMATION_SPEED,
    step,
    value,
    handleChange,
    isDisabled = false,
}: {
    type?: string;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
}) => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <span className="text-center text-gray-300">{type == "size" ? "Min" : "Slow"}</span>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                disabled={isDisabled}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
            />
            <span className="text-center text-gray-300">{type == "size" ? "Max" : "Fast"}</span>
        </div>
    );
};

export default Slider;
