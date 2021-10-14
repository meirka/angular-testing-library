import { render, screen } from '@testing-library/angular';

let rerender;

beforeEach(async () => {
  const view = await render(`<div>Hello {{ name}}</div>`, {
    componentProperties: {
      name: 'Sarah',
    },
  });
  rerender = view.rerender;
});

it('https://github.com/testing-library/angular-testing-library/issues/222', async () => {
  expect(screen.getByText('Hello Sarah')).toBeTruthy();
  rerender({ name: 'Mark' });

  expect(screen.getByText('Hello Mark')).toBeTruthy();
});
