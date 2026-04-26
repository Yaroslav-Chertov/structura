"use client";

import React, { useState, useCallback } from "react";
import styles from "./PlannerDemo.module.scss";

type DayKey = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";
type EnergyLevel = "Низкая" | "Средняя" | "Высокая";
type MoodLevel = "Нейтрально" | "Хорошо" | "Отлично";
type SleepLevel = "6-7 ч" | "7-8 ч" | "8+ ч";

interface DayTask {
  text: string;
  done: boolean;
}

interface DiaryEntry {
  sleep: SleepLevel;
  energy: EnergyLevel;
  mood: MoodLevel;
  thoughts: string;
  positives: string;
}

interface PlannerState {
  weekGoals: string[];
  weekGoalsDone: boolean[];
  startDate: string;
  tasks: Record<DayKey, DayTask[]>;
  habits: { name: string; days: Record<DayKey, boolean> }[];
  diary: Record<DayKey, DiaryEntry>;
}

const DAYS: DayKey[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const DAY_DATES: Record<DayKey, string> = {
  Пн: "13.04",
  Вт: "14.04",
  Ср: "15.04",
  Чт: "16.04",
  Пт: "17.04",
  Сб: "18.04",
  Вс: "19.04",
};
const WEEKEND: DayKey[] = ["Сб", "Вс"];

const INITIAL_STATE: PlannerState = {
  weekGoals: ["Сделать 40 откликов", "1-2 собеса", "Закончить проект", "", ""],
  weekGoalsDone: [true, false, false, false, false],
  startDate: "13.04.2026",
  tasks: {
    Пн: [
      { text: "Отклики (5 шт)", done: true },
      { text: "Задачи по проекту", done: true },
      { text: "Повторить теорию", done: false },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Вт: [
      { text: "Отклики (5 шт)", done: true },
      { text: "Английский", done: true },
      { text: "Тренировка", done: true },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Ср: [
      { text: "Отклики (5 шт)", done: true },
      { text: "Задачи по проекту", done: false },
      { text: "15 минут чтения", done: true },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Чт: [
      { text: "Отклики (5 шт)", done: true },
      { text: "Тренировка", done: false },
      { text: "Задачи по проекту", done: true },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Пт: [
      { text: "Отклики (5 шт)", done: true },
      { text: "Задачи по проекту", done: true },
      { text: "Английский", done: true },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Сб: [
      { text: "Тренировка", done: true },
      { text: "Уборка дома", done: false },
      { text: "", done: false },
      { text: "", done: false },
      { text: "", done: false },
    ],
    Вс: [
      { text: "Отдых", done: true },
      { text: "", done: false },
      { text: "", done: false },
      { text: "", done: false },
      { text: "", done: false },
    ],
  },
  habits: [
    {
      name: "Прогулка на обеде",
      days: {
        Пн: true,
        Вт: true,
        Ср: true,
        Чт: true,
        Пт: true,
        Сб: true,
        Вс: true,
      },
    },
    {
      name: "Книга",
      days: {
        Пн: true,
        Вт: false,
        Ср: true,
        Чт: true,
        Пт: false,
        Сб: false,
        Вс: true,
      },
    },
    {
      name: "Duolingo",
      days: {
        Пн: true,
        Вт: true,
        Ср: true,
        Чт: true,
        Пт: true,
        Сб: true,
        Вс: true,
      },
    },
    {
      name: "Соблюдать режим сна",
      days: {
        Пн: false,
        Вт: false,
        Ср: true,
        Чт: true,
        Пт: false,
        Сб: true,
        Вс: true,
      },
    },
    {
      name: "",
      days: {
        Пн: false,
        Вт: false,
        Ср: false,
        Чт: false,
        Пт: false,
        Сб: false,
        Вс: false,
      },
    },
  ],
  diary: {
    Пн: {
      sleep: "7-8 ч",
      energy: "Средняя",
      mood: "Хорошо",
      thoughts: "Норм день.",
      positives: "Был собес во фронт, сделал тестовое, сходили в кино",
    },
    Вт: {
      sleep: "6-7 ч",
      energy: "Средняя",
      mood: "Нейтрально",
      thoughts: "Чуть устал, но держал фокус на важном.",
      positives: "Доделал проект",
    },
    Ср: {
      sleep: "7-8 ч",
      energy: "Высокая",
      mood: "Хорошо",
      thoughts: "Хороший день.",
      positives: "Прогулка в середине дня заметно перезагрузила",
    },
    Чт: {
      sleep: "7-8 ч",
      energy: "Средняя",
      mood: "Нейтрально",
      thoughts: "День плотный.",
      positives: "Был созвон с HR, жду оффер.",
    },
    Пт: {
      sleep: "7-8 ч",
      energy: "Средняя",
      mood: "Хорошо",
      thoughts: "Приятное ощущение завершенности перед выходными.",
      positives: "Сходили в уютный ресторан",
    },
    Сб: {
      sleep: "8+ ч",
      energy: "Высокая",
      mood: "Отлично",
      thoughts: "Выспался наконец.",
      positives: "Начал второй проект",
    },
    Вс: {
      sleep: "8+ ч",
      energy: "Средняя",
      mood: "Хорошо",
      thoughts: "Сегодня отдыхаю.",
      positives: "Запланировал дела на след неделю",
    },
  },
};

function getDayProgress(tasks: DayTask[]): number {
  const filled = tasks.filter((t) => t.text.trim() !== "");
  if (filled.length === 0) return 0;
  const done = filled.filter((t) => t.done);
  return Math.round((done.length / filled.length) * 100);
}

function getHabitPercent(days: Record<DayKey, boolean>): number {
  const done = DAYS.filter((d) => days[d]).length;
  return Math.round((done / 7) * 100);
}

function getTotalStats(tasks: Record<DayKey, DayTask[]>) {
  let total = 0,
    done = 0;
  DAYS.forEach((d) => {
    const filled = tasks[d].filter((t) => t.text.trim() !== "");
    total += filled.length;
    done += filled.filter((t) => t.done).length;
  });
  return { total, done };
}

function getGoalsFilled(goals: string[], done: boolean[]): string {
  const filled = goals.filter((g) => g.trim() !== "").length;
  return `${done.filter((d, i) => d && goals[i].trim() !== "").length} из ${filled || 5}`;
}

function Checkbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <span
      className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ""}`}
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onChange();
        }
      }}
    >
      {checked && (
        <svg viewBox="0 0 10 8" fill="none">
          <polyline
            points="1,4 4,7 9,1"
            stroke="#000"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function MiniSelect<T extends string>({
  value,
  options,
  onChange,
  className,
}: {
  value: T;
  options: T[];
  onChange: (v: T) => void;
  className?: string;
}) {
  return (
    <select
      className={`${styles.miniSelect} ${className || ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function BarChart({ tasks }: { tasks: Record<DayKey, DayTask[]> }) {
  const maxVal = 5;
  return (
    <div className={styles.chartWrap}>
      <svg viewBox="0 0 280 110" className={styles.chartSvg} aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="24"
            y1={90 - i * 26}
            x2="276"
            y2={90 - i * 26}
            stroke="#333"
            strokeWidth="0.5"
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <text
            key={i}
            x="18"
            y={93 - i * 26}
            textAnchor="end"
            fontSize="7"
            fill="#666"
          >
            {i}
          </text>
        ))}
        {DAYS.map((day, di) => {
          const filled = tasks[day].filter((t) => t.text.trim() !== "");
          const done = filled.filter((t) => t.done).length;
          const total = filled.length;
          const bw = 16,
            gap = 34,
            x = 28 + di * gap;
          const doneH = (done / maxVal) * 78;
          const totalH = (total / maxVal) * 78;
          return (
            <g key={day}>
              <rect
                x={x}
                y={90 - totalH}
                width={bw}
                height={totalH}
                fill="#2d2d2d"
                rx="2"
              />
              <rect
                x={x}
                y={90 - doneH}
                width={bw}
                height={doneH}
                fill="#c6f135"
                rx="2"
              />
              <text
                x={x + bw / 2}
                y={104}
                textAnchor="middle"
                fontSize="7"
                fill={WEEKEND.includes(day) ? "#9a7bff" : "#888"}
              >
                {day}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

type Tab = "planner" | "diary" | "habits";

export default function PlannerDemo() {
  const [state, setState] = useState<PlannerState>(INITIAL_STATE);
  const [activeTab, setActiveTab] = useState<Tab>("planner");

  const toggleTask = useCallback((day: DayKey, idx: number) => {
    setState((s) => {
      const tasks = {
        ...s.tasks,
        [day]: s.tasks[day].map((t, i) =>
          i === idx ? { ...t, done: !t.done } : t,
        ),
      };
      return { ...s, tasks };
    });
  }, []);

  const toggleGoal = useCallback((idx: number) => {
    setState((s) => ({
      ...s,
      weekGoalsDone: s.weekGoalsDone.map((d, i) => (i === idx ? !d : d)),
    }));
  }, []);

  const toggleHabitDay = useCallback((hIdx: number, day: DayKey) => {
    setState((s) => {
      const habits = s.habits.map((h, i) =>
        i === hIdx ? { ...h, days: { ...h.days, [day]: !h.days[day] } } : h,
      );
      return { ...s, habits };
    });
  }, []);

  const updateDiary = useCallback(
    <K extends keyof DiaryEntry>(
      day: DayKey,
      field: K,
      value: DiaryEntry[K],
    ) => {
      setState((s) => ({
        ...s,
        diary: { ...s.diary, [day]: { ...s.diary[day], [field]: value } },
      }));
    },
    [],
  );

  const { total, done } = getTotalStats(state.tasks);
  const progress = total > 0 ? Math.round((done / total) * 100) : 0;
  const goalsFilled = getGoalsFilled(state.weekGoals, state.weekGoalsDone);

  return (
    <div className={styles.planner}>
      <div className={styles.plannerHeader}>
        <div className={styles.windowButtons}>
          <span className={`${styles.winBtn} ${styles.winClose}`} />
          <span className={`${styles.winBtn} ${styles.winMinimize}`} />
          <span className={`${styles.winBtn} ${styles.winMaximize}`} />
        </div>
        <span className={styles.plannerTitle}>🚀 Недельный планер</span>
        <div className={styles.tabs}>
          {(["planner", "diary", "habits"] as Tab[]).map((t) => (
            <button
              key={t}
              className={`${styles.tab} ${activeTab === t ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t === "planner"
                ? "Планер"
                : t === "diary"
                  ? "Дневник"
                  : "Привычки"}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "planner" && (
        <>
          <div className={styles.topRow}>
            <div className={styles.goalsBlock}>
              <div className={styles.dateRow}>
                <span className={styles.dateLabel}>Начальная дата</span>
                <span className={styles.dateValue}>{state.startDate}</span>
              </div>
              <div className={styles.goalsTitle}>Цели недели</div>
              {state.weekGoals.map((g, i) => (
                <div key={i} className={styles.goalRow}>
                  <span className={styles.goalNum}>{i + 1}.</span>
                  <span className={styles.goalInput}>
                    {g || `Цель ${i + 1}`}
                  </span>
                  <Checkbox
                    checked={state.weekGoalsDone[i]}
                    onChange={() => toggleGoal(i)}
                  />
                </div>
              ))}
            </div>

            <div className={styles.statsBlock}>
              <div className={styles.statsTitle}>Аналитика недели</div>
              <div className={styles.statsGrid}>
                <span>Всего задач</span>
                <span className={styles.statVal}>{total}</span>
                <span>Выполнено</span>
                <span className={styles.statVal}>{done}</span>
                <span>Прогресс недели</span>
                <span className={`${styles.statVal} ${styles.statAccent}`}>
                  {progress}%
                </span>
                <span>Цели заполнены</span>
                <span className={styles.statVal}>{goalsFilled}</span>
                <span>Начало недели</span>
                <span className={styles.statVal}>13.04</span>
                <span>Конец недели</span>
                <span className={styles.statVal}>19.04</span>
              </div>
            </div>

            <BarChart tasks={state.tasks} />
          </div>

          <div className={styles.dayGrid}>
            {DAYS.map((day) => {
              const pct = getDayProgress(state.tasks[day]);
              const isWk = WEEKEND.includes(day);
              return (
                <div
                  key={day}
                  className={`${styles.dayCol} ${isWk ? styles.dayColWeekend : ""}`}
                >
                  <div
                    className={`${styles.dayName} ${isWk ? styles.dayNameWeekend : ""}`}
                  >
                    {day}
                  </div>
                  <div className={styles.dayDate}>{DAY_DATES[day]}</div>
                  <div
                    className={`${styles.dayProgress} ${pct === 100 ? styles.dayProgressFull : ""}`}
                  >
                    {pct}% {pct >= 100 ? "✓" : ""}
                  </div>
                  {state.tasks[day].map((task, i) => (
                    <div key={i} className={styles.taskRow}>
                      <span className={styles.taskInput}>{task.text}</span>
                      <Checkbox
                        checked={task.done}
                        onChange={() => toggleTask(day, i)}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === "diary" && (
        <div className={styles.diaryWrap}>
          <div className={styles.diaryTitle}>Дневник состояния</div>
          <div className={styles.diaryTable}>
            <div className={styles.diaryHead}>
              <span>День</span>
              <span>Сон</span>
              <span>Энергия</span>
              <span>Настроение</span>
              <span>Мысли и ощущения</span>
              <span>Три позитивных момента</span>
            </div>
            {DAYS.map((day) => {
              const e = state.diary[day];
              const isWk = WEEKEND.includes(day);
              return (
                <div key={day} className={styles.diaryRow}>
                  <span
                    className={`${styles.diaryDay} ${isWk ? styles.diaryDayWeekend : ""}`}
                  >
                    {day}
                  </span>
                  <MiniSelect<SleepLevel>
                    value={e.sleep}
                    options={["6-7 ч", "7-8 ч", "8+ ч"]}
                    onChange={(v) => updateDiary(day, "sleep", v)}
                  />
                  <MiniSelect<EnergyLevel>
                    value={e.energy}
                    options={["Низкая", "Средняя", "Высокая"]}
                    onChange={(v) => updateDiary(day, "energy", v)}
                    className={
                      e.energy === "Высокая"
                        ? styles.energyHigh
                        : e.energy === "Средняя"
                          ? styles.energyMid
                          : ""
                    }
                  />
                  <MiniSelect<MoodLevel>
                    value={e.mood}
                    options={["Нейтрально", "Хорошо", "Отлично"]}
                    onChange={(v) => updateDiary(day, "mood", v)}
                    className={e.mood !== "Нейтрально" ? styles.moodGood : ""}
                  />
                  <span className={styles.diaryInput}>{e.thoughts}</span>
                  <span className={styles.diaryInput}>{e.positives}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "habits" && (
        <div className={styles.habitsWrap}>
          <div className={styles.habitsTitle}>Трекер полезных привычек</div>
          <div className={styles.habitsTable}>
            <div className={styles.habitsHead}>
              <span>Привычка</span>
              {DAYS.map((d) => (
                <span
                  key={d}
                  className={WEEKEND.includes(d) ? styles.weekendLabel : ""}
                >
                  {d}
                </span>
              ))}
              <span>% за нед.</span>
            </div>
            {state.habits.map((habit, hi) => {
              const pct = getHabitPercent(habit.days);
              return (
                <div key={hi} className={styles.habitRow}>
                  <span className={styles.habitNameInput}>
                    {habit.name || "Привычка..."}
                  </span>
                  {DAYS.map((day) => (
                    <span key={day} className={styles.habitCell}>
                      <Checkbox
                        checked={habit.days[day]}
                        onChange={() => toggleHabitDay(hi, day)}
                      />
                    </span>
                  ))}
                  <span
                    className={`${styles.habitPct} ${pct === 100 ? styles.habitPctFull : pct > 0 ? styles.habitPctPartial : ""}`}
                  >
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
