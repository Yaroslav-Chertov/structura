"use client";

import React, { useCallback, useMemo, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./MonthlyPlannerShowcase.module.scss";

type HabitRow = {
  name: string;
  days: boolean[];
};

type ReflectionFields = {
  wins: string;
  improve: string;
  insight: string;
  focus: string;
};

type MonthlyState = {
  month: string;
  year: string;
  goals: { text: string; done: boolean }[];
  habits: HabitRow[];
  reflection: ReflectionFields;
};

const MONTH_DAYS = Array.from({ length: 31 }, (_, index) => index + 1);

const INITIAL_STATE: MonthlyState = {
  month: "Май",
  year: "2026",
  goals: [
    { text: "Спокойный ритм", done: true },
    { text: "3 тренировки", done: false },
    { text: "Дочитать книгу", done: false },
    { text: "Разобрать финансы", done: true },
    { text: "", done: false },
  ],
  habits: [
    {
      name: "Вода",
      days: [
        true, true, false, true, true, false, true, true, false, true, true,
        true, false, true, true, false, true, true, false, true, true, true,
        false, true, false, true, true, false, true, true, false,
      ],
    },
    {
      name: "Чтение",
      days: [
        true, false, false, true, false, true, false, true, false, false, true,
        true, false, false, true, false, true, false, false, true, false,
        true, false, false, true, false, true, true, false, false, true,
      ],
    },
    {
      name: "Движение",
      days: [
        false, true, false, false, true, false, false, true, false, true,
        false, false, true, false, false, true, false, false, true, false,
        true, false, false, true, false, false, true, false, true, false,
        false,
      ],
    },
    {
      name: "Без телефона перед сном",
      days: [
        false, false, true, true, false, false, true, false, true, false,
        false, true, true, false, false, true, false, true, false, false,
        true, true, false, true, false, false, true, false, true, false,
        false,
      ],
    },
    {
      name: "",
      days: Array(31).fill(false),
    },
    {
      name: "",
      days: Array(31).fill(false),
    },
  ],
  reflection: {
    wins: "Лучше держал ритм, когда заранее видел весь месяц целиком.",
    improve:
      "Меньше перегружать отдельные дни и заранее оставлять место на отдых.",
    insight:
      "Стабильность появляется не от идеального плана, а от простых повторяемых действий.",
    focus:
      "Сделать месяц спокойнее и чуть устойчивее, чем предыдущий.",
  },
};

function ToggleBox({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.toggleBox} ${checked ? styles.toggleBoxChecked : ""}`}
      aria-pressed={checked}
      onClick={onToggle}
    >
      {checked ? "✓" : ""}
    </button>
  );
}

export default function MonthlyPlannerShowcase() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const cardRef = useScrollAnimation<HTMLDivElement>(0.08);
  const [state, setState] = useState(INITIAL_STATE);

  const toggleGoal = useCallback((index: number) => {
    setState((current) => ({
      ...current,
      goals: current.goals.map((goal, goalIndex) =>
        goalIndex === index ? { ...goal, done: !goal.done } : goal,
      ),
    }));
  }, []);

  const setGoalText = useCallback((index: number, text: string) => {
    setState((current) => ({
      ...current,
      goals: current.goals.map((goal, goalIndex) =>
        goalIndex === index ? { ...goal, text } : goal,
      ),
    }));
  }, []);

  const toggleHabitDay = useCallback((habitIndex: number, dayIndex: number) => {
    setState((current) => ({
      ...current,
      habits: current.habits.map((habit, currentHabitIndex) =>
        currentHabitIndex === habitIndex
          ? {
              ...habit,
              days: habit.days.map((value, currentDayIndex) =>
                currentDayIndex === dayIndex ? !value : value,
              ),
            }
          : habit,
      ),
    }));
  }, []);

  const setHabitName = useCallback((habitIndex: number, name: string) => {
    setState((current) => ({
      ...current,
      habits: current.habits.map((habit, currentHabitIndex) =>
        currentHabitIndex === habitIndex ? { ...habit, name } : habit,
      ),
    }));
  }, []);

  const setReflection = useCallback(
    (field: keyof ReflectionFields, value: string) => {
      setState((current) => ({
        ...current,
        reflection: { ...current.reflection, [field]: value },
      }));
    },
    [],
  );

  const goalStats = useMemo(() => {
    const filled = state.goals.filter((goal) => goal.text.trim() !== "");
    const done = filled.filter((goal) => goal.done).length;
    return `${done}/${filled.length || state.goals.length}`;
  }, [state.goals]);

  const chartData = useMemo(
    () =>
      state.habits
        .map((habit) => ({
          name: habit.name.trim() || "Новая привычка",
          completedDays: habit.days.filter(Boolean).length,
          isEmpty: habit.name.trim() === "",
        }))
        .slice(0, 4),
    [state.habits],
  );

  return (
    <section ref={sectionRef} data-animate className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Что еще есть в планере</h2>
        <p className={styles.subtitle}>
          Помимо недельного режима внутри есть месячный обзор: привычки, цели и
          короткая рефлексия. Ниже встроено демо, а сам планер после покупки
          открывается в Google Таблицах.
        </p>
      </div>

      <div ref={cardRef} data-animate data-delay="1" className={styles.shell}>
        <div className={styles.planner}>
          <div className={styles.header}>
            <span className={styles.plannerTitle}>
              🏆 STRUCTURA — Месячный трекер привычек
            </span>
          </div>

          <div className={styles.monthMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Мес</span>
              <span className={styles.metaValue}>{state.month}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Год</span>
              <span className={styles.metaValue}>{state.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Цели</span>
              <span className={styles.metaValue}>{goalStats}</span>
            </div>
          </div>

          <div className={styles.gridScroller}>
            <div className={styles.habitsGrid}>
              <div className={styles.gridHead}>
                <span className={styles.habitHead}>Привычки</span>
                {MONTH_DAYS.map((day) => (
                  <span key={day} className={styles.dayHead}>
                    {day}
                  </span>
                ))}
                <span className={styles.totalHead}>Итог</span>
              </div>

              {state.habits.map((habit, habitIndex) => {
                const completedDays = habit.days.filter(Boolean).length;

                return (
                  <div key={habitIndex} className={styles.habitRow}>
                    <input
                      className={styles.habitInput}
                      value={habit.name}
                      onChange={(event) =>
                        setHabitName(habitIndex, event.target.value)
                      }
                      placeholder={`Привычка ${habitIndex + 1}`}
                    />
                    {habit.days.map((checked, dayIndex) => (
                      <span key={dayIndex} className={styles.dayCell}>
                        <ToggleBox
                          checked={checked}
                          onToggle={() => toggleHabitDay(habitIndex, dayIndex)}
                        />
                      </span>
                    ))}
                    <span className={styles.totalCell}>
                      {completedDays}/{MONTH_DAYS.length}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.goalsCard}>
              <div className={styles.blockTitle}>Цели на месяц</div>
              {state.goals.map((goal, goalIndex) => (
                <div key={goalIndex} className={styles.goalRow}>
                  <span className={styles.goalNumber}>{goalIndex + 1}.</span>
                  <input
                    className={styles.goalInput}
                    value={goal.text}
                    onChange={(event) =>
                      setGoalText(goalIndex, event.target.value)
                    }
                    placeholder={`Цель ${goalIndex + 1}`}
                  />
                  <ToggleBox
                    checked={goal.done}
                    onToggle={() => toggleGoal(goalIndex)}
                  />
                </div>
              ))}
            </div>

            <div className={styles.reflectionCard}>
              <div className={styles.blockTitle}>Итоги и рефлексия месяца</div>
              <label className={styles.textField}>
                <span>Что получилось хорошо?</span>
                <textarea
                  value={state.reflection.wins}
                  onChange={(event) =>
                    setReflection("wins", event.target.value)
                  }
                  rows={3}
                />
              </label>
              <label className={styles.textField}>
                <span>Что улучшить в следующем месяце?</span>
                <textarea
                  value={state.reflection.improve}
                  onChange={(event) =>
                    setReflection("improve", event.target.value)
                  }
                  rows={3}
                />
              </label>
              <label className={styles.textField}>
                <span>Главный инсайт месяца</span>
                <textarea
                  value={state.reflection.insight}
                  onChange={(event) =>
                    setReflection("insight", event.target.value)
                  }
                  rows={3}
                />
              </label>
              <label className={styles.textField}>
                <span>Фокус на следующий месяц</span>
                <textarea
                  value={state.reflection.focus}
                  onChange={(event) =>
                    setReflection("focus", event.target.value)
                  }
                  rows={3}
                />
              </label>
            </div>

            <div className={styles.chartCard}>
              <div className={styles.blockTitle}>Активность за месяц</div>
              <div className={styles.chartList}>
                {chartData.map((item) => (
                  <div key={item.name} className={styles.chartRow}>
                    <span
                      className={`${styles.chartLabel} ${item.isEmpty ? styles.chartLabelMuted : ""}`}
                    >
                      {item.name}
                    </span>
                    <div className={styles.chartBarTrack}>
                      <div
                        className={styles.chartBarFill}
                        style={{
                          width: `${(item.completedDays / MONTH_DAYS.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className={styles.chartValue}>{item.completedDays}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
