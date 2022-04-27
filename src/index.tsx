import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import { render } from '@testing-library/react';

const container = document.getElementById('root');
if (!container) {
	throw new Error('No root element found');
}

render(<GlobalStyles />);
const root = createRoot(container);
root.render(<App />);
