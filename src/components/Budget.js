import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (parseInt(newBudgetValue) < getTotalExpenses(expenses)) {
            setErrorMessage('Budget cannot be lower than total expenses.');
        } else {
            setErrorMessage('');
            setNewBudget(newBudgetValue);
        }
    };

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div>
            <div className='alert alert-secondary'>
                <span>Budget: {currency}</span>
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                />
                {errorMessage && (
                    <div className="alert alert-danger mt-2" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>
            <div className='mt-2'>
                <label htmlFor="currencySelect">Select Currency: </label>
                <select id="currencySelect" value={currency} onChange={handleCurrencyChange}>
                    <option value="$">Dollar ($)</option>
                    <option value="£">Pound (£)</option>
                    <option value="€">Euro (€)</option>
                    <option value="₹">Rupee (₹)</option>
                </select>
            </div>
        </div>
    );
};

const getTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);
};

export default Budget;
