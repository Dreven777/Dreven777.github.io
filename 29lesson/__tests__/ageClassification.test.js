//import {ageClassification} from '../src/ageClassification';

const ageClassification = require('../src/ageClassification');

test('function ageClassification', () => {
    expect(ageClassification.ageClassification(-1)).not.toBeNull();
    expect(ageClassification.ageClassification(0)).not.toBeNull();
    expect(ageClassification.ageClassification(1)).not.toBeNull();
    expect(ageClassification.ageClassification(24)).not.toBeNull();
    expect(ageClassification.ageClassification(24.01)).not.toBeNull();
    expect(ageClassification.ageClassification(44)).not.toBeNull();
    expect(ageClassification.ageClassification(44.01)).not.toBeNull();
    expect(ageClassification.ageClassification(65)).not.toBeNull();
    expect(ageClassification.ageClassification(65.1)).not.toBeNull();
    expect(ageClassification.ageClassification(75)).not.toBeNull();
    expect(ageClassification.ageClassification(75.01)).not.toBeNull();
    expect(ageClassification.ageClassification(90)).not.toBeNull();
    expect(ageClassification.ageClassification(90.01)).not.toBeNull();
    expect(ageClassification.ageClassification(122)).not.toBeNull();
    expect(ageClassification.ageClassification(122.01)).not.toBeNull();
    expect(ageClassification.ageClassification(150)).not.toBeNull();
});