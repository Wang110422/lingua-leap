import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutDashboard, Users, FileText, ScanLine, ArrowRight, Clock } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { Pill, Progress } from "@/components/app/ui-bits";
import { teacher, teacherActivity, teacherClasses, teacherExams, teacherStats } from "@/data/teacher";

export const Route = createFileRoute("/teacher/")({
  head: () => ({
    meta: [
      { title: "Bảng điều khiển giảng viên — LingoMaster" },
      { name: "description", content: "Tổng quan lớp học, đề thi, bài học và hoạt động sinh viên dành cho giảng viên." },
      { property: "og:title", content: "Bảng điều khiển giảng viên — LingoMaster" },
      { property: "og:description", content: "Quản lý lớp học, đề thi và tiến độ sinh viên trong một trang." },
    ],
  }),
  component: TeacherHome,
});

const shortcuts = [
  { to: "/teacher/classes", icon: Users, title: "Tạo lớp học", desc: "Sinh mã mời cho sinh viên tham gia." },
  { to: "/teacher/exams", icon: FileText, title: "Thêm đề thi", desc: "Tạo đề, chia phần thi và câu hỏi." },
  { to: "/teacher/scan", icon: ScanLine, title: "Quét tài liệu", desc: "Quét đề thi hoặc bộ từ vựng từ ảnh." },
] as const;

function TeacherHome() {
  return (
    <div className="space-y-8">
      <PageHeader
        icon={LayoutDashboard}
        title={`Xin chào ${teacher.name.split(" ").slice(-1)[0]}, chúc bạn buổi dạy hiệu quả`}
        description="Theo dõi lớp học, đề thi và tiến độ của sinh viên ở một nơi."
        actions={<Pill tone="info">{teacher.role}</Pill>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {teacherStats.map((s) => (
          <div key={s.label} className="surface-card p-5">
            <span className="text-lg">{s.emoji}</span>
            <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {shortcuts.map((s) => (
          <Link key={s.to} to={s.to} className="surface-card group p-5 transition hover:border-primary/50">
            <span className="icon-tile">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 flex items-center gap-2 font-bold">
              {s.title}
              <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>

      <section className="space-y-4">
        <SectionTitle
          icon={Users}
          title="Lớp đang dạy"
          badge={String(teacherClasses.filter((c) => c.status === "Đang mở").length)}
          right={
            <Link to="/teacher/classes" className="text-sm font-semibold text-primary hover:underline">
              Quản lý lớp →
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teacherClasses
            .filter((c) => c.status === "Đang mở")
            .map((c) => (
              <article key={c.id} className="surface-card p-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <div className="min-w-0">
                    <p className="truncate font-bold">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.term}</p>
                  </div>
                  <Pill className="ml-auto" tone="muted">
                    {c.code}
                  </Pill>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  {c.students} sinh viên · {c.assignments} bài đã giao
                </p>
                <div className="mt-2">
                  <Progress value={c.progress} />
                </div>
              </article>
            ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-4">
          <SectionTitle icon={FileText} title="Đề thi gần đây" />
          <div className="space-y-3">
            {teacherExams.slice(0, 4).map((e) => (
              <Link
                key={e.id}
                to="/teacher/exams/$examId"
                params={{ examId: e.id }}
                className="surface-card flex items-center gap-3 p-4 transition hover:border-primary/50"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{e.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.parts.length} phần · cập nhật {e.updated}
                  </p>
                </div>
                <Pill tone={e.status === "Đã phát hành" ? "success" : "warning"}>{e.status}</Pill>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle icon={Clock} title="Hoạt động mới" />
          <div className="surface-card divide-y divide-border p-2">
            {teacherActivity.map((a) => (
              <div key={a.id} className="px-3 py-3">
                <p className="text-sm">{a.text}</p>
                <p className="mt-1 text-xs text-muted-foreground">{a.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
