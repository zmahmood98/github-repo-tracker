import { default as Form } from ".";
import { screen } from "@testing-library/react";

describe("Search Form", () => {
    beforeEach(() => {
        renderWithReduxProvider(<Form />);
    });

    it("renders a form", () => {
        const form = screen.getByRole("form");
        expect(form).toBeInTheDocument();
    });
});