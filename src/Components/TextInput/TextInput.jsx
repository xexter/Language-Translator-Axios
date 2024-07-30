import React from 'react';

function TextInput({ label, onInput }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
      <label htmlFor="text" style={{ marginBottom: '0.5rem', fontSize: '1rem', color: 'white' }}>{label}</label>
      <textarea
        onChange={(e) => onInput(e.target.value)}
        type="text"
        rows="4"
        style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem' }}
      />
    </div>
  );
}

export default TextInput;