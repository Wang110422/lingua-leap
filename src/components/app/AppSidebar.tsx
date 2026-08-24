import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Users, Library, Route as RouteIcon, ScanLine, Trash2, Bell, BookOpenText } from "lucide-react";

const items = [
  { to: "/", label: "Trang chủ", icon: Home },
  { to: "/groups", label: "Nhóm học", icon: Users },
  { to: "/library", label: "Thư viện của bạn", icon: Library },
  { to: "/roadmap", label: "Lộ trình học", icon: RouteIcon },
  { to: "/scan", label: "Quét tài liệu", icon: ScanLine },
  { to: "/trash", label: "Đã xóa", icon: Trash2 },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col bg-sidebar px-4 py-5 text-sidebar-foreground lg:flex">
      <Link to="/" className="mb-8 flex items-center gap-3 px-2">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground">
          <BookOpenText className="h-6 w-6" />
        </span>
        <span>
          <span className="block font-display text-xl font-bold leading-none">LingoMaster</span>
          <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-sidebar-foreground/60">
            Học từ vựng
          </span>
        </span>
      </Link>

      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
              isActive(item.to)
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-pop"
                : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="h-[18px] w-[18px]" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 rounded-2xl bg-sidebar-accent p-3">
        <button
          type="button"
          aria-label="Thông báo"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sidebar/60 text-sidebar-foreground/80 transition-colors hover:text-sidebar-accent-foreground"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sidebar-primary bg-sidebar font-display font-bold text-sidebar-foreground">
          C
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">Chan Wo Sin</span>
          <span className="block text-[11px] text-sidebar-foreground/60">Bản Pro</span>
        </span>
      </div>
    </aside>
  );
}
