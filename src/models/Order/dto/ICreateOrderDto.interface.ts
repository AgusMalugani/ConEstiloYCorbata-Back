
export interface ICreateOrderDto{
    seña:number,
    resto:number,
    celular:string
    productos: string[] //array de ids
    isActive?: boolean
}