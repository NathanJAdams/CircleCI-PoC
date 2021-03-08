import { expect } from 'chai';
import { multiply } from '../../src/multiplier';

describe('sum', () => {
    it('should sum good integration', () => {
        expect(multiply(2, 5)).equal(10);
    })
})
