import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

export default function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-[390px] h-[844px] bg-white overflow-y-auto relative">
        {children}
      </div>
    </div>
  );
}
