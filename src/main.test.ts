import { expect, test } from 'vitest'
import { calc } from './main'
import { target, case1, case2, case3, case4, case5 } from './expressions'

test('case1', () => {
  const bol = calc(target, case1)
  expect(bol).toBe(true)
})

test('case2', () => {
  const bol = calc(target, case2)
  expect(bol).toBe(true)
})

test('case3', () => {
  const bol = calc(target, case3)
  expect(bol).toBe(true)
})

test('case4', () => {
  const bol = calc(target, case4)
  expect(bol).toBe(true)
})

test('case5', () => {
  const bol = calc(target, case5)
  expect(bol).toBe(false)
})
