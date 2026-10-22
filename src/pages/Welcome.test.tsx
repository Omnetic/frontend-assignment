import {render, screen} from '@testing-library/react';
import '../i18n/i18n';
import {Welcome} from './Welcome';

test('renders the welcome message', () => {
  render(<Welcome />);
  expect(screen.getByText('Welcome to Zentask')).toBeInTheDocument();
});
