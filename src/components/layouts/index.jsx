import React from "react";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-200 dark:bg-slate-900 pb-20">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
