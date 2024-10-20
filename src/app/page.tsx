import { redirect } from 'next/navigation';
import React from 'react';

const Root: React.FC = () => {
  redirect('/admin');
};

export default Root;
