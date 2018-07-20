const babel = require('babel-core');
const content = `
/* @flow */
type Test = { id: string };
export type { Test };
`;

it('basic', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')]
  }).code;
  expect(res).toMatchSnapshot();
});
