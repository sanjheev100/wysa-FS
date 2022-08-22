import Cookie from 'js-cookie'

export const setCookie = (cookiename, token) => {
  return Cookie.set(cookiename, token, {
    expires: 0.5,
    secure: true,
    sameSite: 'strict',
    path: '/',
  })
}

export const getCookie = (cookiename) => {
  return Cookie.get(cookiename)
}

export const removeCookie = (cookiename) => {
  return Cookie.remove(cookiename)
}
