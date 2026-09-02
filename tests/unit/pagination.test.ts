 
import { parsePagination } from '../../src/shared/utils/pagination.js';

describe('Pagination Utilities', () => {
  it('returns default values for undefined inputs', () => {
    expect(parsePagination({ page: undefined, limit: undefined })).toEqual({ page: 1, limit: 10 });
  });

  it('parses valid numeric inputs', () => {
    expect(parsePagination({ page: '2', limit: '20' })).toEqual({ page: 2, limit: 20 });
  });

  it('normalizes negative inputs to defaults', () => {
    expect(parsePagination({ page: '-1', limit: '-5' })).toEqual({ page: 1, limit: 10 });
  });

  it('normalizes non-numeric inputs to defaults', () => {
    expect(parsePagination({ page: 'abc', limit: 'def' })).toEqual({ page: 1, limit: 10 });
  });

  it('clamps limit to 50', () => {
    expect(parsePagination({ page: '1', limit: '100' })).toEqual({ page: 1, limit: 50 });
  });
});
