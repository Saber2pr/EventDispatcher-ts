# @saber2pr/event

[![npm](https://img.shields.io/npm/v/@saber2pr/event.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/event)

min-size:[`765 bytes`]

> Subscribe/Publish

```bash
npm install @saber2pr/event
```

# API

## subscribe

参数: subscribe(eventName, callback)

```js
subscribe('test', data => console.log(data))
```

## dispatch

参数：dispatch(eventName, data?)

```js
dispatch('test', 233)
```

# For Typescript

## createAction

参数 createAction<EventNameType, DataType>

```ts
type SayHello = createAction<'hello', string>
```

```ts
subscribe<SayHello>('hello', data => console.log(data, '1'))
subscribe<SayHello>('hello', data => console.log(data, '2'))()
subscribe<SayHello>('hello', data => console.log(data, '3'))

dispatch<SayHello>('hello', 'how are you?')
```
