import React from 'react';
import {render} from '@testing-library/react';

function soma(a: number, b: number): number {
  return a + b;
}

function MyTestTest() {
  return (
    <div>mytest</div>
  )
}

export default MyTestTest;

test('should ', () => {
  const {getByText} = render(<MyTestTest />);
  expect(getByText('mytest')).toBeVisible();
})