
import React from 'react';
import Collapsible from 'react-collapsible';



const CollapsiblePanel  = ({trigger,children}) => (
  <Collapsible trigger={trigger}>
    {children}
  </Collapsible>

);

export default CollapsiblePanel;
