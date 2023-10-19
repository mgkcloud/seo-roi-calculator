import React from 'react';

function ResultDisplay({ searchVolume, ctr, conversionRate, averageOrderValue, lifeTimeValue }) {
    console.log("Received Props: ", { searchVolume, ctr, conversionRate, averageOrderValue, lifeTimeValue }); // Debug line

  
  // Initialize calculation variables
  const visitors = searchVolume * (ctr / 100);
  const conversions = visitors * (conversionRate / 100);
  const netRevenueMonthly = conversions * averageOrderValue;
  const totalLifetimeValue = conversions * lifeTimeValue;
  const monthlyROI = totalLifetimeValue; // Assuming monthlyROI is equivalent to totalLifetimeValue


    const safeVisitors = isNaN(visitors) ? 0 : visitors;
  const safeConversions = isNaN(conversions) ? 0 : conversions;
  const safeNetRevenueMonthly = isNaN(netRevenueMonthly) ? 0 : netRevenueMonthly;
  const safeTotalLifetimeValue = isNaN(totalLifetimeValue) ? 0 : totalLifetimeValue;
  const safeMonthlyROI = isNaN(monthlyROI) ? 0 : monthlyROI;

  console.log("Calculated Values: ", { visitors, conversions }); // Debug line

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <div className="mb-4">
        <h2 className="font-bold text-lg">Based on these numbers, here is what you could expect for return on investment*</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>Visitors:</strong> {Math.round(safeVisitors)}</p>
        <p><strong>Conversions:</strong> {Math.round(safeConversions)}</p>
        <p><strong>Net Revenue (Monthly):</strong> ${safeNetRevenueMonthly.toFixed(2)}</p>
        <p><strong>Total Lifetime Value:</strong> ${safeTotalLifetimeValue.toFixed(2)}</p>
        <p><strong>Monthly ROI:</strong> ${safeMonthlyROI.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ResultDisplay;
