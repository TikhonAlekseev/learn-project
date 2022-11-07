
export interface IMessage{
    id: string,
    userId: string,
    text: string,
    date:string,
    roomId:string,
}

export interface IUser {
    userId:string,
    name:string,
}

export interface Room {
    id:string,
    name:string,
}


export type UserData = {
    name?:string,
    email:string,
    password:string,
}