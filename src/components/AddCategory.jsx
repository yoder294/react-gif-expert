import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue] = useState('');

    const onInputChange = ({ target}) => { 
        setInputValue(target.value);
    };

    const onSubmit = (event) => { 
        event.preventDefault();
        
        const input = inputValue.trim();
        if (input.length <= 1) return; 

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(input);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            inputMode="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
};