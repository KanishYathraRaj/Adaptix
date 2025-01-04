import React, { useState } from 'react';
import './Log.css';

const Log = ({ id, title, code }) => {
  return (
    <div className="log">
      <p>{title}</p>
    </div>
  );
};

export default Log;
