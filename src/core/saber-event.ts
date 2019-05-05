/*
 * @Author: saber2pr
 * @Date: 2019-04-08 12:20:43
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 13:31:16
 */
import { Exception } from './utils/error'
import { match } from './utils/validators'

export type Todo<T = any> = (data?: T) => void

export type Listener<T = any> = {
  name: string
  todo: Todo<T>
}

let __listeners: Listener[] = []

export interface createAction<N = any, T = any> {
  name: N
  data: T
}

export interface UnSubscribe {
  (): void
}

export function subscribe<Action extends createAction>(
  name: Action['name'],
  todo: Todo<Action['data']>
): UnSubscribe {
  __listeners.push({ name, todo })
  return () => (__listeners = __listeners.filter(l => l.todo !== todo))
}

export function dispatch<Action extends createAction>(
  name: Action['name']
): void
export function dispatch<Action extends createAction>(
  name: Action['name'],
  data: Action['data']
): void

export function dispatch<Action extends createAction>(
  name: Action['name'],
  data?: Action['data']
): void {
  const listeners = __listeners.reduce(
    (out, cur) => (match(cur.name, name) ? out.concat(cur) : out),
    [] as Listener[]
  )
  if (listeners.length) {
    listeners.forEach(l => l.todo(data))
  } else {
    Exception(`no listeners of name:[${name}]`)
  }
}
