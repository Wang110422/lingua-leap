import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpenText, CheckCircle2, Layers, Play, SlidersHorizontal, Sparkles } from "lucide-react";

import { PageHeader, SectionTitle } from "@/components/app/PageHeader";
import { BtnOutline, BtnPrimary, EmojiTile, Pill, TabPill } from "@/components/app/ui-bits";
import {
  grammarStudySets,
  lessonGroups,
  skillTabs,
  vocabStudySets,
  type SkillKey,
} from "@/data/mock";

type TabKey = SkillKey | "vocab" | "grammar";
type LevelFilter = "all" | "Cơ bản" | "Trung bình" | "Nâng cao";

const tabs: { id: TabKey; name: string; emoji: string }[] = [
  ...skillTabs.map((s) => ({ id: s.id as TabKey, name: s.name, emoji: s.emoji })),
  { id: "vocab", name: "Từ vựng", emoji: "📚" },
  { id: "grammar", name: "Ngữ pháp", emoji: "🔤" },
];

const levelFilters: { id: LevelFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "Cơ bản", label: "Cơ bản" },
  { id: "Trung bình", label: "Trung bình" },
  { id: "Nâng cao", label: "Nâng cao" },
];

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Bài học — LingoMaster" },
      {
        name: "description",
        content:
          "Bài học Aptis theo 6 mục: Nghe, Nói, Đọc, Viết, Từ vựng và Ngữ pháp kèm mẹo làm từng nhóm câu.",
      },
      { property: "og:title", content: "Bài học — LingoMaster" },
      {
        property: "og:description",
        content: "Học mẹo từng nhóm câu và ôn theo bộ từ vựng, bộ ngữ pháp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LessonsPage,
});

function setDifficulty(level: string): LevelFilter {
  if (level.includes("A2") || level === "B1") return "Cơ bản";
  if (level.includes("C1")) return "Nâng cao";
  return "Trung bình";
}

function LessonsPage() {
  const [tab, setTab] = useState<TabKey>("listening");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const isSet = tab === "vocab" || tab === "grammar";
  const sets = (tab === "grammar" ? grammarStudySets : vocabStudySets).filter(
    (s) => levelFilter === "all" || setDifficulty(s.level) === levelFilter,
  );
  const groups = isSet
    ? []
    : lessonGroups[tab as SkillKey].filter((g) => levelFilter === "all" || g.level === levelFilter);

  return (
    <div className="space-y-6">
      <PageHeader
        icon={BookOpenText}
        title="Bài học"
        description="Học mẹo làm bài theo từng nhóm câu, ôn từ vựng và ngữ pháp theo bộ."
        actions={
          <Link to="/exam-practice">
            <BtnPrimary>
              <Sparkles className="h-4 w-4" /> Sang luyện đề
            </BtnPrimary>
          </Link>
        }
      />

      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <TabPill key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            <span>{t.emoji}</span> {t.name}
          </TabPill>
        ))}
      </div>

      <div className="surface-card space-y-3 p-5">
        <div className="flex items-center gap-2 text-sm font-bold text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Bộ lọc bài học
        </div>
        <div className="flex flex-wrap gap-2">
          {levelFilters.map((f) => (
            <TabPill
              key={f.id}
              active={levelFilter === f.id}
              onClick={() => setLevelFilter(f.id)}
              className="h-9 px-3 text-xs"
            >
              {f.label}
            </TabPill>
          ))}
        </div>
      </div>

      {isSet ? (
        <>
          <SectionTitle
            title={tab === "grammar" ? "Bộ ngữ pháp" : "Bộ từ vựng"}
            badge={`${sets.length} bộ`}
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {sets.map((s) => (
              <article key={s.id} className="surface-card flex flex-col gap-3 p-5">
                <div className="flex items-start gap-3">
                  <EmojiTile>{s.emoji}</EmojiTile>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Pill tone="muted">
                    <Layers className="h-3.5 w-3.5" />{" "}
                    {tab === "grammar" ? `${s.items} chủ điểm` : `${s.items} từ`}
                  </Pill>
                  <Pill tone="info">{s.level}</Pill>
                </div>
                <Link
                  to={tab === "grammar" ? "/grammar/$setId" : "/sets/$setId"}
                  params={{ setId: s.id }}
                  className="mt-auto"
                >
                  <BtnPrimary className="h-10 w-full">
                    <Play className="h-4 w-4" /> Học bộ này
                  </BtnPrimary>
                </Link>
              </article>
            ))}
          </div>
        </>
      ) : (
        <>
          <SectionTitle title="Danh sách bài học" badge={`${groups.length} nhóm`} />
          <div className="grid gap-5 xl:grid-cols-2">
            {groups.map((g) => (
              <article
                key={g.id}
                className="overflow-hidden rounded-3xl border border-border bg-muted/40"
              >
                <div className="bg-primary px-6 py-5 text-primary-foreground">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-bold">{g.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                        {g.summary}
                      </p>
                    </div>
                    <Pill tone={g.level === "Cơ bản" ? "success" : g.level === "Nâng cao" ? "danger" : "warning"}>
                      {g.level}
                    </Pill>
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  {g.tips.map((tip) => (
                    <div
                      key={tip}
                      className="flex items-start gap-3 rounded-2xl bg-card px-4 py-3.5 text-sm font-semibold"
                    >
                      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-none text-success" />
                      <span>{tip}</span>
                    </div>
                  ))}
                  <BtnOutline className="h-11 !border-primary !text-primary">
                    <BookOpenText className="h-4 w-4" /> {g.cta}
                  </BtnOutline>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
