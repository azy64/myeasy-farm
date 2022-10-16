import React from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
  const nav = useNavigate();
  const go = () => {
    nav('map');
  };
  return (
    <main className="main-container">
      <div>
        <button type="button" onClick={go} className="start">start</button>
      </div>

    </main>
  );
}

export default Start;
