'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Plus, Image as ImageIcon, Video, ArrowUpFromLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import 'react-quill/dist/quill.bubble.css';
import { ReactQuillProps } from 'react-quill';

// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    const QuillComponent = ({
      forwardedRef,
      ...props
    }: ReactQuillProps & { forwardedRef: any }) => (
      <RQ ref={forwardedRef} {...props} />
    );
    return QuillComponent;
  },
  { ssr: false }
);

const PostWrite = () => {
  const [showAddBtns, setShowAddBtns] = useState(false);
  const [text, setText] = useState('');
  const quillRef = useRef<any>();

  const handleAddImageQuill = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input?.files ? input.files[0] : null;

      const quillObj = quillRef?.current?.getEditor();
      const unprivilegedEditor =
        quillRef?.current?.makeUnprivilegedEditor(quillObj);
      const range = unprivilegedEditor?.getSelection();

      //! Just for dev purpose, have to use image upload request to the api service and insert the secure image url
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          console.log(range);
          quillObj.editor.insertEmbed(range.index, 'image', e.target?.result); // Replace with secure image url from api response
        };
        fileReader.readAsDataURL(file);
      }
    };
  };
  return (
    <div className="flex flex-col md:px-[50px] lg:px-[100px] xl:px-[140px] h-[700px] relative">
      <input
        type="text"
        placeholder="Title"
        className="py-[36px] pr-[100px] text-5xl placeholder:text-[#b3b3b1] bg-transparent border-0 outline-0 ring-0 focus:outline-none focus:ring-0 font-bold"
      />
      <div className="flex items-start gap-[20px] h-[700px] relative">
        <button
          onClick={() => setShowAddBtns(!showAddBtns)}
          className="min-w-[36px] h-[36px] rounded-full bg-transparent border-textColor border-[1px] flex items-center justify-center cursor-pointer"
        >
          <Plus
            width={20}
            height={20}
            className={cn(
              'transition-all',
              showAddBtns ? 'rotate-45' : 'rotate-0'
            )}
          />
        </button>
        {showAddBtns && (
          <div className="flex items-center gap-[14px] z-20 absolute left-[50px]">
            <button
              className="w-[36px] h-[36px] rounded-full bg-transparent border-green-600 border-[1px] flex items-center justify-center cursor-pointer"
              onClick={handleAddImageQuill}
            >
              <ImageIcon width={20} height={20} className="text-green-600" />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border-green-600 border-[1px] flex items-center justify-center cursor-pointer">
              <Video width={20} height={20} className="text-green-600" />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-transparent border-green-600 border-[1px] flex items-center justify-center cursor-pointer">
              <ArrowUpFromLine
                width={20}
                height={20}
                className="text-green-600"
              />
            </button>
          </div>
        )}
        <ReactQuill
          forwardedRef={quillRef}
          className="w-full"
          theme="bubble"
          value={text}
          onChange={setText}
          placeholder="Tell about your story..."
        />
      </div>
      <Button variant="success" className="absolute top-[44px] right-0">
        Publish
      </Button>
    </div>
  );
};
export default PostWrite;
