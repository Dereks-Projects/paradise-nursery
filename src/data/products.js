import snakePlant from '../assets/snake-plant.jpg';
import fiddleLeafFig from '../assets/fiddle-leaf-fig.jpg';
import zzPlant from '../assets/zz-plant.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import spiderPlant from '../assets/spider-plant.jpg';
import pothos from '../assets/pothos.jpg';

const products = [
  {
    id: '1',
    name: 'Snake Plant',
    price: 18.99,
    image: snakePlant,
    category: 'Low Light'
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    price: 32.5,
    image: fiddleLeafFig,
    category: 'Bright Light'
  },
  {
    id: '3',
    name: 'ZZ Plant',
    price: 21.0,
    image: zzPlant,
    category: 'Low Light'
  },
  {
    id: '4',
    name: 'Peace Lily',
    price: 19.5,
    image: peaceLily,
    category: 'Flowering'
  },
  {
    id: '5',
    name: 'Spider Plant',
    price: 16.75,
    image: spiderPlant,
    category: 'Hanging'
  },
  {
    id: '6',
    name: 'Pothos',
    price: 14.99,
    image: pothos,
    category: 'Easy Care'
  }
];

export default products;
