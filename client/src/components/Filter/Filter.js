import React from "react";
import "./filter.css";

const Filter = ({ filters, setFilters, filterData }) => {
    const handleChange = (e) => {
        if (e.keyCode === 13) {
            let text = e.target.value;
            if (!filters) setFilters([text]);
            else {
                if (!filters.includes(text)) setFilters([...filters, text]);
            }
            filterData();
        }
    };
    return (
        <div className='filter'>
            <input
                type='text'
                name='filter'
                className='filter-input'
                placeholder='Enter your filter here'
                onKeyDown={handleChange}
            ></input>
            <br />
        </div>
    );
};

export default Filter;
