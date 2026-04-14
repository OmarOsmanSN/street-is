import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.625rem 1.25rem',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--transition-fast)',
    border: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '1px solid var(--primary)',
    },
    danger: {
      backgroundColor: 'var(--danger)',
      color: 'white',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--text-muted)',
    }
  };

  const style = { ...baseStyles, ...variants[variant] };

  // Note: For a real app, I'd use CSS classes, but here I'm using inline styles for maximum portability 
  // as per the requirement for a professional design system that uses predefined styles.
  // I'll add a hover effect via a state if needed, but for now I'll use standard classes defined in index.css.

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
