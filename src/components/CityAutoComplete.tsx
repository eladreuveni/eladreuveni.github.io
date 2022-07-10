import { Autocomplete, TextField } from '@mui/material';

import cities from 'cities.json';

const CityAutoComplete = () => {
    return (
        <>
            <Autocomplete
                id="combo-box-demo"
                dir='rtl'
                value={null}
                disablePortal
                options={cities as { name: string }[]}
                getOptionLabel={c => c.name}
                renderInput={(params) => {
                    console.log('params: ', params);
                    return <TextField {...params} label="Please enter city" />
                }}
                onChange={(_e, v) => { }}
            />
        </>
    )
}

export default CityAutoComplete;