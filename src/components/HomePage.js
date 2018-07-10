import React from 'react';
import HomeComponent from './HomeComponent';

export default function HomePage({ placeholder, getUser }) {
  return (
    <div>
      <HomeComponent placeholder={placeholder} getUser={getUser} />
    </div>
  );
}
