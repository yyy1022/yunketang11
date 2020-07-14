//通用工具类
export function createKey(name) {
    return window.location.host + "_" + name

}

//通过这个localStorage做封装  ，在这个函数中加国企时间的概念
export function setItem(key, value, expire) {
    const valueObj = {
        value,
        expire

    }
    //key名字  value值  expire过期时间
    window.localStorage.setItem(key, JSON.stringify(valueObj))

}

export function getItem(key) {
    let obj = window.localStorage.getItem(key)
    if (obj) {
        let valueObj = JSON.parse(obj)
        if (Date.now() - valueObj.expire >0) {
            return null;
        } else {
            return valueObj.value
        }
    } else {
        return null
    }

}