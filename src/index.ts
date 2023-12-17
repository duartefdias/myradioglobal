import { Radio } from "./interfaces/Radio";
import axios, { AxiosError } from 'axios';

// Get the subscription key from the environment variables
// If you don't have a subscription key, please visit https://www.npmjs.com/package/myradioglobal?activeTab=readme#:~:text=Create%20access%20request to request one.
const subscriptionKey = process.env.MYRADIOGLOBAL_SUBSCRIPTION_KEY;

const axiosClient = axios.create({
    baseURL: 'https://api.myradioglobal.com',
    timeout: 15000,
    headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Content-Type": "application/json"
    }
  });

function checkSubscriptionKey() {
    if (!subscriptionKey) {
        throw new Error("MYRADIOGLOBAL_SUBSCRIPTION_KEY environment variable is not set, please add it to your environment variables. If you don't have a subscription key, please visit https://www.npmjs.com/package/myradioglobal?activeTab=readme#:~:text=Create%20access%20request to request one.");
    }
}

export async function getRadiosByCountry(country: string, pageSize?: number, offset?: number): Promise<Radio[]> {
    checkSubscriptionKey();
    const url = `/getRadios?country=${country}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
        const response = await axiosClient.get(url);
        return (response.data as Radio[]);
    }
    catch (error: AxiosError | any) {
        throw error;
    }
}

export async function getRadiosByName(name: string, pageSize?: number, offset?: number): Promise<Radio[]> {
    checkSubscriptionKey();
    const url = `/getRadios?textInput=${name}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
        const response = await axiosClient.get(url);
        return (response.data as Radio[]);
    }
    catch (error: AxiosError | any) {
        throw error;
    }
}

export async function getRadiosByNameAndCountry(name: string, country: string, pageSize?: number, offset?: number): Promise<Radio[]> {
    checkSubscriptionKey();
    const url = `/getRadios?textInput=${name}&country=${country}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
        const response = await axiosClient.get(url);
        return (response.data as Radio[]);
    }
    catch (error: AxiosError | any) {
        throw error;
    }
}
