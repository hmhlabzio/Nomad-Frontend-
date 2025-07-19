import React, { useState } from 'react';
import CityPreview from './CityPreview';
import MoodHeatmap from './MoodHeatmap';

function CitiesSection() {
  const [feedbackData, setFeedbackData] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbackData(prev => [...prev, feedback]);
  };

  return (
    <div>
      <CityPreview onFeedbackSubmit={handleFeedbackSubmit} />
      <MoodHeatmap feedbackData={feedbackData} />
    </div>
  );
}

export default React.memo(CitiesSection); // Added React.memo