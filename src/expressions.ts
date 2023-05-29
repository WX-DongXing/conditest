import { Expression } from './main'

export const target = {
  a: null,
  b: undefined,
  c: '',
  d: NaN,
  e: 0,
  f: 1,
  g: 2,
  h: 3,
  i: '0',
  j: '1',
  k: '2',
  l: 'a',
  m: 'b',
  n: 'c',
  o: {}
}

export const case1: Expression = {
  Conjunction: 'AND',
  Groups: [
    {
      Conditions: [
        { Key: 'j', Comparator: '=', Value: '1' },
        { Key: 'k', Comparator: '=', Value: '3' }
      ],
      Conjunction: 'OR',
      Groups: []
    }
  ]
}

export const case2: Expression = {
  Conjunction: 'AND',
  Groups: [
    {
      Conditions: [
        { Key: 'a', Comparator: '=', Value: null },
        { Key: 'b', Comparator: '=', Value: undefined }
      ],
      Conjunction: 'AND',
      Groups: []
    }
  ]
}

export const case3: Expression = {
  Conjunction: 'AND',
  Groups: [
    {
      Conditions: [
        { Key: 'c', Comparator: '=', Value: '' },
        { Key: 'd', Comparator: '=', Value: NaN }
      ],
      Conjunction: 'AND',
      Groups: []
    }
  ]
}

export const case4: Expression = {
  Conjunction: 'AND',
  Groups: [
    {
      Conjunction: 'AND',
      Conditions: [
        { Key: 'i', Comparator: '=', Value: '0' },
        { Key: 'j', Comparator: '=', Value: '1' }
      ],
      Groups: []
    },
    {
      Conjunction: 'OR',
      Conditions: [
        { Key: 'k', Comparator: '=', Value: '2' },
        { Key: 'l', Comparator: '=', Value: 'a' },
        { Key: 'm', Comparator: '=', Value: 'b' }
      ],
      Groups: [
        {
          Conjunction: 'AND',
          Conditions: [
            { Key: 'n', Comparator: '=', Value: 'c' },
            { Key: 'o', Comparator: '!=', Value: null }
          ],
          Groups: []
        }
      ]
    }
  ]
}

export const case5: Expression = {
  Conjunction: 'AND',
  Groups: [
    {
      Conditions: [
        { Key: 'm', Comparator: '=', Value: 'b' },
        { Key: 'h', Comparator: '!=', Value: 3 }
      ],
      Conjunction: 'AND',
      Groups: []
    }
  ]
}
