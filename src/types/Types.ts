export class UserTaggle{
  id!:number;
  username!:string;
  documents!:[Document]
}
export class Document{
  id!:number ;
  type!: "Note" | "Folder"; 
  title!:string;
  isActive!:boolean;
  atCreated!:Date;
  atLastAlteration!:Date;
}

export class Note extends Document{
  content!:string
}
export class Folder extends Document{
  content!:[item:Folder | Note]
}
