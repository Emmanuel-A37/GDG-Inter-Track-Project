import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 24, className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 
        size={size} 
        className="animate-spin text-blue-500" 
      />
    </div>
  );
};

export default LoadingSpinner;
