
export interface IMessage{
    id?: string,
    text: string,
    roomId:string,
    user:{
        username:string,
        email:string,
        id:string,
    }
}

export interface Room {
    id:string,
    name:string,
}

export type UserData = {
    username?:string,
    email:string,
    password:string,
}

export type AccessUserData = {
    id:string,
    username:string,
    email:string,
    accessToken:string,
    refreshToken:string
}