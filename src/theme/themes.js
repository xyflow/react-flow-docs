import { extendTheme } from '@chakra-ui/react';
import components from './components';

const colors = {
  gray: {
    900: '#1f2224',
    800: '#3e4348',
    700: '#5e656b',
    600: '#7d868f',
    500: '#9ca8b3',
    400: '#b0b9c2',
    300: '#c4cbd1',
    200: '#d7dce1',
    100: '#ebeef0',
  },
  green: {
    900: '#162c1b',
    800: '#2c5936',
    700: '#428551',
    600: '#58b26c',
    500: '#6ede87',
    400: '#8be59f',
    300: '#a8ebb7',
    200: '#c5f2cf',
    100: '#e2f8e7',
  },
  teal: {
    900: '#002b28',
    800: '#005651',
    700: '#008179',
    600: '#00aca2',
    500: '#00d7ca',
    400: '#33dfd5',
    300: '#66e7df',
    200: '#99efea',
    100: '#ccf7f4',
  },
  pink: {
    900: '#330017',
    800: '#66002e',
    700: '#990044',
    600: '#cc005b',
    500: '#ff0072',
    400: '#ff338e',
    300: '#ff66aa',
    200: '#ff99c7',
    100: '#ffcce3',
  },
  blue: {
    900: '#000d2a',
    800: '#001a53',
    700: '#00277d',
    600: '#0034a6',
    500: '#0041d0',
    400: '#3367d9',
    300: '#668de3',
    200: '#99b3ec',
    100: '#ccd9f6',
  },
  orange: {
    900: '#331500',
    800: '#662900',
    700: '#993e00',
    600: '#cc5200',
    500: '#ff6700',
    400: '#ff8533',
    300: '#ffa466',
    200: '#ffc299',
    100: '#ffe1cc',
  },
  purple: {
    900: '#1A192B',
    800: '#222138',
    700: '#333154',
    600: '#4C497E',
    500: '#6865A5',
    400: '#918FBE',
    300: '#D6D5E6',
    200: '#F1F1F6',
  },
  yellow: {
    900: '#332800',
    800: '#665000',
    700: '#997800',
    600: '#cca000',
    500: '#ffc800',
    400: '#ffd333',
    300: '#ffde66',
    200: '#ffe999',
    100: '#fff4cc',
  },
};

const fontSans =
  "'nt-dapper', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";
const fontMono = `'jetbrains-mono', monospace;`;

const fonts = {
  body: fontSans,
  heading: fontSans,
  mono: fontMono,
};

const theme = extendTheme({ colors, fonts, components });

export { theme as defaultTheme };
