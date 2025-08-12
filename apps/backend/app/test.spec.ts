import { describe, it, expect } from 'vitest'

describe('Backend App', () => {
  it('should be able to run tests', () => {
    expect(true).toBe(true)
  })

  it('should have correct environment', () => {
    expect(typeof window).toBe('object') // jsdom environment
  })
})
