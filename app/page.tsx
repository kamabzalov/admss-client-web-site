import { API_HOST, API_KEY } from "@/app/app-config";
import { Inventory } from "@/app/models/inventory";

async function getData() {
    const response = await fetch(`${API_HOST}list/0`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();

}

export default async function Page() {
    const data: Inventory[] = await getData();
    return (
        <>
            <div className="search-box-3 content-area">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select search-fields">
                                        <select className="selectpicker search-fields" name="select-brand">
                                            <option>Select Brand</option>
                                            <option>Audi</option>
                                            <option>BMW</option>
                                            <option>Honda</option>
                                            <option>Nissan</option>
                                        </select>
                                        <button type="button" className="btn dropdown-toggle btn-light"
                                                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2"
                                                aria-haspopup="listbox" aria-expanded="false" title="Select Make">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Brand</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show" role="listbox" id="bs-select-2"
                                                 aria-activedescendant="bs-select-2-0">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                    <li className="selected active">
                                                        <a
                                                            className="dropdown-item active selected"
                                                            id="bs-select-2-0">
                                                            <span
                                                                className="text">Select Make</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" id="bs-select-2-1"><span
                                                            className="text">BMW</span></a>
                                                    </li>
                                                    <li><a className="dropdown-item" id="bs-select-2-2"
                                                    ><span
                                                        className="text">Honda</span></a></li>
                                                    <li>
                                                        <a className="dropdown-item" id="bs-select-2-3"
                                                        ><span
                                                            className="text">Lamborghini</span></a></li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                           id="bs-select-2-4"><span
                                                            className="text">Sports Car</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select search-fields"><select
                                        className="selectpicker search-fields" name="select-make">
                                        <option>Select Make</option>
                                        <option>BMW</option>
                                        <option>Honda</option>
                                        <option>Lamborghini</option>
                                        <option>Sports Car</option>
                                    </select>
                                        <button type="button" className="btn dropdown-toggle btn-light"
                                                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2"
                                                aria-haspopup="listbox" aria-expanded="false" title="Select Make">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Make</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show" role="listbox" id="bs-select-2"
                                                 aria-activedescendant="bs-select-2-0">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                    <li className="selected active">
                                                        <a
                                                            className="dropdown-item active selected"
                                                            id="bs-select-2-0"
                                                        ><span
                                                            className="text">Select Make</span></a></li>
                                                    <li>
                                                        <a className="dropdown-item" id="bs-select-2-1"
                                                        ><span
                                                            className="text">BMW</span></a></li>
                                                    <li><a role="option" className="dropdown-item" id="bs-select-2-2"
                                                    ><span
                                                        className="text">Honda</span></a></li>
                                                    <li>
                                                        <a className="dropdown-item" id="bs-select-2-3"
                                                        ><span
                                                            className="text">Lamborghini</span></a></li>
                                                    <li>
                                                        <a className="dropdown-item"
                                                           id="bs-select-2-4"><span
                                                            className="text">Sports Car</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select search-fields"><select
                                        className="selectpicker search-fields" name="select-location">
                                        <option>Select Location</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                    </select>
                                        <button type="button" className="btn dropdown-toggle btn-light"
                                                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3"
                                                aria-haspopup="listbox" aria-expanded="false" title="Select Location">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Location</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="inner show" role="listbox" id="bs-select-3"
                                                 aria-activedescendant="bs-select-3-0">
                                                <ul className="dropdown-menu inner show" role="presentation">
                                                    <li className="selected active">
                                                        <a
                                                            className="dropdown-item active selected"
                                                            id="bs-select-3-0"
                                                            aria-selected="true"><span
                                                            className="text">Select Location</span></a></li>
                                                    <li><a className="dropdown-item" id="bs-select-3-1"
                                                    ><span className="text">United States</span></a>
                                                    </li>
                                                    <li><a className="dropdown-item" id="bs-select-3-2"
                                                    ><span className="text">United Kingdom</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select search-fields"><select
                                        className="selectpicker search-fields" name="select-year">
                                        <option>Select Year</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option>2021</option>
                                    </select>
                                        <button type="button" className="btn dropdown-toggle btn-light"
                                                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-4"
                                                aria-haspopup="listbox" aria-expanded="false" title="Select Year">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Year</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-4">
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="dropdown bootstrap-select search-fields"><select
                                        className="selectpicker search-fields" name="select-type">
                                        <option>Select Type Of Car</option>
                                        <option>New Car</option>
                                        <option>Used Car</option>
                                    </select>
                                        <button type="button" className="btn dropdown-toggle btn-light"
                                                data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-5"
                                                aria-haspopup="listbox" aria-expanded="false"
                                                title="Select Type Of Car">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Select Type Of Car</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-5">
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <select className="selectpicker search-fields" name="transmission">
                                        <option>Transmission</option>
                                        <option>Automatic</option>
                                        <option>Manual</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <div className="range-slider">
                                        <div data-min="0" data-max="150000" data-unit="USD" data-min-name="min_price"
                                             data-max-name="max_price"
                                             className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                                             aria-disabled="false"><span className="min-value">0 USD</span> <span
                                            className="max-value">150000 USD</span><input className="current-min"
                                                                                          type="hidden" name="min_price"
                                                                                          value="0"/><input
                                            className="current-max" type="hidden" name="max_price" value="150000"/>
                                            <div className="ui-slider-range ui-widget-header ui-corner-all"
                                            ></div>
                                            <a className="ui-slider-handle ui-state-default ui-corner-all" href="#"
                                            ></a><a
                                                className="ui-slider-handle ui-state-default ui-corner-all" href="#"
                                            ></a></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="form-group">
                                    <button className="btn w-100 button-theme btn-md">
                                        <i className="fa fa-search"></i>Find
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="featured-car">
                <div className="container">
                    <div className="main-title">
                        <h1 className="mb-10">Featured Cars</h1>
                        <div className="title-border">
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                            <div className="title-border-inner"></div>
                        </div>
                    </div>
                    <div className="row">
                        {data.map((inventory) => {
                            return (
                                <div key={inventory.itemuid} className="col-lg-4 col-md-6">
                                    <div className="car-box-3">
                                        <div className="car-thumbnail">
                                            <a href="#" className="car-img">
                                                <div className="tag-2 bg-active">Featured</div>
                                                <div className="price-box-2"><sup>$</sup>800<span>/month</span></div>
                                            </a>
                                            <div className="carbox-overlap-wrapper">
                                                <div className="overlap-box">
                                                    <div className="overlap-btns-area">
                                                        <a className="overlap-btn" data-bs-toggle="modal"
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
                                                            <a href="#" className="overlap-btn"
                                                               data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                <i className="fa fa-expand"></i>
                                                                <img className="hidden" src="#" alt="hidden-img"/>
                                                            </a>
                                                            <a href="#" className="hidden"
                                                               data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                <img className="hidden" src="#" alt="hidden-img"/>
                                                            </a>
                                                            <a href="#" className="hidden"
                                                               data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                <img className="hidden" src="#" alt="hidden-img"/>
                                                            </a>
                                                            <a href="#" className="hidden"
                                                               data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                <img className="hidden" src="#" alt="hidden-img"/>
                                                            </a>
                                                            <a href="#" className="hidden"
                                                               data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>">
                                                                <img className="hidden" src="#" alt="hidden-img"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <h1 className="title">
                                                <a href="#">{inventory.Make} {inventory.Model}</a>
                                            </h1>
                                            <div className="location">
                                                <a href="#">
                                                    <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
                                                </a>
                                            </div>
                                            <ul className="facilities-list clearfix">
                                                <li>
                                                    <i className="flaticon-way"></i> {inventory.mileage} miles
                                                </li>
                                                <li>
                                                    <i className="flaticon-manual-transmission"></i> {inventory.Transmission}
                                                </li>
                                                <li>
                                                    <i className="flaticon-calendar-1"></i> 2021
                                                </li>
                                                <li>
                                                    <i className="flaticon-fuel"></i> {inventory.TypeOfFuel}
                                                </li>
                                                <li>
                                                    <i className="flaticon-car"></i> Sport
                                                </li>
                                                <li>
                                                    <i className="flaticon-gear"></i> {inventory.ExteriorColor}
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
                                        <a href="services.html">Highly Secured</a>
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
                                        <a href="services.html">Trusted Agents</a>
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
                                        <a href="services.html">Get an Offer</a>
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
                                        <a href="/">Free Support</a>
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
                                                    <a href="car-details.html">Toyota Prius specs</a>
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
                                                    <a href="car-details.html">Audi Q7 2018</a>
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
                                            <a href="car-details.html">Audi 2021</a>
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
                                                    <a href="car-details.html">Toyota Prius</a>
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
                                                    <a href="/">2020 Ford Mustang</a>
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
                                    <ul>
                                        <li>
                                            <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="google-bg"><i className="fa fa-google"></i></a>
                                        </li>
                                    </ul>
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
                                    <ul>
                                        <li>
                                            <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="google-bg"><i className="fa fa-google"></i></a>
                                        </li>
                                    </ul>
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
                                    <ul>
                                        <li>
                                            <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="google-bg"><i className="fa fa-google"></i></a>
                                        </li>
                                    </ul>
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
                                    <ul>
                                        <li>
                                            <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="google-bg"><i className="fa fa-google"></i></a>
                                        </li>
                                    </ul>
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
                                <a href="/contacts" className="btn btn-md">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
