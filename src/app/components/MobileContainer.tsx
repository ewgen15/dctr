import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

export default function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="relative h-[844px] w-[390px] overflow-y-auto overflow-x-hidden bg-white shadow-xl">
        {children}
      </div>
    </div>
  );
}
