export const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
  obj: Obj,
  firstkey: FirstKey,
  secondkey: SecondKey,
): Obj[FirstKey][SecondKey] => {
  return {} as any
}

const object = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: 'hello',
    d: 2,
  },
}

const result = getDeepValue(object, 'foo', 'b')
