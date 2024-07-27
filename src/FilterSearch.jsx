import React, { useState } from 'react';

function FilterSearch() {
    const Fruitdata = [
        "apple",
        "banana",
        "cherry",
        "date",
        "elderberry",
        "fig",
        "grape",
        "honeydew",
        "kiwi",
        "lemon",
        "mango",
        "nectarine",
        "orange",
        "papaya",
        "quince"
    ];

    const [searchquery, setsearchquery] = useState('');

   const handlechange =(event)=>{
    setsearchquery(event.target.value)
   }

    const filterResult = Fruitdata.filter(fruit => fruit.toLocaleLowerCase().includes(searchquery.toLocaleLowerCase()))

    return (
        <div>
            <input
                type='text'
                placeholder='search here ..'
                value={searchquery}
                onChange={handlechange}
            />
            <ul>
                {filterResult.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default FilterSearch;
