import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Users,
  Library,
  Route as RouteIcon,
  ScanLine,
  Trash2,
  BookOpenText,
  Crown,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";

const items = [
  { to: "/", label: "Trang chủ", icon: Home },
  { to: "/groups", label: "Nhóm học", icon: Users },
  { to: "/library", label: "Thư viện của bạn", icon: Library },
  { to: "/roadmap", label: "Lộ trình học", icon: RouteIcon },
  { to: "/scan", label: "Quét tài liệu", icon: ScanLine },
  { to: "/trash", label: "Đã xóa", icon: Trash2 },
];

const secondaryItems = [
  { label: "Trợ giúp", icon: HelpCircle },
  { label: "Cài đặt", icon: Settings },
  { label: "Đăng xuất", icon: LogOut },
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

      <div className="mt-6 rounded-2xl border border-sidebar-border bg-sidebar-accent/70 p-4 text-center">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-sidebar-foreground/65">
          LingoMaster Pro
        </span>
        <button
          type="button"
          className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-sidebar-primary text-sm font-bold text-sidebar-primary-foreground shadow-pop transition hover:opacity-90"
        >
          <Crown className="h-4 w-4" />
          Nâng cấp Pro
        </button>
      </div>

      <div className="mt-auto flex flex-col gap-1 border-t border-sidebar-border pt-4">
        {secondaryItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <item.icon className="h-[18px] w-[18px]" />
            {item.label}
          </button>
        ))}

        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-sidebar-accent p-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sidebar-primary bg-sidebar font-display font-bold text-sidebar-foreground">
            C
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">Chan Wo Sin</span>
            <span className="block text-[11px] text-sidebar-foreground/60">Bản Pro</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
