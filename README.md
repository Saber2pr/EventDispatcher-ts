# @saber2pr/event

[![npm](https://img.shields.io/npm/v/@saber2pr/event.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/event)

min-size:[`1.01 kb`]

> Subscribe/Publish

```bash
npm install @saber2pr/event
```

# API

## subscribe

参数: subscribe(eventName, callback)

> `eventName可设置为*，表示订阅所有消息(拦截器)`

```js
subscribe('test', data => console.log(data))
```

## dispatch

参数：dispatch(eventName, data)

1. eventName 事件名
2. data 消息数据

> `eventName可设置为*，表示发布公共消息(观测者)`

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
