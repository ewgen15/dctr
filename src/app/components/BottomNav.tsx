import { Home, Calendar, Stethoscope, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Головна', path: '/' },
    { icon: Calendar, label: 'Мої візити', path: '/visits' },
    { icon: Stethoscope, label: 'Послуги', path: '/services' },
    { icon: User, label: 'Профіль', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.1)] z-50">
      <div className="flex items-center justify-around px-5 py-4 max-w-[390px] mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-[#0B7A75]' : 'text-[#8C8C8C]'
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? 'text-[#0B7A75] font-medium' : 'text-[#8C8C8C]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
