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
    1: '#000',
  },
  gridlineColor: '#000',
  borderWidth: 5,
  borderColor: '#000',
};

export default { classic, rgb };
export { classic, rgb };
