import ImageCarousel from "@/app/components/ui/carousel";
import { getInventoryData } from "@/app/http";
import InventoryActions from "@/app/components/ui/inventory-actions";

export default async function Page(params: { params: { inventoryId: string } }) {
    const inventoryData = await getInventoryData(params)
    return (
        <div className="car-details-page content-area-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="car-details-section">
                            <div className="cardetailsslider-2 mb-40">
                                <div className="main clearfix">
                                    <div className="heading-car-2">
                                        <div className="pull-left">
                                            <h3>{inventoryData.Make} {inventoryData.Model}</h3>
                                        </div>

                                        <div className="pull-right">
                                            <div className="price-box-3"><sup>$</sup>{inventoryData.ListPrice}</div>
                                        </div>
                                    </div>
                                    <ImageCarousel images={inventoryData.media}/>
                                </div>
                            </div>

                            <p>{inventoryData.Notes}</p>


                            <InventoryActions/>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search">
                                <h3 className="sidebar-title">Booking This Car</h3>
                                <ul>
                                    <li>
                                        <span>Make</span>{inventoryData.Make}
                                    </li>
                                    <li>
                                        <span>Model</span>{inventoryData.Model}
                                    </li>
                                    <li>
                                        <span>VIN</span>{inventoryData.VIN}
                                    </li>
                                    <li>
                                        <span>Body Style</span>{inventoryData.BodyStyle}
                                    </li>
                                    <li>
                                        <span>Year</span>{inventoryData.Year}
                                    </li>
                                    <li>
                                        <span>Condition</span>Brand New
                                    </li>
                                    <li>
                                        <span>Mileage</span>{inventoryData.mileage}
                                    </li>
                                    <li>
                                        <span>Interior Color</span>{inventoryData.InteriorColor}
                                    </li>
                                    <li>
                                        <span>Transmission</span>{inventoryData.Transmission}
                                    </li>
                                    <li>
                                        <span>Engine</span>{inventoryData.Engine}
                                    </li>
                                    <li>
                                        <span>No. of Gears:</span>5
                                    </li>
                                    <li>
                                        <span>Location</span>Toronto
                                    </li>
                                    <li>
                                        <span>Fuel Type</span>{inventoryData.TypeOfFuel}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
