import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * To debug jest applications:
 * 1. chrome://inspect
 * 2. Open dedicated DevTools for Node
 * 3. Run either npm run test or yarn test
 */