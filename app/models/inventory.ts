import { Media } from "@/app/models/media";

export interface Inventory {
    BodyStyle: string;
    Category: string;
    CityMPG: string;
    CostPrice: number;
    Cylinders: string;
    DealerCertified: number;
    DealerComments: string;
    DriveLine: string;
    Engine: string;
    ExteriorColor: string;
    ExtraField1: string;
    ExtraField2: string;
    ExtraField3: string;
    ExtraPrice1: number;
    ExtraPrice2: number;
    ExtraPrice3: number;
    FactoryCertified: number;
    GroupClass: string;
    GroupClassName: string;
    HwyMPG: string;
    InStockDate: string;
    InteriorColor: string;
    LastExportDate: Date;
    LastModifiedDate: string;
    ListPrice: number;
    locationname: string;
    Make: string;
    Model: string;
    ModelCode: string;
    Notes: string;
    Options: number;
    PhotoURL: string;
    Price: number;
    SpecialPrice: number;
    Status: string;
    StockNo: string;
    Transmission: string;
    TypeOfFuel: string;
    VDPLink: string;
    VIN: string;
    VideoURL: string;
    Year: string;
    created: Date;
    deleted: string;
    enabled: number;
    itemuid: string;
    mileage: number;
    name: string;
    logo: string;
    options_codes: string[];
    options_info: string[];
    updated: Date;
    useruid: string;
    media: Array<Media>;
}

