'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
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

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit,
                Heading.configure({levels:[1,2,3]}),
                Text,
                TextStyle,
                FloatingMenu,
                HorizontalRule,
                Paragraph,
                Document,
                ColumnExtension
              
              ],
    content: '<p>Hello World! 🌎️</p>',
    editorProps:{
      attributes:{class:'pt-1 w-full h-full focus-visible:outline-none'},
    }

  })
  const MenuBar = ({editor}:{editor:Editor | null} ) =>{
    if(!editor) return null
    return (
      <div className="control-group h-12 flex items-center w-full bg-gray200 dark:bg-gray700">
        <div className=" flex gap-2 *:p-1 *:cursor-pointer ">
          <Image className='hover:bg-slate-100 rounded-md' src={alignLeft} width={32} height={32} alt='icon for edit bar' />
          <Image className='hover:bg-slate-100 rounded-md' src={alignCenter} width={32} height={32} alt='icon for edit bar' />
          <Image className='hover:bg-slate-100 rounded-md' src={alignRight} width={32} height={32} alt='icon for edit bar' />
          <Image className='hover:bg-slate-100 rounded-md' src={alignJustify} width={32} height={32} alt='icon for edit bar' />
          <Image onClick={() => editor.chain().focus().toggleBold().run()} className={(editor.isActive('bold') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'} src={bold} width={32} height={32} alt='icon for edit bar' />
          <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={(editor.isActive('italic') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'} src={italic} width={32} height={32} alt='icon for edit bar' />
          <Image className='hover:bg-slate-100 rounded-md' src={link} width={32} height={32} alt='icon for edit bar' />
          <Image onClick={() => editor.chain().focus().toggleStrike().run()} className={(editor.isActive('strike') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'} src={strike} width={32} height={32} alt='icon for edit bar' />
          <Image className='hover:bg-slate-100 rounded-md' src={mediaImage} width={32} height={32} alt='icon for edit bar' />
          <button  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={(editor.isActive('heading', { level: 1 }) ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
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
          <button onClick={() => editor.chain().focus().setColumns(3).run()} className={(editor.isActive('highlight') ? 'is-active' : '')+'hover:bg-slate-100 rounded-md'}>
            col
          </button>
        </div>
      </div>
    )
  }
  return <div className='z-0  box-border relative overflow-hidden overflow-y-auto flex-col '>
  <MenuBar editor={editor} />
  <EditorContent className='h-full w-full overflow-hidden' editor={editor} />
  </div>
}

export default Tiptap