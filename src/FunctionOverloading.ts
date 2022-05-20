export function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg

export function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: Input) => SecondArg
): (input: Input) => SecondArg

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: Input) => SecondArg,
  func3: (input: Input) => ThirdArg
): (input: Input) => ThirdArg

export function compose(...args: any[]) {
  return {} as any
}

const addOne = (x: number) => x + 1
const numberToString = (x: number) => x.toString()
const stringToNumber = (x: string) => parseInt(x)

const addOneToString = compose(addOne, numberToString)
