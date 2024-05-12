export interface ILayout{
    _id:string,
    project_object_id: string
    x: number,
    y:number,
    is_booked:boolean,
    facing?: "N" | "S" | "W" | "E"
  }