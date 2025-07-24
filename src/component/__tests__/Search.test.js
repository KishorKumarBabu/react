import { render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import Body from "../Body";
import { mockData } from "../mokedata/mokerestlist.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});
test("should render body component with search", async () => {

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    ); 
});
