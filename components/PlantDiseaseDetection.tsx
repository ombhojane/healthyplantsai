import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

function PlantDiseaseDetection() {
  const [image, setImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<any[] | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      // Perform a POST request to your model endpoint to get predictions
      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Plant Disease Detection</h1>
  
      <div className="border-2 border-dashed border-gray-300 rounded p-16 flex flex-col items-center justify-center">
        <p className="mb-4 text-gray-400">
          <span className="font-bold">Upload an image</span> of a plant leaf showing symptoms
        </p>
        
        <label className="btn bg-green-500 text-white">
          Upload Image
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden" 
          />
        </label>
        
      </div>
      
      <Button 
        className="mt-4"
        onClick={handleSubmit}
      >
        Predict Disease
      </Button>
  
    </div>
  )
}

export default PlantDiseaseDetection;
