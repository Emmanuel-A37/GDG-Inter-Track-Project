import Button from "./Button";

const UploadCards = ({
  imageSrc,
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  return (
    <div className="mt-5 mb-6 rounded-xl border border-borderGrey">
      <div>
        <img
          src={imageSrc}
          alt={title}
          className="rounded-t-xl w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="font-bold text-lg text-dark mb-1">{title}</h2>
        <p className="text-[14px] text-[#617589] mb-10">{subtitle}</p>
        <div className="flex justify-center">
          <Button
            className="max-w-[286px] bg-primary text-white w-full flex items-center justify-center gap-2"
            onClick={onClick}
          >
            {buttonIcon && <img src={buttonIcon} alt="" />}
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadCards;
