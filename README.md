# @saber2pr/event

[![npm](https://img.shields.io/npm/v/@saber2pr/event.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/event)

> Subscribe/Publish

```bash
npm install @saber2pr/event
```

```ts
export type SayHello = createAction<'hello', string>

subscribe<SayHello>('hello', data => console.log(data, '1'))
subscribe<SayHello>('hello', data => console.log(data, '2'))()
subscribe<SayHello>('hello', data => console.log(data, '3'))

dispatch<SayHello>('hello', 'how are you?')
```
