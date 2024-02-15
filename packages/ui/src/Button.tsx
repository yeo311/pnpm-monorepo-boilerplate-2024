type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} style={{ backgroundColor: 'black', color: 'white' }}>
      {children}
    </button>
  );
};

export default Button;
