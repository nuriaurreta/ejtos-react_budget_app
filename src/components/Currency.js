import React, { useContext, } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="currencySelect">Currency: </label>
            <select id="currencySelect" value={currency} onChange={handleCurrencyChange} className="currency-select" style={dropdownStyle}>
                <option value="$" className="option">Dollar ($)</option>
                <option value="£" className="option">Pound (£)</option>
                <option value="€" className="option">Euro (€)</option>
                <option value="₹" className="option">Rupee (₹)</option>
            </select>
        </div>
    );
};

const dropdownStyle = {
    padding: '2px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    minWidth: '130px',
    marginTop: '2px',
};

export default Currency;