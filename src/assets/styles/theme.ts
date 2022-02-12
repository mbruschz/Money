import { DefaultTheme } from 'styled-components';

const colorPallet = {
  c1: '#03045E',
  c2: '#023E8A',
  c3: '#0077B6',
  c4: '#0096C7',
  c5: '#00B4D8',
  c6: '#48CAE4',
  c7: '#90E0EF',
  c8: '#ADE8F4',
  c9: '#CAF0F8',
};

export const defaultTheme: DefaultTheme = {
  font: '',
  colors: {
    contentLineOdd: colorPallet.c7,
    contentLineEven: colorPallet.c8,
    ammountNegative: '#e63946',
    ammountPositive: '#38b000',
  }
}