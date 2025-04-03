import Footer from "@styles/components/footer";
import Header from "@styles/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="" style={{ backgroundColor: "#ffbf56" }}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
