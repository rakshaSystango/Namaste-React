import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted sm:px-6 lg:px-8">
        <p className="font-medium text-text">© 2025 Namaste React</p>
        <p className="mt-2">
          <span className="font-semibold text-text">Contact:</span>{" "}
          support@namastereact.com | +91-9876543210
        </p>
        <p className="mt-1">
          <span className="font-semibold text-text">Address:</span> 123 Food
          Street, Bangalore, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
