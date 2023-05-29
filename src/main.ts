import './style.css'
import { isEqual } from 'lodash'

type Comparator = '=' | '!='

type Conjunction = 'AND' | 'OR'

interface Condition {
  Key: string
  Comparator: Comparator
  Value: any
}

export interface Expression {
  Conjunction: Conjunction
  Conditions?: Condition[]
  Groups: Expression[]
}

export function calc(
  target: Record<string, any>,
  expression: Expression
): boolean {
  if (!expression || !target) return false

  const { Conjunction, Groups, Conditions } = expression

  if (Conjunction === 'AND') {
    const groupResult = Groups.every((group) => calc(target, group))

    if (!Conditions) return groupResult

    return (
      groupResult &&
      Conditions.every(({ Key, Value, Comparator }) => {
        return Comparator === '='
          ? isEqual(target[Key], Value)
          : !isEqual(target[Key], Value)
      })
    )
  }

  if (Conjunction === 'OR') {
    const groupResult = Groups.some((group) => calc(target, group))

    return (
      groupResult ||
      (Conditions ?? []).some(({ Key, Value, Comparator }) => {
        return Comparator === '='
          ? target[Key] === Value
          : target[Key] !== Value
      })
    )
  }

  return false
}
