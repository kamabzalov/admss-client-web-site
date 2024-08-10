'use client'

import { getInventories } from "@/app/http";

export default function SearchButton() {

    const onSearchClick = () => {
        getInventories();
    }

    return (
        <button type="button" onClick={onSearchClick}
                className="btn w-100 button-theme btn-lg">
            <i className="fi fi-br-search"></i>
            Find
        </button>
    )
}
