import request from '@/utils/request'

export function getList() {
  return request({
    url: '/shopping/goods',
    method: 'get',

  })
}

export function search(message) {
  return request({
    url: '/shopping/goods/search',
    method: 'get',
    params:{s : message}
  })
}

export function del(id) {
  return request({
    url: '/shopping/goods/del',
    method: 'get',
    params:{id}
  })
}

export function get(id) {
  return request({
    url: '/shopping/get',
    method: 'get',
    params:{id}
  })
}

export function update(goods) {
  return request({
    url: '/shopping/update',
    method: 'post',
    data:goods
  })
}

export function addGoods(goods) {
    return request({
      url: '/shopping/add',
      method: 'post',
      data:goods
    })
  }