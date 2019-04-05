/*
 * @Author: saber2pr
 * @Date: 2019-04-05 14:16:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-05 14:41:36
 */
export type Todo<T> = (data: T) => void
export type Listener = {
  name: string
  todo: Todo<any>
}
let listeners: Listener[] = []
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
  listeners.push({ name, todo })
  return () => (listeners = listeners.filter(l => l.todo !== todo))
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
  listeners
    .reduce(
      (out, cur) => (cur.name === name ? out.concat(cur) : out),
      [] as Listener[]
    )
    .forEach(l => l.todo(data))
}
