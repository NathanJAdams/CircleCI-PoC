import { expect } from 'chai';
import { sum } from '../../src/summer';

describe('sum', () => {
    it('should sum good unit', () => {
        expect(sum(1, 2)).equal(3);
    })
})
