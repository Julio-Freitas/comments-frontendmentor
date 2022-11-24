// jest.setup.ts
import { defaultFallbackInView } from 'react-intersection-observer'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

global.IntersectionObserver = jest.fn()
defaultFallbackInView(false)
