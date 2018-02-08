import ticketList from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';

describe("ticket list reducer", () => {
  let action;
  const ticketInfo = {
    names: [
      'Ryan',
      'Aimen'
    ],
    location : "4b",
    description: "jest wont work well with webpack",
    timeOpened: 1500000000000,
    id: 0
  };

  test('should return equivalent state if no action type is recognized', () => {
    action = { type: null};
    expect(ticketList([], action)).toEqual([]);
  });

  test('should add tickets to list array', () => {
    const { names, location, description, timeOpened, id } = ticketInfo;
    action = {
      type: constants.ADD_TICKET,
      names: names,
      location: location,
      description: description,
      timeOpened: timeOpened,
      id: id
    };
    const futureState = [ ticketInfo ];
    expect(ticketList([], action)).toEqual([ ticketInfo ]);
  });

});
