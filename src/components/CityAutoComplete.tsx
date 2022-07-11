import { Autocomplete, TextField } from '@mui/material';
import { clearCitiesPool, getCitiesAutoComplete } from '../store/data/dataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import cities from 'cities-list'
const citiesPool = Object.keys(cities);

const CityAutoComplete = () => {
    const dispatch = useAppDispatch();
    return (
        <>
            <Autocomplete
                id="combo-box-demo"
                dir='rtl'
                value={null}
                disablePortal
                options={citiesPool}
                getOptionLabel={c => c}
                renderInput={(params) => {
                    return <TextField {...params} label="Please enter city" />
                }}
                onInputChange={(_e, v) => {
                    if (v.length >= 3) {
                        dispatch(getCitiesAutoComplete(v));
                    }
                    else {
                        dispatch(clearCitiesPool());
                    }
                }}
            />
        </>
    )
}

export default CityAutoComplete;