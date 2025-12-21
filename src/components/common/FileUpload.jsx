import React, { useState } from 'react';

const FileUpload = ({ onFileSelect, containerClassName = '' }) => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    onFileSelect?.(file);
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      <div className="h-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 flex flex-col justify-center">
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-48 rounded-lg object-contain"
            />
            <p className="text-sm text-gray-600">{fileName}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">
              Tap to upload picture
            </p>
            <p className="text-sm text-gray-500">
              Upload a picture of the building
            </p>
          </div>
        )}

        <label className="mt-4 inline-block">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors inline-block">
            Upload Picture
          </span>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
