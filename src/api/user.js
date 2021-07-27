import request from '@/utils/request'

//后端管理需要的函数
/**
 * 登录，参数为手机号和密码
 * 返回值中包括手机号和密码是否匹配的信息
 * @param {*} data 
 * @returns 
 */
export function login(data) {
  return request({
    url: '/manager/user/login',
    method: 'post',
    data
  })
}

/**
 * 主界面信息获取
 * @param {*} token 
 * @returns 
 */
export function getInfo(token) {
  return request({
    url: 'manager/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * 根据id查询某个用户信息,返回R对象，其中data的条目info的键值是会员对象
 * @returns 
 */
 export function getuser(id) {
  return request({
    url: '/manager/user/getuser',
    method: 'post',
    params:{id}
  })
}

/**
 * 查询所有会员信息，返回数据库中role为1的对象
 * @returns 
 */
export function searchvip() {
  return request({
    url: '/manager/user/searchvips',
    method: 'get'
  })
}

/**
 * 查询所有用户信息
 * @returns 
 */
 export function search() {
  return request({
    url: '/manager/user/search',
    method: 'get'
  })
}


/**
 * 修改用户信息，参数为user对象
 * @param {*} user 
 * @returns 
 */
export function update(user) {
  return request({
    url: '/manager/user/update',
    method: 'post',
    data:user
  })
}

/**
 * 根据id删除用户
 * @param {} id 
 * @returns 
 */
export function deluser(id) {
  return request({
    url: '/manager/user/deluser',
    method: 'post',
    params:{id}
  })
}




//前端页面需要的函数

/**
 * 用户登录，参数为user对象，只包含手机号和密码
 * @returns 
 */
export function loginclient(user) {
  return request({
    url: '/client/user/loginclient',
    method: 'post',
    data:user
  })
}

/**
 * 注册，参数为user对象
 * @param {} user 
 * @returns 
 */
export function register(user) {
  return request({
    url: '/client/user/register',
    method: 'post',
    data:user
  })
}

/**
 * 用户修改个人信息，只能修改用户名
 * @param {*} user 
 * @returns 
 */
export function updates(user) {
  return request({
    url: '/client/user/update',
    method: 'post',
    data:user
  })
}