import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Detail from './Detail';
import dummyData from './dummyData';
import ContextPotal from './ContextPotal';

export default function App() {
  const [openedIndex, setOpen] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    // do something here.
    setOpen(openedIndex === index ? null : index);
  };

  const closeAll = e => {
    // do something here.
    if (e.target.nodeName === 'p') setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  });

  return (
    <div className="wrapper">
      {dummyData.map(({ text, context }, i) => (
        <Detail
          key={`detail${i}`}
          ref={r => (detailRefs.current[i] = r)}
          text={text}
          context={context}
          open={openedIndex === i}
          onToggle={togglePopover(i)}
        />
      ))}
      <ContextPotal
        target={detailRefs.current[openedIndex]}
        children={<p>{dummyData[openedIndex]?.context}</p>}
      />
    </div>
  );
}
