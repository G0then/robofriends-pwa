import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from "./constants";
import * as actions from "./actions";

it("should create an action to search robots", () => {
  const text = "wooo";
  const expectedActions = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedActions);
});

// it("handles requesting robot API", () => {
//     const expectedAction = {
//         type: REQUEST_ROBOTS_PENDING
//       };
//     expect(actions.requestRobots()).toEqual(expectedAction);
// })