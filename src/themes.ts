import Theme from './interfaces/Theme';

const rgb: Theme = {
  cellSize: 32,
  cellColor: {
    0: 'red',
    1: 'green',
  },
  gridlineColor: 'yellow',
  borderColor: 'blue',
  borderWidth: 5,
};

const classic: Theme = {
  cellSize: 16,
  cellColor: {
    0: '#fff',
    1: '#222',
  },
  gridlineColor: '#ddd',
  borderWidth: 3,
  borderColor: '#aaa',
};

export default { classic, rgb };
export { classic, rgb };
