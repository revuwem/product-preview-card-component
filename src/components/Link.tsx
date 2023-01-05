interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<ILinkProps> = ({ children, href, ...props }) => {
  return (
    <a
      href={href}
      {...props}
      className="text-cyan hover:text-blue-100 transition"
    >
      {children}
    </a>
  );
};

export default Link;
