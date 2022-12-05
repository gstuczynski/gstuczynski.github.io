  
import React from 'react';
import { AppRegistry, asset, VrButton } from 'react-360';
import Entity from 'Entity';




const InfoPanelButton = () => (
  <VrButton>
    <Entity source={{ obj: asset('3dmodels/earth.obj'), mtl: asset('3dmodels/earth.mtl') }} />
  </VrButton>
);

export default InfoPanelButton;