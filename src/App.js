import React from "react";

// Components
import BodyTable from "./components/BodyTable";
import Popup from "./components/Popup";

// Context
import ElementPropertiesProvider from "./context/ElementPropertiesProvider";

const App = () => {
  return (
    <ElementPropertiesProvider>
      <div className="App w-[100%] h-[100vh] pt-5 relative bg-black">
        <h1 className="h1 text-white text-center font-primary">جدول نتاوبی</h1>
        <div className="container h-[80vh] mx-auto overflow-x-auto">
          <BodyTable />
        </div>
        <Popup />
      </div>
    </ElementPropertiesProvider>
  );
};

export default App;
