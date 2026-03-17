import type { ComponentProps } from 'react';

// type ButtonProps = {
//   children: ReactNode;
//   className?: string;
//   //   onClick?: () => void;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   disable:
// };

// type ButtonProps = ComponentProps<'button'> & {
//   variant?: 'primary' | 'secondary';
// };

type ButtonProps = Omit<ComponentProps<'button'>, 'onDrag' | 'onDrop' | 'onDragEnd'> & {
  variant?: 'primary' | 'secondary';
};

const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => {
  const variantClass = `btn-${variant}`;

  return (
    <button onClick={props.onClick} className={`my-button ${variantClass} ${className}`} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
