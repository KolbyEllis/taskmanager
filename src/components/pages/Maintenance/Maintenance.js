import React from 'react';
import Accordion from '../../accordion/Accordion';

const Maintenance = () => {
  const items = [
    { title: 'First Floor', content: 'Content 1' },
    { title: 'Second Floor', content: 'Content 2' },
    { title: 'Third Floor', content: 'Content 2' },
    { title: 'Fourth Floor', content: 'Content 2' },
    { title: 'Fifth Floor', content: 'Content 2' },
    // Add more items as needed
  ];

  return <Accordion items={items} />;

};


export default Maintenance;
