import React from "react";

const RootLayout = () => {
  return (
    <div>
      <Route index element={<Home />} />
    </div>
  );
};

export default RootLayout;
