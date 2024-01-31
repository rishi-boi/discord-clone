import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  className?: String;
  children: React.ReactNode;
}) => {
  return (
    <section className={`px-8 py-16 lg:py-20 relative w-full ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
