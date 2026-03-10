import { Home, Calendar, PhoneForwarded, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Головна', path: '/' },
    { icon: Calendar, label: 'Мої візити', path: '/visits' },
    { icon: PhoneForwarded, label: 'Послуги', path: '/services' },
    { icon: User, label: 'Профіль', path: '/profile' },
  ];

  return (
    <div
      className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[383px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-t-lg bg-card py-3 shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)]"
    >
      <div className="flex items-center gap-9">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex min-w-[49px] flex-col items-center gap-1"
            >
              <Icon
                className={`size-6 shrink-0 ${
                  isActive ? 'text-primary' : 'text-foreground'
                }`}
              />
              <span
                className={`text-center text-xs font-medium leading-[18px] ${
                  isActive ? 'text-primary' : 'text-foreground'
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
