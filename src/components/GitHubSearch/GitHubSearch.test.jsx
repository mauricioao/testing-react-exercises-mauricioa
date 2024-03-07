// @vitest-environment jsdom
 
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import GitHubSearch from "./GitHubSearch";
 
test("submit the form with valid username shows github user data", async () => {
  const data = {
    name: "Testino",
    followers: 1000,
    following: 100,
  };
 
  vi.spyOn(window, "fetch").mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json() {
        return Promise.resolve(data);
      },
    });
  });
 
  const user = userEvent.setup();
 
  render(<GitHubSearch />);
 
  const textbox = screen.getByRole("textbox");
  const submit = screen.getByRole("button", { name: /search/i });
 
  await user.type(textbox, "testino");
  await user.click(submit);
 
  expect(screen.getByText(data.name)).toBeInTheDocument();
  expect(screen.getByTestId("followings")).toHaveTextContent(data.following);
  expect(screen.getByTestId("followers")).toHaveTextContent(data.followers);
 
  window.fetch.mockRestore();
});



// // @vitest-environment jsdom
 
// import { expect, test, vi } from "vitest";
// import { getProfile } from "../../services/github_service";
 
// test("implement mock function for fetch", async () => {
//   const data = {
//     name: "Testino",
//     followers: 1000,
//     following: 100,
//   };
 
//   const mockFtech = vi.spyOn(window, "fetch").mockImplementation(() => {
//     return Promise.resolve({
//       ok: true,
//       json() {
//         return Promise.resolve(data);
//       },
//     });
//   });
 
//   const fetchedData = await getProfile("testino");
//   console.log(fetchedData)
 
//   expect(mockFtech).toHaveBeenCalled();
//   expect(fetchedData).toEqual(data);
 
//   // regresamos fetch a la normalidad:
//   window.fetch.mockRestore();
// });