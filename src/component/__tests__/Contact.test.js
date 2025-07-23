import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
describe("contact us page to be loaded", () =>{
test("should load contact page ", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load boutton inside contact component ", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("should load boutton inside contact component ", () => {
  render(<Contact />);
  const inputbox = screen.getByPlaceholderText("Your Name");
  expect(inputbox).toBeInTheDocument();
});

test("should load 2 input boxes or multiple",()=>{
  render(<Contact/>)
  const inputboxes = screen.getAllByRole("textbox")
   expect(inputboxes.length).toBe(3)
})
})

