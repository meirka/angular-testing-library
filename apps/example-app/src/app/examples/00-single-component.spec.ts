import { render, screen, fireEvent } from '@testing-library/angular';

import { SingleComponent } from './00-single-component';

beforeEach(async () => {
  await render('<app-fixture></app-fixture>', {
    declarations: [SingleComponent],
  });
});

test('renders the current value and can increment and decrement', async () => {
  const incrementControl = screen.getByRole('button', { name: /increment/i });
  const decrementControl = screen.getByRole('button', { name: /decrement/i });
  const valueControl = screen.getByTestId('value');

  expect(valueControl).toHaveTextContent('0');

  fireEvent.click(incrementControl);
  fireEvent.click(incrementControl);
  expect(valueControl).toHaveTextContent('2');

  fireEvent.click(decrementControl);
  expect(valueControl).toHaveTextContent('1');
});

test('renders the current value and can increment and decrement 2', async () => {
  const incrementControl = screen.getByRole('button', { name: /increment/i });
  const decrementControl = screen.getByRole('button', { name: /decrement/i });
  const valueControl = screen.getByTestId('value');

  expect(valueControl).toHaveTextContent('0');

  fireEvent.click(incrementControl);
  fireEvent.click(incrementControl);
  expect(valueControl).toHaveTextContent('2');

  fireEvent.click(decrementControl);
  expect(valueControl).toHaveTextContent('1');
});
