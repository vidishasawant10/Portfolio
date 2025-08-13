import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h1 className="text-4xl font-bold uppercase text-red-600 border-b-2 border-red-600 inline-block pb-1 mb-8">
    {children}
  </h1>
);

export default SectionTitle;
