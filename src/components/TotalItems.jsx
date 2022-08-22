import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {
    const totalItem = useSelector((state) => state.totalItem);
    return (
        <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold">
                <p>Total Item</p>
                <p class="text-5xl">{totalItem}</p>
            </div>
        </div>
    );
};

export default TotalItems;