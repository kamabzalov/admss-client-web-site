'use client';

import { Base } from "@/app/models/base";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

export const filtersMap = new Map<number, string>()
    .set(0, 'make')
    .set(1, 'model')
    .set(2, 'location')
    .set(3, 'year')
    .set(4, 'category')
    .set(5, 'price')

interface FiltersFormProps {
    filters: Array<Base[]>;
}

export default function FiltersForm({filters}: FiltersFormProps) {

    let min = 0;
    let max = 0;

    const setPriceFilter = (event: number | number[]) => {

    }

    const onSearchClick = () => {
        console.log('call');
    }

    return (
        <form>
            <div className="row">
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Make</option>
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Model</option>
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Location</option>
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Year</option>
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Category</option>
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6 pt-2 pb-2">
                    <Slider onChange={(event) => setPriceFilter(event)} range defaultValue={[min, max]} min={min}
                            max={max}/>
                    <div className="d-flex justify-content-between">
                        <span>{min} USD</span>
                        <span>{max} USD</span>
                    </div>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="form-group">
                        <button type="button" onClick={onSearchClick}
                                className="btn w-100 button-theme btn-lg">
                            <i className="fi fi-br-search"></i>
                            Find
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
