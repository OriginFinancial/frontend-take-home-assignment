/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/naming-convention */

import '@testing-library/jest-dom';
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });
