import React from 'react';
import { useCurrentCoords, useReverseLookup } from 'hooks';
import Header from './Header';

function HeaderContainer(): JSX.Element {
  const { refreshCoords } = useCurrentCoords();
  const { data } = useReverseLookup();

  if (!data) {
    return null;
  }

  const { address } = data;

  if (!address) {
    return null;
  }

  return <Header address={address} refreshCoords={refreshCoords} />;
}

export default HeaderContainer;
