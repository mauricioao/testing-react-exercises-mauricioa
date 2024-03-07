// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Login from "./Login";

describe("Login", () => {
    test("submit the form calls onSubmitForm with username and password", async () => {
        const user = userEvent.setup();

        // Create a 'mock' function that make sure that handleSubmit is called with the correct arguments
        // let submittedData;
        // const handleSubmit = (data) => {
        //   submittedData = data;
        // };

        // Vitest mock function:
        const handleSubmit = vi.fn();

        render(<Login onFormSubmit={handleSubmit} />);
        // screen.debug();
        const userData = { username: "Testino", password: "secret" };

        // Type into the input fields
        await user.type(screen.getByLabelText(/username/i), userData.username);
        await user.type(screen.getByLabelText(/password/i), userData.password);

        // Click submit button
        await user.click(screen.getByRole("button", { name: /login/i }));

        // Assert that the submittedData is the same as the input fields
        // expect(submittedData).toEqual(userData);

        // new matchers using the mocked function
        expect(handleSubmit).toHaveBeenCalledWith(userData);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});