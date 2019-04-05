import { createAction, subscribe, dispatch } from '../core/saber-event'

export type SayHello = createAction<'hello', string>

subscribe<SayHello>('hello', console.log)

dispatch<SayHello>('hello', 'how are you?')
