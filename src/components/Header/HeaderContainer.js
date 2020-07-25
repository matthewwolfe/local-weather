import React from 'react';
import Header from './Header';
import { useCurrentCoords } from '../../hooks';

function HeaderContainer() {
  const { refreshCoords } = useCurrentCoords();

  return <Header refreshCoords={refreshCoords} />;
}

export default HeaderContainer;
