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
    genre: string

}

export interface AuthResponce{
    access_token: string;
    id: number; 
}