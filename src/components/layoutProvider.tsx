'use client';
import React from 'react';
import {Toaster} from 'react-hot-toast';

export default function LayoutProvider({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
      <Toaster position="top-center" reverseOrder={false}/>
      {children}</body>
    </html>
  );
}