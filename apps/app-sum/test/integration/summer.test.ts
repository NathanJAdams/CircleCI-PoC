import { expect } from 'chai';
import { sum } from '../../src/summer';

describe('sum', () => {
    it('should sum good integration', () => {
        expect(sum(25, 75)).equal(100);
    })
})
