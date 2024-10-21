import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Define the navItems array
  const navItems = ['Home', 'About Us', 'Services','blog'];

  return (
    <div className="flex flex-col bg-white overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <Header navItems={navItems} />
      <main className="w-full">{children}</main> {/* Ensured main has w-full */}
      <Footer />
    </div>
  );
};

export default Layout;
