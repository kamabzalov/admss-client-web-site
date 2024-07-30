import { API_HOST, API_KEY } from "@/app/app-config";
import { Inventory } from "@/app/models/inventory";

export async function generateStaticParams() {
    const inventories = await fetch(`${API_HOST}list/0`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    }).then((res) => res.json());

    return inventories.map((inventory: Inventory) => ({
        inventoryId: inventory.itemuid,
    }))
}

export default function InventoryCard(params: { params: { inventoryId: string } }) {
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
                                            <h3>Toyota Prius Specs</h3>
                                            <p>
                                                <i className="flaticon-pin"></i> 123 Kathal St. Tampa City,
                                            </p>
                                        </div>

                                        <div className="pull-right">
                                            <div className="price-box-3"><sup>$</sup>650<span>/month</span></div>
                                        </div>
                                    </div>
                                    <img className="img-fluid w-100" src="/img/car-6.png"
                                         alt="photo"/>
                                </div>
                            </div>
                            <div className="tabbing tabbing-box mb-40">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">Description
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab"
                                                aria-controls="profile" aria-selected="false">Specifications
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact" type="button" role="tab"
                                                aria-controls="contact" aria-selected="false">Features
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab-4" data-bs-toggle="tab"
                                                data-bs-target="#contact-4" type="button" role="tab"
                                                aria-controls="contact-4" aria-selected="false">Related Car
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab-5" data-bs-toggle="tab"
                                                data-bs-target="#contact-5" type="button" role="tab"
                                                aria-controls="contact-5" aria-selected="false">Location
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab-6" data-bs-toggle="tab"
                                                data-bs-target="#contact-6" type="button" role="tab"
                                                aria-controls="contact-6" aria-selected="false">Video
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <div className="car-description mb-50">
                                                    <h3 className="heading-2">
                                                        {params.params.inventoryId}
                                                    </h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                                        in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
                                                        consectetur nulla. Nulla posuere sapien vitae lectus suscipit,
                                                        et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
                                                        convallis fringilla diam sed aliquam. Sed tempor iaculis massa
                                                        faucibus feugiat. In fermentum facilisis massa, a consequat
                                                        purus viverra a. Aliquam pellentesque nibh et nibh feugiat
                                                        gravida. Maecenas ultricies, diam vitae semper placerat, velit
                                                        risus accumsan nisl, eget tempor lacus est vel nunc. Proin
                                                        accumsan elit sed neque euismod fringilla. Curabitur lobortis
                                                        nunc velit, et fermentum urna dapibus non. Vivamus magna lorem,
                                                        elementum id gravida ac, laoreet tristique augue. Maecenas
                                                        dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.</p>
                                                    <p>Aliquam ultricies nunc porta metus interdum mollis. Donec
                                                        porttitor libero augue, vehicula tincidunt lectus placerat a.
                                                        Sed tincidunt dolor non sem dictum dignissim. Nulla vulputate
                                                        orci felis, ac ornare purus ultricies a. Fusce euismod magna
                                                        orci, sit amet aliquam turpis dignissim ac. In at tortor at
                                                        ligula pharetra sollicitudin. Sed tincidunt, purus eget laoreet
                                                        elementum, felis est pharetra ante, tincidunt feugiat libero
                                                        enim sed risus. Sed at leo sit amet mi bibendum aliquam.
                                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                        Praesent cursus varius odio, non faucibus dui. Nunc vehicula
                                                        lectus sed velit suscipit aliquam vitae eu ipsum. adipiscing
                                                        elit.</p>
                                                    <iframe src="https://www.youtube.com/embed/V7IrnC9MISU"
                                                            allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <div className="accordion accordion-flush" id="accordionFlushExample2">
                                            <div className="accordion-item">
                                                <div className="car-amenities mb-40">
                                                    <h3 className="heading-2">Specifications</h3>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul className="amenities">
                                                                <li>
                                                                    <i className="fa fa-check"></i>Top Speed: 270
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Fuel Type: Diesel
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Mileage: 35,200 KM
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Engine: 2901
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Gear: 4
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul className="amenities">
                                                                <li>
                                                                    <i className="fa fa-check"></i>Drive Train: Front
                                                                    Wheel
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Body Style: Sedan
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Year:2019
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Fuel Type: Diesel
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Interior Color: White
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul className="amenities">
                                                                <li>
                                                                    <i className="fa fa-check"></i>Doors: 4
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Horse Power: 310
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Location: Florisa,
                                                                    USA
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Interior Color: Black
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-check"></i>Security
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel"
                                         aria-labelledby="contact-tab">
                                        <div className="accordion accordion-flush" id="accordionFlushExample3">
                                            <div className="accordion-item">
                                                <div className="features-info mb-40">
                                                    <h3 className="heading-2">Features</h3>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul>
                                                                <li>
                                                                    Adaptive Cruise Control
                                                                </li>
                                                                <li>
                                                                    Airbags
                                                                </li>
                                                                <li>
                                                                    Air Conditioning
                                                                </li>
                                                                <li>
                                                                    Alarm System
                                                                </li>
                                                                <li>
                                                                    Anti-theft Protection
                                                                </li>
                                                                <li>
                                                                    Audio Interface
                                                                </li>
                                                                <li>
                                                                    Automatic Climate Control
                                                                </li>
                                                                <li>
                                                                    Automatic Headlights
                                                                </li>
                                                                <li>
                                                                    Auto Start/Stop
                                                                </li>
                                                                <li>
                                                                    Bi-Xenon Headlights
                                                                </li>
                                                                <li>
                                                                    Audio Interface
                                                                </li>
                                                                <li>
                                                                    Bluetooth Handset
                                                                </li>
                                                                <li>
                                                                    BOSE Surround Sound
                                                                </li>
                                                                <li>
                                                                    Burmester Surround Sound
                                                                </li>
                                                                <li>
                                                                    CD/DVD Autochanger
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul>
                                                                <li>
                                                                    CDR Audio
                                                                </li>
                                                                <li>
                                                                    Cruise Control
                                                                </li>
                                                                <li>
                                                                    Direct Fuel Injection
                                                                </li>
                                                                <li>
                                                                    Electric Parking Brake
                                                                </li>
                                                                <li>
                                                                    Floor Mats
                                                                </li>
                                                                <li>
                                                                    Garage Door Opener
                                                                </li>
                                                                <li>
                                                                    Leather Package
                                                                </li>
                                                                <li>
                                                                    Locking Rear Differential
                                                                </li>
                                                                <li>
                                                                    Luggage Compartments
                                                                </li>
                                                                <li>
                                                                    Manual Transmission
                                                                </li>
                                                                <li>
                                                                    Navigation Module
                                                                </li>
                                                                <li>
                                                                    Online Services
                                                                </li>
                                                                <li>
                                                                    ParkAssist
                                                                </li>
                                                                <li>
                                                                    Porsche Communication
                                                                </li>
                                                                <li>
                                                                    CD/DVD Autochanger
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <ul>
                                                                <li>
                                                                    Power Steering
                                                                </li>
                                                                <li>
                                                                    Reversing Camera
                                                                </li>
                                                                <li>
                                                                    Roll-over Protection
                                                                </li>
                                                                <li>
                                                                    Seat Heating
                                                                </li>
                                                                <li>
                                                                    Seat Ventilation
                                                                </li>
                                                                <li>
                                                                    Sound Package Plus
                                                                </li>
                                                                <li>
                                                                    Sport Chrono Package
                                                                </li>
                                                                <li>
                                                                    Steering Wheel Heating
                                                                </li>
                                                                <li>
                                                                    Tire Pressure Monitoring
                                                                </li>
                                                                <li>
                                                                    Universal Audio Interface
                                                                </li>
                                                                <li>
                                                                    Voice Control System
                                                                </li>
                                                                <li>
                                                                    Wind Deflector
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-4" role="tabpanel"
                                         aria-labelledby="contact-tab-4">
                                        <div className="accordion accordion-flush" id="accordionFlushExample4">
                                            <div className="accordion-item">
                                                <div className="related-car mb-20">
                                                    <h3 className="heading-2">Related Car</h3>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="car-box-3">
                                                                <div className="car-thumbnail">
                                                                    <a href="car-details.html" className="car-img">
                                                                        <div className="tag-2 bg-active">Featured</div>
                                                                        <div className="price-box-2">
                                                                            <sup>$</sup>800<span>/month</span></div>
                                                                        <img className="d-block w-100"
                                                                             src="img/car/car-5.png" alt="car"/>
                                                                    </a>
                                                                    <div className="carbox-overlap-wrapper">
                                                                        <div className="overlap-box">
                                                                            <div className="overlap-btns-area">
                                                                                <a className="overlap-btn"
                                                                                   data-bs-toggle="modal"
                                                                                   data-bs-target="#carOverviewModal">
                                                                                    <i className="fa fa-eye-slash"></i>
                                                                                </a>
                                                                                <a className="overlap-btn wishlist-btn">
                                                                                    <i className="fa fa-heart-o"></i>
                                                                                </a>
                                                                                <a className="overlap-btn compare-btn">
                                                                                    <i className="fa fa-balance-scale"></i>
                                                                                </a>
                                                                                <div className="car-magnify-gallery">
                                                                                    <a href="img/car/car-5.png"
                                                                                       className="overlap-btn"
                                                                                       data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <i className="fa fa-expand"></i>
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-5.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-2.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-2.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-3.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-3.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-4.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-4.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-1.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-1.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="detail">
                                                                    <h1 className="title">
                                                                        <a href="car-details.html">Hyundai Santa</a>
                                                                    </h1>
                                                                    <div className="location">
                                                                        <a href="car-details.html">
                                                                            <i className="flaticon-pin"></i>123 Kathal
                                                                            St. Tampa City,
                                                                        </a>
                                                                    </div>
                                                                    <ul className="facilities-list clearfix">
                                                                        <li>
                                                                            <i className="flaticon-way"></i> 4,000 km
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-manual-transmission"></i> Manual
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-calendar-1"></i> 2021
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-fuel"></i> Petrol
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-car"></i> Sport
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-gear"></i> Blue
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="car-box-3">
                                                                <div className="car-thumbnail">
                                                                    <a href="car-details.html" className="car-img">
                                                                        <div className="tag-2">For Sale</div>
                                                                        <div className="price-box-2">
                                                                            <sup>$</sup>780<span>/month</span></div>
                                                                        <img className="d-block w-100"
                                                                             src="img/car/car-1.png" alt="car"/>
                                                                    </a>
                                                                    <div className="carbox-overlap-wrapper">
                                                                        <div className="overlap-box">
                                                                            <div className="overlap-btns-area">
                                                                                <a className="overlap-btn"
                                                                                   data-bs-toggle="modal"
                                                                                   data-bs-target="#carOverviewModal">
                                                                                    <i className="fa fa-eye-slash"></i>
                                                                                </a>
                                                                                <a className="overlap-btn wishlist-btn">
                                                                                    <i className="fa fa-heart-o"></i>
                                                                                </a>
                                                                                <a className="overlap-btn compare-btn">
                                                                                    <i className="fa fa-balance-scale"></i>
                                                                                </a>
                                                                                <div className="car-magnify-gallery">
                                                                                    <a href="img/car/car-1.png"
                                                                                       className="overlap-btn"
                                                                                       data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <i className="fa fa-expand"></i>
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-1.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-2.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-2.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-3.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-3.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-4.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-4.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                    <a href="img/car/car-5.png"
                                                                                       className="hidden"
                                                                                       data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                                        <img className="hidden"
                                                                                             src="img/car/car-5.png"
                                                                                             alt="hidden-img"/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="detail">
                                                                    <h1 className="title">
                                                                        <a href="car-details.html">Toyota Prius</a>
                                                                    </h1>
                                                                    <div className="location">
                                                                        <a href="car-details.html">
                                                                            <i className="flaticon-pin"></i>123 Kathal
                                                                            St. Tampa City,
                                                                        </a>
                                                                    </div>
                                                                    <ul className="facilities-list clearfix">
                                                                        <li>
                                                                            <i className="flaticon-way"></i> 4,000 km
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-manual-transmission"></i> Manual
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-calendar-1"></i> 2021
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-fuel"></i> Petrol
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-car"></i> Sport
                                                                        </li>
                                                                        <li>
                                                                            <i className="flaticon-gear"></i> Blue
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-5" role="tabpanel"
                                         aria-labelledby="contact-tab-5">
                                        <div className="accordion accordion-flush" id="accordionFlushExample5">
                                            <div className="accordion-item">
                                                <div className="location mb-50">
                                                    <div className="map">
                                                        <h3 className="heading-2">Location</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-6" role="tabpanel"
                                         aria-labelledby="contact-tab-6">
                                        <div className="accordion accordion-flush" id="accordionFlushExample6">
                                            <div className="accordion-item">
                                                <div className="inside-car mb-50">
                                                    <h3 className="heading-2">
                                                        Video
                                                    </h3>
                                                    <iframe src="https://www.youtube.com/embed/V7IrnC9MISU"
                                                            allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search d-none d-xl-block d-lg-block">
                                <h3 className="sidebar-title">Booking This Car</h3>
                                <ul>
                                    <li>
                                        <span>Make</span>Ferrari
                                    </li>
                                    <li>
                                        <span>Model</span>Maxima
                                    </li>
                                    <li>
                                        <span>Body Style</span>Convertible
                                    </li>
                                    <li>
                                        <span>Year</span>2017
                                    </li>
                                    <li>
                                        <span>Condition</span>Brand New
                                    </li>
                                    <li>
                                        <span>Mileage</span>34,000 mi
                                    </li>
                                    <li>
                                        <span>Interior Color</span>Dark Grey
                                    </li>
                                    <li>
                                        <span>Transmission</span>6-speed Manual
                                    </li>
                                    <li>
                                        <span>Engine</span>3.4L Mid-Engine V6
                                    </li>
                                    <li>
                                        <span>No. of Gears:</span>5
                                    </li>
                                    <li>
                                        <span>Location</span>Toronto
                                    </li>
                                    <li>
                                        <span>Fuel Type</span>Gasoline Fuel
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
