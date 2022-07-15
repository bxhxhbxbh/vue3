
import { createStore } from 'vuex'
import persistedState from 'vuex-persistedstate'
import { secureSessionStorage } from '@/units/sesstionStorage'

let ctx = require.context('./modules', true, /\.ts/)
const ctxs = ctx.keys().reduce((modules: any, path) => {
  const value = ctx(path)
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = value
  return modules
}, {})
// console.log(...ctxs)
const arr: any = ctx.keys().filter((curr) => {
  curr.indexOf('module.') !== -1 || curr.indexOf('module/') !== -1
}).map(ctx => {
  console.log(ctx)
}).map((curr) => {
  // curr.default
}).filter((curr) => curr)
Array.prototype.flat = (count) => {
  let c = count || 1
  const len = arr.length
  let ret: any[] = []
  if(arr.length === 0) {return arr}
  while(c--) {
    const _arr = []
    let flag = false
    if(ret.length === 0) {
      flag = true
      for(let i = 0; i < len; i++) {
        if(arr[i] instanceof Array) {
          ret.push(...arr[i])
        }else {
          ret.push(arr[i])
        }
      }
    }else {
      for(let i = 0; i < ret.length; i++) {
        if(ret[i] instanceof Array) {
          _arr.push(...ret[i])
        }else {
          _arr.push(ret[i])
        }
      }
      ret = _arr
    }
    if(!flag && c === Infinity) {
      break
    }
  }
  return ret
}

const allAuto = arr.flat()
console.log(allAuto)

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { ...ctxs },
  plugins: [
    persistedState({
      storage: {
        getItem: (key: any) => secureSessionStorage.getItem(key),
        setItem: (key: any, value: any) => secureSessionStorage.setItem(key, value),
        removeItem: (key: any) => secureSessionStorage.removeItem(key),
      },
      key: 'mine',
      paths: ['user', 'cart', 'category']
    })
  ]
})
