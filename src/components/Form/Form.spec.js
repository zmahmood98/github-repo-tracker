import { default as Form } from ".";
import { screen } from "@testing-library/react";

describe("Search Form", () => {
    beforeEach(() => {
        renderWithReduxProvider(<Form />);
    });

    it("renders a heading 'GitHub Repository Search'", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("GitHub Repository Search");
    });

    it("renders a form", () => {
        const form = screen.getByRole("search");
        expect(form).toBeInTheDocument();
    });

    it("renders a search input", () => {
        const input = screen.getByLabelText("Github username");
        expect(input).toBeInTheDocument();
        expect(input.type).toBe("search");
        expect(input.placeholder).toBe("GitHub username");
    });

    it("renders a Search button", () => {
        const button = screen.getByRole("button", { name: /Search/ });
        expect(button).toBeInTheDocument();
        expect(button.type).toBe("submit");
    });
});