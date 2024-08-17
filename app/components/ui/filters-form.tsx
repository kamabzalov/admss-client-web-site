'use client';

import { Base } from "@/app/models/base";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

interface FiltersFormProps {
    filters: Array<Base[]>;
}

const generatePricesSelect: (prices: Base[]) => Base[] = (prices: Base[]) => {
    const result: Base[] = [];
    for (let i = 1000; i <= +prices[1].name; i = i + 1000) {
        result.push({idx: i, name: i.toString()})
    }
    return result;
}

export default function FiltersForm({filters}: FiltersFormProps) {

    let makes: Base[] = [];
    let models: Base[] = [];
    let locations: Base[] = [];
    let years: Base[] = [];
    let categories: Base[] = [];
    const prices: Base[] = generatePricesSelect(filters[5]);

    let selectedFilters: any = {};

    if (Array.isArray(filters) && filters.length) {
        makes = filters[0];
        models = filters[1];
        locations = filters[2];
        years = filters[3];
        categories = filters[4];
    }

    const pathname = usePathname();
    const {replace} = useRouter();


    const setFilter = (event: ChangeEvent<HTMLSelectElement>, filterKey: string) => {
        if (event.target.value) {
            selectedFilters[filterKey] = event.target.value;
        } else {
            delete selectedFilters[filterKey];
        }
    }

    const onSearchClick = () => {
        const params = new URLSearchParams(selectedFilters);
        replace(`${pathname}?${params.toString()}`);
    }

    const resetFilters = () => {
        selectedFilters = {};
        const params = new URLSearchParams(selectedFilters);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <form>
            <div className="row">
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'make')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Make</option>
                        {makes.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'model')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Model</option>
                        {models.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'location')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Location</option>
                        {locations.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'year')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Year</option>
                        {years.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'category')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Category</option>
                        {categories.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <select onChange={e => setFilter(e, 'ListPrice')} className="form-select form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Price</option>
                        {prices.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>Up to {item.name} USD</option>
                            )
                        })}
                    </select>
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
                <div className="form-group col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="form-group">
                        <button type="reset" onClick={resetFilters}
                                className="btn w-100 button-theme btn-lg">
                            <i className="fi fi-br-search"></i>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
