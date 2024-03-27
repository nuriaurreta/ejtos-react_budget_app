import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
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

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
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
    );
};

const getTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);
};

export default Budget;
