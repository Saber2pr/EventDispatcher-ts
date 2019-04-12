# @saber2pr/event

[![npm](https://img.shields.io/npm/v/@saber2pr/event.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/event)

min-size:[`934 bytes`]

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

参数：dispatch(eventName, data, callbackfn?)

1. eventName 事件名
2. data 消息数据
3. callbackfn 事件名匹配中间件

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
