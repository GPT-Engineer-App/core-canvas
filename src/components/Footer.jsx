const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-16 border-t bg-background px-4 md:px-6">
      <nav className="flex gap-4 text-sm font-medium">
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </nav>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

export default Footer;