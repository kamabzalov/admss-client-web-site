import {
    getAvailableBrands,
    getAvailableCategories,
    getAvailableLocations,
    getAvailableModels,
    getAvailablePrices,
    getAvailableYears,
    getInventories
} from "@/app/http";
import { Inventory } from "@/app/models/inventory";
import Link from "next/link";
import InventoriesList from "@/app/components/inventories-list";
import FiltersForm from "@/app/components/ui/filters-form";

export default async function Page({searchParams}: any) {
    let data: Inventory[] = await getInventories();
    const entities = await Promise.all([
        getAvailableBrands(),
        getAvailableModels(),
        getAvailableLocations(),
        getAvailableYears(),
        getAvailableCategories(),
        getAvailablePrices()
    ]);

    if (Object.keys(searchParams).length) {
        data = await getInventories(searchParams);
    }

    return (
        <>
            <div className="search-box-3 content-area">
                <div className="container">
                    <FiltersForm filters={entities}/>
                </div>
            </div>
            {data.length ? <InventoriesList inventories={data}/> : null}
            <div className="advantages-2 content-area bg-grea-3">
                <div className="container">
                    <div className="main-title">
                        <h1 className="mb-10">Our Advantages</h1>
                        <div className="title-border">
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="advantages-box-2 df-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>
                                <div className="detail">
                                    <h5>
                                        Highly Secured
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry standard dummy text ever since the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="advantages-box-2 df-box">
                                <div className="icon">
                                    <i className="flaticon-deal"></i>
                                </div>
                                <div className="detail">
                                    <h5>
                                        Trusted Agents
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industrys standard dummy text ever since the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="advantages-box-2 df-box">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="detail">
                                    <h5>
                                        Get an Offer
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industrys standard dummy text ever since the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="advantages-box-2 df-box">
                                <div className="icon">
                                    <i className="flaticon-support-2"></i>
                                </div>
                                <div className="detail">
                                    <h5>
                                        Free Support
                                    </h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industrys standard dummy text ever since the</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-offers categories content-area-13">
                <div className="container">
                    <div className="main-title text-center">
                        <h1 className="mb-10">Latest Offers</h1>
                        <div className="title-border">
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                        </div>
                    </div>
                    <div className="row row-2">
                        <div className="col-lg-4 col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-lg-12 col-pad">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src="/img/car-4.png"
                                                     alt="photo"/>
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    Toyota Prius specs
                                                </h3>
                                                <h5>$920.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12 col-pad">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src="/img/car-6.png"
                                                     alt="photo"/>
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    Audi Q7 2018
                                                </h3>
                                                <h5>430.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-pad">
                            <div className="latest-offers-box">
                                <div className="photo-overflow">
                                    <div className="car-thumbnail-photo">
                                        <img className="img-fluid w-100" src="/img/car-11.png" alt="photo"/>
                                    </div>
                                </div>
                                <div className="new">New</div>
                                <div className="ling-section">
                                    <div className="lo-text clearfix">
                                        <h3>
                                            Audi 2021
                                        </h3>
                                        <h5>740.00 <span>/monthly</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-pad">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src="/img/car-1.png"
                                                     alt="photo"/>
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    Toyota Prius
                                                </h3>
                                                <h5>410.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12 col-pad">
                                    <div className="latest-offers-box">
                                        <div className="photo-overflow">
                                            <div className="car-thumbnail-photo">
                                                <img className="img-fluid w-100" src="/img/car-2.png"
                                                     alt="photo"/>
                                            </div>
                                        </div>
                                        <div className="new">New</div>
                                        <div className="ling-section">
                                            <div className="lo-text clearfix">
                                                <h3>
                                                    2020 Ford Mustang
                                                </h3>
                                                <h5>920.00 <span>/monthly</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-team content-area bg-grea-3">
                <div className="container">
                    <div className="main-title">
                        <h1 className="mb-10">Our Agent</h1>
                        <div className="title-border">
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="team-3">
                                <div className="thumb">
                                    <img src="/img/avatar-1.png" alt="agent" className="img-fluid"/>
                                </div>
                                <div className="info">
                                    <h5><a href="/">Michelle Nelson</a></h5>
                                    <p>Support Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="team-3">
                                <div className="thumb">
                                    <img src="/img/avatar-2.png" alt="agent" className="img-fluid"/>
                                </div>
                                <div className="info">
                                    <h5><a href="/">Martin Smith</a></h5>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="team-3">
                                <div className="thumb">
                                    <img src="/img/avatar-3.png" alt="agent" className="img-fluid"/>

                                </div>
                                <div className="info">
                                    <h5><a href="agent.html">Carolyn Stone</a></h5>
                                    <p>Creative Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="team-3">
                                <div className="thumb">
                                    <img src="/img/avatar-4.png" alt="agent" className="img-fluid"/>
                                </div>
                                <div className="info">
                                    <h5><a href="/">Brandon Miller</a></h5>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-section">
                <div className="intro-section-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-8 col-sm-12">
                                <div className="intro-text">
                                    <h3>Do You Have Questions ?</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <Link href="/contacts" className="btn btn-md">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
