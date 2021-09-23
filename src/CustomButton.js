import React, { useRef } from 'react';
import PropType from 'prop-types';

const CustomButton = ({
  variant,
  size,
  children,
  authButton,
  type,
  onClick,
  textTransform,
  className,
  disabled,
  hidden,
  minWidth,
  ...restProps
}) => {
  const buttonRef = useRef(null);

  function styles() {
    let style = 'c-btn';

    if (variant) {
      style += ` c-btn--${variant}`;
    }

    if (size) {
      style += ` c-btn--${size}`;
    }

    if (textTransform) {
      style += ` c-btn--${textTransform}`;
    }

    if (authButton) {
      style += ` c-btn--auth`;
    }

    if (minWidth) {
      style += ` c-btn--${minWidth}`;
    }

    if (hidden) {
      style += ` c-btn--hidden`;
    }

    if (className) {
      style += ` ${className}`;
    }

    return style;
  }

  function handleClick() {
    buttonRef.current.blur();
    if (typeof onClick === 'function') {
      onClick();
    }
  }

  return (
    <button
      ref={buttonRef}
      className={styles()}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropType.node,
  textTransform: PropType.oneOf(['uppercase', 'capitalize']),
  size: PropType.oneOf(['sm', 'md', 'lg', 'xl']),
  authButton: PropType.bool,
  variant: PropType.string,
  type: PropType.oneOf(['button', 'submit', 'reset']),
  onClick: PropType.func,
  className: PropType.string,
  disabled: PropType.bool,
  minWidth: PropType.oneOf(['auto']),
  hidden: PropType.bool,
};

CustomButton.defaultProps = {
  type: 'button',
};

export default CustomButton;