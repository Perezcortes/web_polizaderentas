'use client';

interface SpinnerProps {
  message?: string;
  size?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Spinner({ message, size = '3rem', style = {}, className = '' }: SpinnerProps) {
  return (
    <div className={`text-center py-4 ${className}`}>
      <div
        className="spinner-border"
        style={{
          width: size,
          height: size,
          borderWidth: '0.25em',
          borderColor: '#bdad5d transparent #bdad5d transparent',
          ...style
        }}
        role="status"
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
      {message && (
        <p className="mt-2" style={{ color: '#bdad5d' }}>
          {message}
        </p>
      )}
    </div>
  );
}
