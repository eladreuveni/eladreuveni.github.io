import axios from "axios";

export const fetchPhotos = async (city: string) => {
    const API_KEY = '28531388-3a83e7851836cf7a6b68f656f';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(city)}&per_page=6`;
    const res = await axios.get(URL);
    return res.data.hits;
}

export const getLocations = async () => {

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/search.json',
        params: { q: 'Paris' },
        headers: {
            'X-RapidAPI-Key': 'f48e2746b2msh8c662e7d8cf7b14p1c8442jsnca444c633ed0',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}