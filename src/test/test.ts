import { createAction, subscribe, dispatch } from '../core/saber-event'

export type SayHello = createAction<'hello', string>

subscribe<SayHello>('hello', data => console.log(data, '1'))
subscribe<SayHello>('hello', data => console.log(data, '2'))()
subscribe<SayHello>('hello', data => console.log(data, '3'))

subscribe('hello233', data => console.log(data, '233'))
subscribe('*', data => console.log(data, '*'))

dispatch<SayHello>('hello', 'how are you?')
// dispatch('*', 'how are you?')
