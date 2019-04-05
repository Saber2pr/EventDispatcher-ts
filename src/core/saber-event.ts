/*
 * @Author: saber2pr
 * @Date: 2019-04-05 14:16:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-05 14:41:36
 */
export type Todo<T> = (data: T) => void
/**
 * Listeners
 *
 * @export
 * @interface Listeners
 */
export interface Listeners {
  [name: string]: Todo<any>
}
const listeners: Listeners = {}
/**
 * createAction
 *
 * @export
 * @interface createAction
 * @template N
 * @template T
 */
export interface createAction<N = any, T = any> {
  name: N
  data: T
}
/**
 * UnSubscribe
 *
 * @export
 * @interface UnSubscribe
 */
export interface UnSubscribe {
  (): void
}
/**
 * subscribe
 *
 * @export
 * @template Action
 * @param {Action['name']} name
 * @param {Todo<Action['data']>} todo
 * @returns {UnSubscribe}
 */
export function subscribe<Action extends createAction>(
  name: Action['name'],
  todo: Todo<Action['data']>
): UnSubscribe {
  name in listeners || (listeners[name] = todo)
  return () => name in listeners && delete listeners[name]
}
/**
 * dispatch
 *
 * @export
 * @template Action
 * @param {Action['name']} name
 * @param {Action['data']} data
 */
export function dispatch<Action extends createAction>(
  name: Action['name'],
  data: Action['data']
) {
  listeners[name](data)
}
