'use client';

import { useState } from 'react';
import { initialTasks, getProgress, toggleTask, type TrainingTask } from '@/lib/training';

export default function TrainingDashboard() {
  const [tasks, setTasks] = useState<TrainingTask[]>(initialTasks);
  const { completed, total, percentage } = getProgress(tasks);

  function handleToggle(id: string) {
    setTasks((current) => toggleTask(current, id));
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark" aria-hidden="true">✦</span><span>BLACK BULLS <small>TRAINING COMMAND</small></span></div>
        <span className="top-label">MISSION 02 / PREPARATION</span>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal" /> THE CLOVER KINGDOM NEEDS YOU</p>
          <h1 id="page-title">THE FIGHT<br /><span>STARTS HERE.</span></h1>
          <p className="hero-desc">Lucifero is approaching. Asta, focus on the training you can control. Every completed task brings your preparation plan closer to finished.</p>
          <div className="hero-tag">ASTA&apos;S PREPARATION DASHBOARD</div>
        </div>
        <div className="hero-emblem" aria-hidden="true"><span>⚔</span><small>ANTI-MAGIC</small></div>
      </section>

      <div className="content-grid">
        <section className="tasks-panel" aria-labelledby="tasks-heading">
          <div className="section-top"><div><p className="eyebrow muted">YOUR NEXT MOVES</p><h2 id="tasks-heading">Training missions</h2></div><span className="count-pill">03 TASKS</span></div>
          <div className="task-list">
            {tasks.map((task, index) => (
              <article className={`task-card ${task.completed ? 'is-complete' : ''}`} key={task.id}>
                <div className="task-number">0{index + 1}</div>
                <div className="task-body">
                  <div className="task-heading"><h3>{task.title}</h3><span className={`priority ${task.priority.toLowerCase()}`}>{task.priority} priority</span></div>
                  <p>{task.description}</p>
                  <span className={`status ${task.completed ? 'done' : ''}`}>{task.completed ? '● Completed' : '○ Not completed'}</span>
                </div>
                <button type="button" className={`toggle ${task.completed ? 'toggle-done' : ''}`} onClick={() => handleToggle(task.id)} aria-label={`${task.completed ? 'Undo completion of' : 'Complete'} ${task.title}`} aria-pressed={task.completed}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="side-panel" aria-label="Preparation summary">
          <section className="progress-panel" aria-labelledby="progress-heading">
            <p className="eyebrow muted">MISSION STATUS</p>
            <h2 id="progress-heading">Your progress</h2>
            <div className="big-percent" aria-live="polite" aria-atomic="true">{percentage}<span>%</span></div>
            <div className="progress-track" role="progressbar" aria-label="Preparation-plan completion" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}><div className="progress-fill" style={{ width: `${percentage}%` }} /></div>
            <div className="progress-count"><strong>{completed} / {total}</strong><span>tasks completed</span></div>
            <p className="progress-note">This percentage measures <strong>training-plan completion</strong>, not the chance of winning a battle.</p>
          </section>
          <section className="threat-panel" aria-labelledby="threat-heading">
            <p className="eyebrow">THREAT INTELLIGENCE</p>
            <h2 id="threat-heading">LUCIFERO</h2>
            <span className="threat-type">GRAVITY MAGIC · POWERFUL DEVIL</span>
            <p>Lucifero&apos;s overwhelming gravity magic is a serious threat. Stay focused on the plan, one mission at a time.</p>
          </section>
        </aside>
      </div>
      <footer className="footer"><span>BLACK BULLS · TRAIN HARD. NEVER GIVE UP.</span><span>Progress resets when this page refreshes.</span></footer>
    </main>
  );
}
