import { describe, it, expect } from 'vitest';
import { colors } from '../colors';

describe('Colors Constants', () => {
  it('exports colors object', () => {
    expect(colors).toBeDefined();
    expect(typeof colors).toBe('object');
  });

  it('has primary color defined', () => {
    expect(colors.primary).toBeDefined();
    expect(typeof colors.primary).toBe('string');
    expect(colors.primary).toMatch(/^#[0-9A-Fa-f]{6}$/); // Valid hex color
  });

  it('primary color is a valid hex color', () => {
    expect(colors.primary).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('primary color is not empty', () => {
    expect(colors.primary).not.toBe('');
    expect(colors.primary.length).toBe(7); // # + 6 hex characters
  });

  it('has consistent color format', () => {
    Object.values(colors).forEach(color => {
      if (typeof color === 'string') {
        expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    });
  });
});
