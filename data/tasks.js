const tasks = [
  {
    id: 1,
    title: "One Piece is real!",
  },
  {
    id: 2,
    title: "Learn Express",
  },
  {
    id: 3,
    title: "Learn MongoDB",
  },
];

let nextId = 4;

const getNextId = () => nextId++;

export { tasks, getNextId };
