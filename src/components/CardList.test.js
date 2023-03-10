import renderer from 'react-test-renderer';
import CardList from "./CardList";

it("expect to render CardList component", () => {
    const mockRobot = [{
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
    }]
    const component = renderer.create(
        <CardList robots={mockRobot}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})