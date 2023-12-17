interface Radio {
    id: string;
    name: string;
    url: string;
    country: string;
    countryCode: string;
    tagsList: string[];
}

declare function getRadiosByCountry(country: string, pageSize?: number, offset?: number): Promise<Radio[]>;
declare function getRadiosByName(name: string, pageSize?: number, offset?: number): Promise<Radio[]>;
declare function getRadiosByNameAndCountry(name: string, country: string, pageSize?: number, offset?: number): Promise<Radio[]>;

export { getRadiosByCountry, getRadiosByName, getRadiosByNameAndCountry };
