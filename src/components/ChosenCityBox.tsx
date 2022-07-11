import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCityPhotos } from "../store/data/dataSlice";
import { fiveDaysWeatherData } from "../consts";
import { addLSFavorite, isCityFavorite, removeLSFavorite } from "../utils/local-storage";
import CityCard from "./CityCard";

import './ChosenCityBox.scss';

const ChosenCityBox = () => {
    const dispatch = useAppDispatch();
    const photos = useAppSelector(state => state.data.searchPhotos);
    const [isFavorite, setIsFavorite] = useState(isCityFavorite('tel aviv'));
    console.log('isFavorite: ', isFavorite);

    const toggleFavorite = () => {
        setIsFavorite(prev => {
            const newValue = !prev;
            newValue ? addLSFavorite('tel aviv') : removeLSFavorite('tel aviv');
            return newValue;
        })
    };


    useEffect(() => {
        dispatch(fetchCityPhotos('tel aviv'));
    }, [])

    return (
        <Box className="five-days-container">
            <div className="top-line">
                <div className="top-left">
                    <img className="city-img" src={photos[0]?.largeImageURL} alt={"tel avivvvv"} />
                    <div className="name-temp">
                        <h3>{"Tela viva"}</h3>
                        <span>{"33 c"}</span>
                    </div>
                </div>
                <div className="top-right">
                    <div onClick={toggleFavorite} className={`heart ${isFavorite ? 'check' : 'un-check'}`}></div>
                    <Button sx={{ height: '4vh', width: '15rem', marginTop: '13px' }} variant={isFavorite ? 'contained' : 'outlined'} onClick={toggleFavorite}>
                        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    </Button>
                </div>
            </div>
            <h2 className="title">Scattered Clouds</h2>
            <div className="five-cards-container">
                {fiveDaysWeatherData.map((d, i) => <CityCard key={d.day} dayData={{ ...d, pic: photos[i + 1]?.largeImageURL }} />)}
            </div>
        </Box >
    )
}

export default ChosenCityBox;
