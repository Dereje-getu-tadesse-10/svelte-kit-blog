import { describe, it, expect } from 'vitest';
import { truncate } from '$lib/truncate';

describe('truncate function', () => {
	it('should return an empty string if input is undefined', () => {
		expect(truncate(undefined, 10)).toBe('');
	});

	it('should return the original if length is less or than or equal', () => {
		expect(truncate('Hello', 10)).toBe('Hello');
	});

	it('should truncate the string and add an ellipsis', () => {
		expect(truncate('Hello, world!', 5)).toBe('Hello...');
	});
});
