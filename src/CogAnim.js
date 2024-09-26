//import React, {useState} from 'react';
import React from 'react';
import TurbulenceFilter from './TurbulenceFilter';
import cog1 from './cog1.svg';
import cog2 from './cog2.svg';
import cog3 from './cog3.svg';
import cog4 from './cog4.svg';

const cogData = [
  { id: '1', svgClass: 'cog1', imgSrc: cog1 },
  { id: '2', svgClass: 'cog2', imgSrc: cog2 },
  { id: '3', svgClass: 'cog3', imgSrc: cog3 },
  { id: '4', svgClass: 'cog4', imgSrc: cog4 },
];

const CogAnim = () => (
    // const [x, placeholder] = useState(''); // local state to update on something
    
  <div className="App">
    <a href="https://github.com/lachesis17/React-Cog-Animation">
      <header className="App-header">
        {cogData.map(({ id, svgClass, imgSrc }) => (
          <div className={`cog-wrapper cog-wrapper${id}`} key={id} id={`cog-wrapper${id}`}>
            <svg className={svgClass} viewBox="0 0 100 100">
              <TurbulenceFilter id={id} />
              <foreignObject width="100%" height="100%">
                <div className={`${svgClass}-content`}>
                  <img src={imgSrc} alt="logo" />
                </div>
              </foreignObject>
            </svg>
          </div>
        ))}
      </header>
    </a>
  </div>
);

export default CogAnim;