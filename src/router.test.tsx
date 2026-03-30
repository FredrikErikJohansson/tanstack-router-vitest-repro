import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

describe('Router', () => {
  it('should create a router with the route tree', () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    expect(router).toBeDefined()
  })
})
