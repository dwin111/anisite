export interface IProduct {
    id?: number
    urlimg: string
    name: string
    description: string
    urlVideo: string
    numberViews: number
    rate: number
    rateCount: number
    tags: string[]
}
export interface IGenre {
    id?: number
    genre: string

}
export interface IUser {
    id?: number
    name: string
    urlIcon: string
    favoritesId: number[]

}

export interface IAccount{
    id?: number,
    email?: string,
    password?: string,
    isActive: boolean,
    acivateLink: string,
    user: IUser,
    role: number[]
}

export interface AuthResponce{
    access_token: string;
    id: number; 
}