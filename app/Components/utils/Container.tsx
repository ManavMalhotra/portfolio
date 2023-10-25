import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className={`mt-6`}>{children}</section>;
};

export default Container;
