export interface IMessage{
    id: string,
    userId: string,
    text: string,
    date:string,
}

export interface IUser {
    userId:string,
    name:string,
    messages: IMessage[]
}

export interface Room {
    id:string,
    name:string,
}