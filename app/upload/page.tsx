'use client';

import { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloundinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="image" />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloundinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="tacxtrnf"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
