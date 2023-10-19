    import React, { useState } from 'react';

    function ROIForm({ onSubmit }) {
    const [searchVolume, setSearchVolume] = useState(0);
    const [ctr, setCtr] = useState(0);
    const [conversionRate, setConversionRate] = useState(0);
    const [averageOrderValue, setAverageOrderValue] = useState(0);
    const [lifeTimeValue, setLifeTimeValue] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting: ", { searchVolume, ctr, conversionRate, averageOrderValue, lifeTimeValue }); // Debug line
        onSubmit({ searchVolume, ctr, conversionRate, averageOrderValue, lifeTimeValue });
    };
    
    

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-md shadow-md">
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">How many searches do you get for business-relevant keywords? (per month)</label>
            <input type="number" value={searchVolume} onChange={(e) => setSearchVolume(Number(e.target.value))} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2">What percentage of the people that search for your keywords click on your website?</label>
            <input type="number" value={ctr} onChange={(e) => setCtr(Number(e.target.value))} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Out of the visitors to your website, what percentage convert into customers?</label>
            <input type="number" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2">What is your average order value?</label>
            <input type="number" value={averageOrderValue} onChange={(e) => setAverageOrderValue(Number(e.target.value))} className="w-full p-2 border rounded-md" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 mb-2">What is the average lifetime value of your customer?</label>
            <input type="number" value={lifeTimeValue} onChange={(e) => setLifeTimeValue(Number(e.target.value))} className="w-full p-2 border rounded-md" />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Calculate ROI</button>
        </form>
    );
    }

    export default ROIForm;
