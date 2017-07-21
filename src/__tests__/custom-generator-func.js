const babel = require('babel-core');
const content = `
type FooProps = {
  bar: {
    a: string,
    b: number,
  }
};

const FooPropTypes = toPropTypes((t: FooProps) => t);
`;

it('generate props if generatorFunc enabled', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: [
      'syntax-flow',
      [require('../'), { 'generatorFuncName': 'toPropTypes' }]
    ],
  }).code;
  expect(res).toMatchSnapshot();
});
