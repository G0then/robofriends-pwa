import renderer from "react-test-renderer";
import SearchBox from "./SearchBox";

it("expect to render CardList component", () => {
  const mockSearchChange = () => null;
  const component = renderer.create(
    <SearchBox searchChange={mockSearchChange} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
