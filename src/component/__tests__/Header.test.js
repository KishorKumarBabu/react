import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../Utils/appStore";
import Usercontext from "../Usercontext";

test("should render the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn = screen.getByRole("button");

  expect(loginbtn).toBeInTheDocument();
});

test("should render the cart item is 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartitem = screen.getByText("Home");

  expect(cartitem).toBeInTheDocument();
});

//(/cart/) it regex to match thr cart


test("should show logout button if user is logged in", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Usercontext.Provider value={{ loggedInUser: "Kishor", setUserName: jest.fn() }}>
          <Header />
        </Usercontext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
