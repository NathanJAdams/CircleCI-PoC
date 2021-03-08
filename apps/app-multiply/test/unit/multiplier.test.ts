import { expect } from 'chai';
import { multiply } from '../../src/multiplier';

describe('multiply', () => {
    it('should multiply good unit', () => {
        expect(multiply(3, 3)).equal(9);
    })
})
