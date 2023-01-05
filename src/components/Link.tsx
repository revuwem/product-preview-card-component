interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<ILinkProps> = ({ children, href, ...props }) => {
  return (
    <a
      href={href}
      {...props}
      className="text-cyan-200 hover:text-cyan-100 transition"
    >
      {children}
    </a>
  );
};

export default Link;
