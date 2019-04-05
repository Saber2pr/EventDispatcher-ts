# @saber2pr/event

> Subscribe/Publish

```bash
npm install @saber2pr/event
```

```ts
export type SayHello = createAction<'hello', string>

subscribe<SayHello>('hello', console.log)

dispatch<SayHello>('hello', 'how are you?')
```
