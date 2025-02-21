'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import FloatingMenu from '@tiptap/extension-floating-menu'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Image from 'next/image'
import { ColumnExtension } from "@gocapsule/column-extension";

import alignCenter from '../../../public/icons/align-center.svg'
import alignJustify from '../../../public/icons/align-justify.svg'
import alignLeft from '../../../public/icons/align-left.svg'
import alignRight from '../../../public/icons/align-right.svg'

import bold from '../../../public/icons/bold.svg'
import strike from '../../../public/icons/strikethrough.svg'
import italic from '../../../public/icons/italic.svg'
import link from '../../../public/icons/link.svg'
import mediaImage from '../../../public/icons/media-image.svg'
import twoColumns from '../../../public/icons/table-2-columns.svg'
import viewTwoColumns from '../../../public/icons/view-columns-2.svg'
import { useContext, useEffect } from 'react'
import { contextValues } from '@/context/ContextValuesProvider'
interface PropsTipTap{
  title?:string
  content?: string
  isLoading?: boolean
}
const Tiptap = (props:PropsTipTap) => {
  const context= useContext(contextValues)
  const editor = useEditor({
    onUpdate: ({editor}) => {
      console.log(editor.getJSON())
    },
    extensions: [StarterKit,
                Heading.configure({levels:[1,2,3]}),
                Text,
                TextAlign,
                TextStyle,
                FloatingMenu,
                HorizontalRule,
                Paragraph,
                Document,
                ColumnExtension
              
              ],
    // content: context?.contextNote?.content,
    editorProps:{
      attributes:{class:'w-full p-2 h-full focus-visible:outline-none'},
    }

  })
  const MenuBar = ({editor}:{editor:Editor | null} ) =>{
    if(!editor) return null
    return (
      <div className="control-group w-full  sticky top-0 p-2 z-10 bg-inherit border-b rounded-md border-gray-300">
        <div className=" flex gap-2 *:p-1 *:cursor-pointer flex-wrap button-group w-full ">
          <Image onClick={()=> editor.chain().focus().setTextAlign('left')} className={(editor.isActive({textAlign:'left'}) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert '} src={alignLeft} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={()=> editor.chain().focus().setTextAlign('center')} className={(editor.isActive({textAlign:'center'}) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={alignCenter} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={()=> editor.chain().focus().setTextAlign('right')} className={(editor.isActive({textAlign:'right'}) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={alignRight} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={()=> editor.chain().focus().setTextAlign('justify')} className={(editor.isActive({textAlign:'justify'}) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={alignJustify} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={() => editor.chain().focus().toggleBold().run()} className={(editor.isActive('bold') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={bold} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={(editor.isActive('italic') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={italic} width={32} height={32} alt='icon for edit bar' />
            
          <Image className='hover:bg-slate-100 rounded-md dark:invert'  src={link} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={() => editor.chain().focus().toggleStrike().run()} className={(editor.isActive('strike') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={strike} width={32} height={32} alt='icon for edit bar' />

          <Image onClick={() => editor.chain().focus().setColumns(2).run()} className={(editor.isActive('strike') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md dark:invert'} src={viewTwoColumns} width={32} height={32} alt='icon for edit bar' />

          <Image className='hover:bg-slate-100 rounded-md dark:invert' src={mediaImage} width={32} height={32} alt='icon for edit bar' />

          <button  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={(editor.isActive('heading', { level: 1 }) ? '!bg-primaryColor' : '')+'hover:bg-slate-100 rounded-md'}>
            H1
          </button>

          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={(editor.isActive('heading', { level: 2 }) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
            H2
          </button>

          <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={(editor.isActive('heading', { level: 3 }) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
            H3
          </button>

          <button onClick={() => editor.chain().focus().setParagraph().run()} className={(editor.isActive('paragraph') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
            Paragraph
          </button>

          <button onClick={() => editor.chain().focus().setHorizontalRule().run() } className={(editor.isActive('highlight') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
            Highlight
          </button>

        </div>
      </div>
    )
  }
  useEffect(()=>{
    editor?.commands.setContent(`<p>${context?.contextNote?.content}</p>`)
  },[])
  return <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-lime-300 dark:bg-gray600 bg-gray100 w-full h-full flex-col relative'>

  <MenuBar editor={editor} />
  {
    props.isLoading?
    <>
    <div className='flex p-2 flex-col gap-2'>
      <div className='w-72 h-5 skeleton'></div>
      <div className='w-72 h-5 skeleton'></div>
      <div className='w-60 h-5 skeleton'></div>
      <div className='w-80 h-5 skeleton'></div>
      <div className='w-64 h-5 skeleton'></div>
      <div className='w-60 h-5 skeleton'></div>
      <div className='w-80 h-5 skeleton'></div>
      <div className='w-72 h-5 skeleton'></div>
    </div>
    </>:
  <EditorContent className='h-full w-full'  editor={editor} />
  }
  </div>
}

export default Tiptap