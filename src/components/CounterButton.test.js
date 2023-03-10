import renderer from "react-test-renderer";
import CounterButton from "./CounterButton";
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  const component = renderer.create(<CounterButton color={mockColor} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it("should test what goes into the state", () => {
// //   const setState = jest.fn();
// //   jest
// //     .spyOn(React, "useState")
// //     .mockImplementationOnce((initState) => [initState, setState]);
// //     render(<CounterButton />);
//   const mockColor = "red";
//   render(<CounterButton color={mockColor}/>)
//   const button = screen.getByTestId('counter');
//   fireEvent.click(button);
//   expect(button).toHaveBeenCalledTimes(1);
// });
