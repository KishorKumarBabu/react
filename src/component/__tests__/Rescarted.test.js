import { render, screen } from "@testing-library/react";
import Restcarted, { isopenlable } from "../Restcarted";
import { CDN_URL } from "../../Utils/constants";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import { mockData } from "../mokedata/mockData";
describe("Restcarted Component with real data", () => {
  test("renders restaurant info correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Restcarted restdata={mockData} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Madno - House of Sundaes")).toBeInTheDocument();
    expect(
      screen.getByText("Ice Cream, Desserts, Beverages")
    ).toBeInTheDocument();
    expect(screen.getByText("37 Mins")).toBeInTheDocument();
    expect(screen.getByText("4.3 ⭐")).toBeInTheDocument();
    expect(screen.getByText("Price: ₹250 for two")).toBeInTheDocument();

    const img = screen.getByAltText("rest-logo");
    expect(img).toHaveAttribute(
      "src",
      CDN_URL +
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/f5cde283-5335-46cd-bd5f-36343a1f5a61_609526.jpg"
    );
  });

  test("adds Open label using isopenlable HOC", () => {
    const Enhanced = isopenlable(Restcarted);
    render(<Enhanced restdata={mockData} />);

    expect(screen.getByText("Open")).toBeInTheDocument();
    expect(screen.getByText("Madno - House of Sundaes")).toBeInTheDocument();
  });
});
