export default function Page() {
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
                        <div className="col-lg-4 col-md-6">
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
                                        <a href="#">Hyundai Santa</a>
                                    </h1>
                                    <div className="location">
                                        <a href="#">
                                            <i className="flaticon-pin"></i>123 Kathal St. Tampa City,
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
        </>
    );
}
