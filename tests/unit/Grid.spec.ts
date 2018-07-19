import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Grid from '@/components/Grid.vue';
import Theme from '@/interfaces/Theme';

const defaultData: Uint8Array[] = [
  Uint8Array.from([0, 1, 0, 1]),
  Uint8Array.from([1, 0, 1, 0]),
  Uint8Array.from([0, 1, 0, 1]),
  Uint8Array.from([1, 0, 1, 0]),
];

const defaultOpts = {
  propsData: {
    data: defaultData,

  },
};

const testTheme: Theme= {
  cellSize: 16,
  cellColor: {
    0: 'red',
    1: 'green',
  },
  gridBackgroundColor: '',
  gridlineColor: '#000',
};

const getValueCounts = (data: Uint8Array[]): { [v: string]: number } =>
  data.reduce<{ [v: string]: number }>((count, states) => {
    states.forEach((v) => {
      if (!count[v.toString()]) {
        count[v.toString()] = 1;
      } else {
        count[v.toString()]++;
      }
    });

    return count;
  }, {});

describe('Grid.vue', () => {
  it('renders an svg', () => {
    const wrapper = shallowMount(Grid, defaultOpts);
    expect(wrapper.findAll('svg').length).eq(1);
  });

  it('renders all data cells', () => {
    const wrapper = shallowMount(Grid, defaultOpts);
    expect(wrapper.findAll('svg .c').length).eq(defaultData.length ** 2);
  });

  it('renders a "data-state" attribute on each cell', () => {
    const valueCount = getValueCounts(defaultData);
    const wrapper = shallowMount(Grid, defaultOpts);

    Object.keys(valueCount).forEach( (value) => {
      expect(wrapper.findAll(`[data-state="${value}"]`).length).eq(valueCount[value]);
    });
  });

  it('color cells, according to numeric state of cell and theme', () => {
    const valueCount = getValueCounts(defaultData);
    const propsData = {
      ...defaultOpts.propsData,
      theme: testTheme,
    };

    const wrapper = shallowMount(Grid, {
      ...defaultOpts,
      propsData,
    });

    Object.keys(valueCount).forEach( (value) => {
      expect(wrapper.findAll(`[fill="${propsData.theme.cellColor[Number(value)]}"]`).length)
        .eq(valueCount[value]);
    });
  });
});
