import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const [value, setValue] = useState<'' | 'favorites'>(window.location.pathname === '/favorites' ? 'favorites' : '');

    const navigate = useNavigate();

    const handleChange = (_e: React.SyntheticEvent<Element, Event>, v: '' | 'favorites') => {
        setValue(v);
        navigate(v);
    }

    return (
        <header className='App-header'>
            <div className='header-flex'>
                <h3>Herolo Weather Task</h3>
                <Tabs value={value} onChange={handleChange} style={{ height: '100%', minHeight: 0 }}>
                    <Tab label="Home" value='' style={{ minHeight: 0 }} />
                    <Tab label="Favorites" value='favorites' style={{ minHeight: 0 }} />
                </Tabs>
            </div>
        </header>
    )
}

export default Header;
