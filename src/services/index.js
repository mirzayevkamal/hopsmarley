import axios from "axios";

const URL = 'https://api.openbrewerydb.org/breweries/';

//Get Breweries by keyword
export const getBreweries = async (keyword) => {
    try {
        const result = await axios.get(`${URL}search?query=${keyword}`, {
            method: 'GET',
        });

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

//Get brewery info by ID
export const getBreweryInfo = async (id) => {
    try {
        const result = await axios.get(`${URL}${id}`, {
            method: 'GET',
        });

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};