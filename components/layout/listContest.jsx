import React from 'react';
import { Footer, Header } from '../common';

export const ListContestLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};
