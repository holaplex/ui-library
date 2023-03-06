import {
  DropzoneInputProps,
  DropzoneRootProps,
  useDropzone
} from 'react-dropzone';

interface UploadContext {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  isDragActive: boolean;
}

export default function useUpload(): UploadContext {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/svg': ['.svg']
    },
    maxSize: 2 * 1024 * 1024
    // onDrop: (acceptedFiles) => {
    //   if (acceptedFiles.length > 0) {

    //   }
    // }
  });

  return {
    getInputProps,
    getRootProps,
    isDragActive
  };
}
