const UploadSuccessIcon = ({ size = 128 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_success)">
        <path
          d="M0 64C0 28.6538 28.6538 0 64 0C99.3462 0 128 28.6538 128 64C128 99.3462 99.3462 128 64 128C28.6538 128 0 99.3462 0 64Z"
          fill="#1A73E8"
        />
        <path
          d="M56 75.125L84.25 46.875L88 50.625L56 82.625L41.125 67.75L44.875 64L56 75.125Z"
          fill="white"
        />
      </g>

      <defs>
        <clipPath id="clip0_success">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadSuccessIcon;
