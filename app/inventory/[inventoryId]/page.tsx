import { API_HOST, API_KEY } from "@/app/app-config";
import { Inventory } from "@/app/models/inventory";
import Image from "next/image";
import AppTabs from "@/app/components/ui/tabs";

export default async function Page(params: { params: { inventoryId: string } }) {
    const getInventoryDataById = await fetch(`${API_HOST}item/${params.params.inventoryId}`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    })
    const inventoryData: Inventory = await getInventoryDataById.json();
    const preview = inventoryData.media && inventoryData.media[0];
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
                                    {preview && <Image src={preview?.itemurl}
                                                       className="d-block w-100"
                                                       alt={inventoryData.Make + ' ' + inventoryData.Model}
                                                       width={856} height={640}
                                                       sizes="100vw"
                                                       style={{
                                                           width: '100%',
                                                           height: 'auto',
                                                       }}
                                    />}
                                </div>
                            </div>

                            <div className="tabbing tabbing-box mb-40">
                                <AppTabs descriptionTab={inventoryData.Notes} images={inventoryData.media} caption={inventoryData.Make + ' ' + inventoryData.Model}/>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search d-none d-xl-block d-lg-block">
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
