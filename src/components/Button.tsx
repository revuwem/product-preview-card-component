interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-cyan-200 w-full flex justify-center items-center gap-3 p-3 font-bold rounded-xl hover:bg-cyan-100 transition"
    >
      {children}
    </button>
  );
};

export default Button;
