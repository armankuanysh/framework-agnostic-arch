export interface ICacheOptions {
  ttl: number
}

export interface ICache<T> {
  key: string
  updateTime: string
  data: T
}

/**
 * Decorator function that caches a response and returns cached data if ttl is not expired
 * @param _key key of the cache
 * @param options options object that contains ttl option that sets in minutes
 */
export function cache<P>(_key: string, options: ICacheOptions = { ttl: 5 }) {
  return function (
    _: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let prop: ICache<P> = {} as ICache<P>
    const key = `${_key}.${propertyKey}`
    const method = descriptor.value
    const _ttl = options.ttl * 60000

    descriptor.value = function () {
      const propChecking = prop?.data && prop?.updateTime
      const timeDiff = propChecking
        ? Math.abs(
            Number(new Date()) - Number(new Date(prop?.updateTime as string))
          )
        : _ttl
      if (propChecking && timeDiff < _ttl) {
        console.log('🐞 ~ returning cached data', prop)
        return prop?.data
      }
      return method.apply(this, arguments).then((result: P) => {
        console.log(`🐞 ~ making a call of the function by ${key} key`)
        prop = {
          key,
          updateTime: new Date().toISOString(),
          data: result,
        }
        return result
      })
    }
  }
}
