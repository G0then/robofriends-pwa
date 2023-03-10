import renderer from 'react-test-renderer';
import Card from './Card';

it("expect to render Card component", () => {
    const component = renderer.create(
        <Card/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})