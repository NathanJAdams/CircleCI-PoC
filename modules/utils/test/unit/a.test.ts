import { expect } from 'chai';
import { sum } from '../../src/a';

describe('sum', () => {
    it('should sum good', () => {
        expect(sum(1, 2)).equal(3);
    })
})
