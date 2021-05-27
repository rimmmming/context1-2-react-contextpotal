import { createPotal } from 'react-dom';

const ContextPotal = ({ children, target }) => {
  return target ? createPotal(children, target) : null;
};

export default ContextPotal;
