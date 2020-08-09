import React from 'react';
import Header from './Header';
import { useCurrentCoords, useReverseLookup } from '../../hooks';

function HeaderContainer() {
  const { refreshCoords } = useCurrentCoords();
  const { data = {}, error } = useReverseLookup();

  const { address } = data;

  return <Header address={address} refreshCoords={refreshCoords} />;
}

export default HeaderContainer;
