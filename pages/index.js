import React, { useState } from 'react';
import ROIForm from '../components/ROIForm';
import ResultDisplay from '../components/ResultDisplay';

export default function Home() {
  // Added state variables to hold individual form data
  const [searchVolume, setSearchVolume] = useState(0);
  const [ctr, setCtr] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [averageOrderValue, setAverageOrderValue] = useState(0);
  const [lifeTimeValue, setLifeTimeValue] = useState(0);
  const [roi, setRoi] = useState(null);

  const calculateRoi = async (formData) => {
    console.log("Data received in calculateRoi:", formData); // Debug line
    
    // Destructure form data
    const { searchVolume, ctr, conversionRate, averageOrderValue, lifeTimeValue } = formData;

    // Update state variables
    setSearchVolume(searchVolume);
    setCtr(ctr);
    setConversionRate(conversionRate);
    setAverageOrderValue(averageOrderValue);
    setLifeTimeValue(lifeTimeValue);

    // Perform calculations
    const conversions = searchVolume * (ctr / 100) * (conversionRate / 100);
    const revenue = conversions * averageOrderValue;
    const calculatedRoi = revenue !== 0 ? (revenue / searchVolume) * 100 : 0;

    if (isNaN(calculatedRoi)) {
      console.log("calculatedRoi is NaN");
    }

    setRoi(calculatedRoi);
  };

  return (
    <div>
      <h1>SEO ROI Calculator</h1>
      <ROIForm onSubmit={calculateRoi} />
      {/* Pass all necessary props to ResultDisplay */}
      {roi !== null && 
        <ResultDisplay 
          roi={roi} 
          searchVolume={searchVolume} 
          ctr={ctr} 
          conversionRate={conversionRate} 
          averageOrderValue={averageOrderValue} 
          lifeTimeValue={lifeTimeValue} 
        />}
    </div>
  );
}
