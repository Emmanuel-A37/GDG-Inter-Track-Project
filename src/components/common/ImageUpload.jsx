import React, { useState, useEffect } from 'react';

const ImageUpload = ({
  onFileSelect,
  existingImage = '',

  // size props (Tailwind classes)
  containerSize = 'w-[280px] h-[236px]',
  previewSize = 'w-[248px] h-[162px]',
}) => {
  const [preview, setPreview] = useState(existingImage);

  useEffect(() => {
    setPreview(existingImage);
  }, [existingImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);

    onFileSelect?.(file);
  };

  return (
    <div
      className={`${containerSize} border border-gray-200 rounded-md bg-white p-4 flex flex-col gap-3`}
    >
      {/* Upload / Preview Area */}
      <label className={`${previewSize} mx-auto cursor-pointer`}>
        {preview ? (
          <img
            src={preview}
            alt="Cover"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg
                className="mx-auto h-10 w-10 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                />
              </svg>
              <p className="text-sm">Upload image</p>
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Footer */}
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-medium text-gray-700">
          Cover Image
        </span>

        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button className="px-6 py-3 rounded-lg font-medium flex items-center bg-blue-50 gap-2">
            <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Change
            </span>

            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9.92578V8.75H8.14844V9.92578H0ZM0 4.07422L4.07422 0L8.14844 4.07422H5.82422V7.57422H2.32422V4.07422H0Z"
                fill="#1A73E8"
              />
            </svg>
          </button>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
