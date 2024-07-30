import React from 'react';

function InputLanguage({ label, languages, onInput }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
      <label htmlFor="language" style={{ marginBottom: '0.5rem', fontSize: '1rem', color: 'white' }}>{label}</label>
      <select
        name="language"
        onChange={(e) => onInput(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '1rem',
          boxSizing: 'border-box',
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputLanguage;