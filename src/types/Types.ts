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
  // owner:UserTaggle
  // parentFolder:Folder
}

export interface Note extends Document{
  content:string
}
export interface Folder extends Document{
  content:[Document]
}
