/*
 * @Author: saber2pr
 * @Date: 2019-04-08 12:19:49
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 12:31:59
 */
/**
 * warning
 *
 * @export
 * @param {string} message
 */
export function Exception(message: string) {
  throw new Error(message)
}
