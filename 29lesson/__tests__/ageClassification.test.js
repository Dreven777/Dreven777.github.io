//import {ageClassification} from '../src/ageClassification';

const ageClassification = require('../src/ageClassification');

test('function ageClassification', () => {
    const result = ageClassification.ageClassification(24);
    expect(result.length).toBeGreaterThan(5);
});