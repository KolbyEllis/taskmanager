import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            className="whitish-grey-button"
            type="button"
            onClick={() => handleButtonClick(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`collapse-${index}`}
          >
            <h3>{item.title}</h3>
          </button>
          {activeIndex === index && (
            <div id={`collapse-${index}`} className="collapse" aria-labelledby={`heading-${index}`}>
              <div className="card-body">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
