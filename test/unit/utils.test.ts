// @ts-ignore
const { getPriorityName } = require('../../src/utils/getPriorityName');

describe('Check utils work', () => {
  it('Should convert a priority number into a name', () => {
    // Arrange
    const highest = 1;
    const mid = 2;
    const lowest = 3;
    // Act
    const testHigh = getPriorityName(highest);
    const testMid = getPriorityName(mid);
    const testLow = getPriorityName(lowest);
    // Assert
    expect(testHigh).toBe('Life Changing');
    expect(testMid).toBe('Important');
    expect(testLow).toBe('Meh');
  });
});