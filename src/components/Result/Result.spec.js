import { default as Result } from ".";
import { screen } from "@testing-library/react";

describe("Search render", () => {

    test('it renders the username searched', () => {
        let initState = { username: "zmahmood98", results: [] };
        renderWithReduxProvider(<Result />, { initState });
        let content = screen.getByText(/zmahmood98's/i)
        expect(content).toBeInTheDocument();
    });

    test('it renders an error message if receiving an error', () => {
        let initState = { error: true };
        renderWithReduxProvider(<Result />, { initState });
        let error = screen.getByRole('alert')
        expect(error.textContent).toContain("Error: ");
    });

    test('it renders a loading message when loading', () => {
        let initState = { loading: true };
        renderWithReduxProvider(<Result />, { initState });
        let content = screen.getByText("Loading ...")
        expect(content).toBeInTheDocument();
    });
    
});
