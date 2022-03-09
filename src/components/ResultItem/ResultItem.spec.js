import { default as ResultItem } from ".";
import { screen } from "@testing-library/react";

describe("Result Item", () => {
    const testData = {
        name: "test_repo_name",
        forks_count: 4,
        stargazers_count: 5,
        open_issues: 6
    };

    beforeEach(() => {
        render(<ResultItem data={testData} />);
    });

    it("renders a listitem", () => {
        const item = screen.getByRole("listitem");
        expect(item).toBeInTheDocument();
    });

    it("renders a heading with repo name", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(testData.name);
    });

    it("renders fork count", () => {
        const forks = screen.getByText("Forks: 4");
        expect(forks).toBeInTheDocument();
    });

    it("renders stargazers count", () => {
        const forks = screen.getByText("Stargazers: 5");
        expect(forks).toBeInTheDocument();
    });

    it("renders open issues count", () => {
        const forks = screen.getByText("Open Issues: 6");
        expect(forks).toBeInTheDocument();
    });
});