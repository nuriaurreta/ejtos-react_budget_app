import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (parseInt(newBudgetValue) > 20000) {
            setErrorMessage('The budget cannot exceed £20,000.');
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

export default Budget;
