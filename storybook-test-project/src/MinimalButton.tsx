import React from 'react';

interface MinimalButtonProps {
  label: string;
  onClick?: () => void;
}

const MinimalButton: React.FC<MinimalButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      {label}
    </button>
  );
};

export default MinimalButton; 