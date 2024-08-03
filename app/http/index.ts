import { Inventory } from "@/app/models/inventory";
import { API_HOST, API_KEY } from "@/app/app-config";
import { Base } from "@/app/models/base";

export async function getInventories(): Promise<Inventory[]> {
    const response = await fetch(`${API_HOST}list/0`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();

}

export async function getAvailableBrands(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/make`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}

export async function getAvailableModels(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/model`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}

export async function getAvailableLocations(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/location`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}

export async function getAvailableYears(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/year`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}

export async function getAvailableCategories(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/category`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}

export async function getAvailablePrices(): Promise<Base[]> {
    const response = await fetch(`${API_HOST}filter/price`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    });
    return await response.json();
}
