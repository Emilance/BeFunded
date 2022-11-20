import Cookies from "js-cookie"

export function setUser(user){
    return Cookies.set('user',JSON.stringify(user))
}

export function getUser(){
    return Cookies.get('user')?JSON.parse(Cookies.get('user')):{}
}
export function setToken(token){
    return Cookies.set('token',token)
}
export function getToken(){
    if (typeof window === undefined) {
        return null;
    }
    return Cookies.get('token')
}

export function deleteCookie(){
    Cookies.remove('user', { Path: '/', Domain: 'be-funded.vercel.app' })
    Cookies.remove('token', { Path: '/', Domain: 'be-funded.vercel.app' })

}