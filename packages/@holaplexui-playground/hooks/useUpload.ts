import { useState } from 'react';
import {
  DropzoneInputProps,
  DropzoneRootProps,
  useDropzone
} from 'react-dropzone';

interface UploadContext {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  isDragActive: boolean;
  droppedFiles: File[] | null;
}

export default function useUpload(): UploadContext {
  const [droppedFiles, setDroppedFiles] = useState<File[] | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/svg': ['.svg']
    },
    maxSize: 2 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setDroppedFiles(acceptedFiles);
      }
    }
  });

  return {
    getInputProps,
    getRootProps,
    isDragActive,
    droppedFiles
  };
}
