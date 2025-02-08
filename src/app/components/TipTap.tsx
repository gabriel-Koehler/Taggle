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
import { ColumnExtension } from "@gocapsule/column-extension";
interface propsTipTap{
  title: string | null | undefined
  content: string | null | undefined
}
const Tiptap = (props:propsTipTap) => {
  
  const editor = useEditor({
    onUpdate: ({editor}) => {
      console.log(editor.getJSON())
    },
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
    content: `${props.content}`,
    editorProps:{
      attributes:{class:'w-full   p-2 h-full focus-visible:outline-none'},
    }

  })
  const MenuBar = ({editor}:{editor:Editor | null} ) =>{
    if(!editor) return null
    return (
      <div className="control-group sticky top-0 p-2 z-10 bg-inherit border rounded-md border-gray-300">
        <div className="flex gap-2">
          <span>{props.title}</span>


          <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
            H1
          </button>

          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
            H2
          </button>


          <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
            H3
          </button>


          <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
            Paragraph
          </button>
          
          <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
            Strike
          </button>
          <button onClick={() => editor.chain().focus().setHorizontalRule().run() } className={editor.isActive('highlight') ? 'is-active' : ''}>
            Highlight
          </button>
          <button onClick={() => editor.chain().focus().setColumns(3).run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
            col
          </button>
        </div>
      </div>
    )
  }
  return <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-lime-300 dark:bg-gray600 bg-gray100 w-full h-full flex-col relative'>
    <MenuBar editor={editor} />
    <EditorContent className=' h-full w-full' editor={editor} />
  </div>
}

export default Tiptap