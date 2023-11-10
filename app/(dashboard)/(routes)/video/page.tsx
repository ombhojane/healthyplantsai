"use client";
import { ArrowRight, LeafIcon, LeafyGreen } from "lucide-react";

import { Heading } from "@/components/heading";



import React from 'react';


const Remedies = () => {


return ( 
  <div>
    <Heading
      title="Remedies and Treatment"
      description=""
      icon={LeafyGreen}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
    />
     
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh' }}>
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      {/* Iframe Option */}
      <iframe
        src="https://plantremedies.streamlit.app/?embed=true"
        frameBorder="0"
        style={{ width: '100%', height: '600px' }}
      ></iframe>

    </div>
  </div>

    </div>
  
 );

};

 export default Remedies;