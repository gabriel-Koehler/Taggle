export interface UserTaggle{
  id:number;
  username:string;
  documents:[Folder & Note]
}
export interface Note{
  id:number
  type:"note"|"folder"
  title:string
  content:string
  parentFolder:Folder
  owner:UserTaggle
}
export interface Folder{
  id:number
  type:"note"|"folder"
  title:string
  content:[Note & Folder]
  isActive:boolean
  parentFolder:Folder
  owner:UserTaggle
}