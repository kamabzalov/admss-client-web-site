'use client';

import { useState } from "react";
import { Base } from "@/app/models/base";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterSelectorProps {
    filters: Base[];
    filterKey: string;
}

export default function FilterSelector({filters, filterKey}: FilterSelectorProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const [options] = useState<Base[]>(filters);

    const changeFilter = (item: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams);
        const selectedItem = options.find(option => +option.idx === +item.target.value);
        if (selectedItem) {
            params.set(filterKey, selectedItem.name);
        } else {
            params.delete(filterKey);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <select className="form-select form-select-lg" aria-label="Default select example"
                onChange={(event) => changeFilter(event)}>
            <option>Select {filterKey}</option>
            {options.map(item => {
                return (
                    <option key={item.idx} value={item.idx}>{item.name}</option>
                )
            })}
        </select>
    )
}
