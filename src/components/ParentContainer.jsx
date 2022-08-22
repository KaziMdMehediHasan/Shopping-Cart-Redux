import React from 'react';
import Dell from './Dell';
import VivoBook from './VivoBook';
import Canon from './Canon';
import VivoRight from './VivoRight';
import DellRight from './DellRight';
import CanonRight from './CanonRight';
import TotalItems from './TotalItems';
import TotalPrice from './TotalPrice';

const ParentContainer = () => {
    return (
        <div class="bg-gray-50 h-full md:h-screen">
            {/* heading section */}
            <div class="grid place-items-center">
                <h1
                    class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                    Shopping Cart
                </h1>
            </div>
            {/* end of heading section */}

            <div class="grid grid-cols-12 gap-6">
                {/* left side cart */}
                <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
                    <VivoBook />
                    <Dell />
                    <Canon />
                </div>
                {/*end of left side cart */}
                {/* Right Side Items  */}
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                        <VivoRight />
                        <DellRight />
                        <CanonRight />
                    </div>
                    <TotalItems />
                    <TotalPrice />
                </div>
                {/* end of right side items */}
            </div>

        </div>
    );
};

export default ParentContainer;