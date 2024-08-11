'use client';
import 'rc-slider/assets/index.css';


import Slider from "rc-slider";
import { Base } from "@/app/models/base";

interface RangeSliderProps {
    prices?: Base[]
}

export default function RangeSlider({prices}: RangeSliderProps) {
    let min = 0;
    let max = 0;
    if (prices) {
        min = +prices[0].name;
        max = +prices[1].name;
    }
    return (
        <>
            <Slider range defaultValue={[min, max]} min={min} max={max}/>
            <div className="d-flex justify-content-between">
                <span>Min price: {min}</span>
                <span>Max price: {max}</span>
            </div>
        </>
    )
}
