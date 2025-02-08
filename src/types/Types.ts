export interface UserTaggle{
  id:number;
  username:string;
  documents:[Document]
}
export interface Document{
  id:number
  type:"note"|"folder"
  title:string
  isActive:boolean
  atCreated:Date
  atLastAlteration:Date
  // owner:UserTaggle
  // parentFolder:Folder
}

export interface Note extends Document{
  content:string
}
export interface Folder extends Document{
  content:[Document]
}
