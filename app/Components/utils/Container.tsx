import React from "react";

const Container = ({ children, className }: { children: React.ReactNode }) => {
  return <section className={`mt-6 ${className}`}>{children}</section>;
};

export default Container;
