'use client';

import { Base } from "@/app/models/base";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FiltersFormProps {
    filters: Array<Base[]>;
}

export default function FiltersForm({filters}: FiltersFormProps) {

    let makes: Base[] = [];
    let models: Base[] = [];
    let locations: Base[] = [];
    let years: Base[] = [];
    let categories: Base[] = [];
    let min = 0;
    let max = 0;

    const selectedFilters: any = {};

    if (Array.isArray(filters) && filters.length) {
        makes = filters[0];
        models = filters[1];
        locations = filters[2];
        years = filters[3];
        categories = filters[4];
        min = +filters[5][0]['name'];
        max = +filters[5][1]['name'];
    }

    const pathname = usePathname();
    const {replace} = useRouter();

    const setPriceFilter = (event: number | number[]) => {

    }

    const setFilter = (event: ChangeEvent<HTMLSelectElement>, filterKey: string) => {
        selectedFilters[filterKey] = event.target.value;
    }

    const onSearchClick = () => {
        const params = new URLSearchParams(selectedFilters);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <form>
            <div className="row">
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'make')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option>Select Make</option>
                        {makes.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Model</option>
                        {models.map(item => {
                            return (
                                <option key={item.idx} value={item.idx}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Location</option>
                        {locations.map(item => {
                            return (
                                <option key={item.idx} value={item.idx}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Year</option>
                        {years.map(item => {
                            return (
                                <option key={item.idx} value={item.idx}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select className="form-select form-select-lg" aria-label="Default select example">
                        <option>Select Category</option>
                        {categories.map(item => {
                            return (
                                <option key={item.idx} value={item.idx}>{item.name}</option>
                            )
                        })}
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
