import { Inventory } from "@/app/models/inventory";
import Link from "next/link";
import Image from "next/image";

interface InventoriesListProps {
    inventories: Inventory[]
}

export default function InventoriesList({inventories}: InventoriesListProps) {
    return (
        <div className="featured-car">
            <div className="container">
                <div className="main-title">
                    <h1 className="mb-10">Featured Cars </h1>
                    <div className="title-border">
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                        <div className="title-border-inner"></div>
                    </div>
                </div>
                <div className="row">
                    {inventories.map((inventory: Inventory) => {
                        const {media} = inventory;
                        return (
                            <div key={inventory.itemuid} className="col-lg-4 col-md-6">
                                <div className="car-box-3">
                                    <div className="car-thumbnail">
                                        <Link
                                            className="car-img"
                                            href={`/inventory/${inventory.itemuid}`}>
                                            <div className="price-box-2"><sup>$</sup>{inventory.Price}</div>
                                            {media &&
                                                <Image width={415}
                                                       height={280}
                                                       className="d-block w-100" src={media[0].itemurl_mini_preview}
                                                       alt={inventory.Model}/>}
                                        </Link>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <Link
                                                href={`/inventory/${inventory.itemuid}`}>{inventory.Make} {inventory.Model}</Link>
                                        </h1>
                                        <ul className="facilities-list">
                                            <li>
                                                <i className="fi fi-sr-road"></i> {inventory.mileage}&nbsp;miles
                                            </li>
                                            <li>
                                                <i className="fi fi-rs-plan"></i> {inventory.Transmission}
                                            </li>
                                            <li>
                                                <i className="fi fi-ss-calendar"></i> 2021
                                            </li>
                                            <li>
                                                <i className="fi fi-sr-gas-pump-alt"></i> {inventory.TypeOfFuel}
                                            </li>
                                            <li>
                                                <i className="fi fi-bs-car"></i> Sport
                                            </li>
                                            <li>
                                                <i className="fi fi-sr-settings"></i>{inventory.ExteriorColor}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}