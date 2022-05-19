import { String, Union } from 'ts-toolbelt'
const query = `/home?a=wonderful&b=wow&c=bar`

type Query = typeof query
type SecondQueryPart = String.Split<Query, '?'>[1]
type QueryElements = String.Split<SecondQueryPart, '&'>
type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, '='>[0]]: String.Split<QueryElement, '='>[1]
  }
}[QueryElements[number]]

const object: Union.Merge<QueryParams> = {
  a: 'wonderful',
  b: 'wow',
  c: 'bar'
}
