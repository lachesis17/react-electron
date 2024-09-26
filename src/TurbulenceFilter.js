import React from 'react';

const TurbulenceFilter = () => (
  <defs>
    <filter id={`turbulenceFilter`}>
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence">
        <animate
          attributeName="baseFrequency"
          dur="7s"
          keyTimes="0; 0.5; 1"
          values="0.00 0.00; 0.9 0.9; 0.00 0.00"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
);

export default TurbulenceFilter;