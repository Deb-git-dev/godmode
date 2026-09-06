import React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, onClick, ...props }, ref) => {
    // If external link or anchor protocol
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a ref={ref} href={href} className={className} onClick={onClick} {...props}>
          {children}
        </a>
      );
    }

    // Hash SPA routing
    const hashHref = href.startsWith("#") ? href : `#${href}`;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        if (href.startsWith("#") && !href.startsWith("#/")) {
          // In-page anchor jump
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Route change
          window.location.hash = hashHref;
        }
      }
    };

    return (
      <a ref={ref} href={hashHref} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
export default Link;
