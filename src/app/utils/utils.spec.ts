import { range, pluck } from './utils'

describe('Testing Utils', () => {
  it('Should return [1,2,3,4]', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it('Should return an array of elements', () => {
    const data = [
      { id: '1', name: 'julio' },
      { id: '2', name: 'Esteban' },
      { id: '3', name: 'Adonis'},      
    ];
    expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
  })

});