import React from "react";
import { render } from "@testing-library/react";
// import { Provider } from "react-redux";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./app/redux/store";

test("renders learn react link", () => {
  const { getByText } = render(
    // <React.StrictMode>
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       <PersistGate persistor={persistor}>
    <App />
    //       {/* </PersistGate>
    //     </BrowserRouter>
    //   </Provider>
    // </React.StrictMode> */}
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
