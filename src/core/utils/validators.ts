/*
 * @Author: saber2pr
 * @Date: 2019-04-14 13:30:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 13:36:22
 */
export const match = (name: string, toBe: string): boolean => {
  if (toBe === '*') return true
  return name === toBe || name === '*'
}
