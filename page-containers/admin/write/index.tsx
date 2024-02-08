'use client';
import './write.css';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Plus, Image as ImageIcon, Video, ArrowUpFromLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReactQuillProps, Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import { Input } from '@/components/ui/input';
import { useCreateBlogs } from '@/services/blog';
import { SingleImageDropzone } from '@/components/ui/imageDropZone';
import { useEdgeStore } from '@/lib/edgestore';
import 'react-quill/dist/quill.bubble.css';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { useGetCategory } from '@/services/category';
import { GetAllCateogriesResponse } from '@/types/category';

Quill.register('modules/imageResize', ImageResize);

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

const quillModules = {
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize'],
  },
};

const PostWrite: React.FC = () => {
  const { trigger: createBlog, isMutating } = useCreateBlogs();
  const [isCoverImageUploading, setIsCoverImageUploading] =
    useState<boolean>(false);
  const { data, isLoading } = useGetCategory<GetAllCateogriesResponse>();
  const { edgestore } = useEdgeStore();
  const [showAddBtns, setShowAddBtns] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const quillRef = useRef<any>();
  const [title, setTitle] = useState<string>('');
  const [imageFile, setImageFile] = useState<File>();

  const handleAddImageQuill = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input?.files ? input.files[0] : null;

      const quillObj = quillRef?.current?.getEditor();
      const range = quillRef?.current?.getEditorSelection();

      //! Just for dev purpose, have to use image upload request to the api service and insert the secure image url
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          quillObj.editor.insertEmbed(
            range?.index ?? 0,
            'image',
            e?.target?.result
          ); // Replace with secure image url from api response
          quillObj.editor.insertEmbed(
            range?.index + 1,
            'block',
            '<p><br /></p>'
          );
        };
        fileReader.readAsDataURL(file);
      }
    };
  };

  const postBlog = async () => {
    setIsCoverImageUploading(true);
    if (imageFile) {
      const res = await edgestore.publicFiles.upload({
        file: imageFile,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
          if (progress === 100) {
            setIsCoverImageUploading(false);
          }
        },
      });

      await createBlog({
        title,
        email: 'email@email.com',
        desc: text,
        image: res.url,
        categoryId: selectedCategory,
      });
    }
  };

  return (
    <div className="flex w-full flex-col flex-wrap gap-y-5 px-8 relative">
      {(isMutating || isCoverImageUploading) && (
        <div className="absolute inset-0 bg-slate-600/60 flex items-center justify-center">
          Loading...
        </div>
      )}
      <div className="flex items-center flex-wrap">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="py-[36px] flex-1 w-full text-3xl md:text-4xl placeholder:text-[#b3b3b1] bg-transparent border-0 outline-0 ring-0 focus:outline-none focus:ring-0 font-bold"
        />
        <Button variant="success" onClick={() => postBlog()}>
          Publish
        </Button>
      </div>
      <div className="w-full flex px-2 relative">
        <SingleImageDropzone
          className="md:mx-0 mx-auto"
          width={500}
          height={250}
          value={imageFile}
          onChange={(file) => {
            setImageFile(file);
          }}
        />
      </div>
      <div className="flex gap-[10px] items-start">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <div className="flex flex-col gap-1">
            <label>Category </label>
            <SelectTrigger className="w-[200px] !bg-white">
              <SelectValue
                placeholder="Choose your category"
                className="capitalize"
              />
            </SelectTrigger>
          </div>
          <SelectContent>
            {data?.data.map((c) => {
              return (
                <SelectItem key={c.id} value={c.id} className="capitalize">
                  {c.category}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-1 lg:flex-1">
          <label>Youtube Link</label>
          <Input
            placeholder="Please enter youtube link"
            className="border-[1px]"
          />
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowAddBtns(!showAddBtns)}
          className="min-w-[36px] h-[36px] rounded-full bg-white border-textColor border-[1px] flex items-center justify-center cursor-pointer"
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
          <div className="flex items-center gap-[10px] z-20 absolute left-[50px] top-0">
            <button
              className="w-[36px] h-[36px] rounded-full bg-white border-green-600 border-[1px] flex items-center justify-center cursor-pointer"
              onClick={handleAddImageQuill}
            >
              <ImageIcon width={20} height={20} className="text-green-600" />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-white border-green-600 border-[1px] flex items-center justify-center cursor-pointer">
              <Video width={20} height={20} className="text-green-600" />
            </button>
            <button className="w-[36px] h-[36px] rounded-full bg-white border-green-600 border-[1px] flex items-center justify-center cursor-pointer">
              <ArrowUpFromLine
                width={20}
                height={20}
                className="text-green-600"
              />
            </button>
          </div>
        )}
      </div>
      <div className="flex items-start gap-[10px] -mt-2 min-h-[400px] relative">
        <ReactQuill
          forwardedRef={quillRef}
          className="w-full"
          theme="bubble"
          value={text}
          onChange={setText}
          placeholder="Tell about your story..."
          modules={quillModules}
        />
      </div>
    </div>
  );
};

export default PostWrite;
