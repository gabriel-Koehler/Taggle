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
      attributes:{class:'size-96 focus-visible:outline-none'},
    }

  })
  const MenuBar = ({editor}:{editor:Editor | null} ) =>{
    if(!editor) return null
    return (
      <div className="control-group">
        <div className="flex gap-2">
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
  return <div className='w-full flex-col '>
  <MenuBar editor={editor} />
  <EditorContent className='size-96 ' editor={editor} />
  </div>
}

export default Tiptap