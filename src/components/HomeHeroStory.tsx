"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const CA = {
  navy: "#0f172a",
  navy800: "#1e293b",
  blue: "#d946ef",
  blueLt: "#8b5cf6",
  blue100: "#f5d0fe",
  blue50: "#fdf4ff",
  teal: "#059669",
  teal500: "#10b981",
  teal50: "#f0fdfa",
  slate: "#475569",
  slate2: "#cbd5e1",
  border: "#e2e8f0",
  muted: "#f8fafc",
  white: "#ffffff",
  purple: "#7c3aed",
  purple100: "#ede9fe",
};

type Point = [number, number];
type PathSegment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  len: number;
  start: number;
};
type PathData = {
  points: Point[];
  segs: PathSegment[];
  total: number;
};
type IconName = keyof typeof Icon;
type PackageLane = "trust" | "audit" | "byoa";

const W = 1600;
const H = 920;
const VIEWBOX_X = -95;
const VIEWBOX_Y = -70;
const VIEWBOX_W = 1480;
const VIEWBOX_H = 1030;
const LOOP_SECONDS = 9;
const BELT_SPEED = 220;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function useLoopTime(duration: number, paused: boolean) {
  const [time, setTime] = useState(duration * 0.42);
  const frameRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) {
      return;
    }

    const step = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setTime((current) => (current + dt) % duration);
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lastTsRef.current = null;
    };
  }, [duration, paused]);

  return time;
}

function buildPath(points: Point[]): PathData {
  const segs: PathSegment[] = [];
  let total = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const len = Math.hypot(x2 - x1, y2 - y1);

    segs.push({ x1, y1, x2, y2, len, start: total });
    total += len;
  }

  return { points, segs, total };
}

function pointAt(path: PathData, u: number): Point {
  const target = u * path.total;

  for (const segment of path.segs) {
    if (target <= segment.start + segment.len) {
      const local = (target - segment.start) / segment.len;
      return [
        segment.x1 + (segment.x2 - segment.x1) * local,
        segment.y1 + (segment.y2 - segment.y1) * local,
      ];
    }
  }

  const last = path.segs[path.segs.length - 1];
  return [last.x2, last.y2];
}

function pathD(path: PathData) {
  const [first, ...rest] = path.points;
  return `M ${first[0]} ${first[1]} ${rest.map((point) => `L ${point[0]} ${point[1]}`).join(" ")}`;
}

function IconSvg({ name, x, y, size, color }: { name: IconName; x: number; y: number; size: number; color: string }) {
  return (
    <svg x={x} y={y} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {Icon[name]}
    </svg>
  );
}

const Icon = {
  cloud: <path d="M17.5 19a4.5 4.5 0 1 0-1.5-8.75 6 6 0 0 0-11.5 2.25 4 4 0 0 0 1 7.5z" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 13l3-3 3 3 4-5" />
    </>
  ),
  git: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 8.2v7.6" />
      <path d="M15.8 12c-3.5 0-6-2-7.6-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="2.5" />
      <path d="M12 3v4" />
      <circle cx="12" cy="3" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="9" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <path d="M2 13v3M22 13v3" />
      <path d="M9 17h6" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 4V7a2 2 0 0 1-1-2z" />
      <path d="M9 9h6M9 12h4" />
    </>
  ),
  userCheck: (
    <>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M3 20a7 7 0 0 1 14 0" />
      <path d="M16 11l2 2 4-4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  package: (
    <>
      <path d="M12 3l8 4v10l-8 4-8-4V7z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </>
  ),
} satisfies Record<string, ReactNode>;

const SX = 60;
const SY0 = 70;
const SW = 200;
const SH = 56;
const SGAP = 14;

const sources = [
  { key: "cloud", icon: "cloud", label: "Public Cloud (AWS)" },
  { key: "database", icon: "database", label: "Databases" },
  { key: "monitor", icon: "monitor", label: "Monitoring" },
  { key: "git", icon: "git", label: "Git Repos" },
  { key: "saas", icon: "shield", label: "SaaS & Other Tools" },
] satisfies { key: string; icon: IconName; label: string }[];

const sourcePos = sources.map((_, i) => ({ x: SX, y: SY0 + i * (SH + SGAP) }));
const sourceRight = (i: number): Point => [SX + SW, sourcePos[i].y + SH / 2];

const HOPPER_X = 360;
const BELT_Y = 360;
const SPLIT_X = 920;
const BAY_X = 1100;
const BAY_END = BAY_X - 14;
const TRUST_Y = 170;
const AUDIT_Y = BELT_Y;
const BYOA_Y = 590;
const DEST_W = 160;
const DEST_H = 90;
const BOTTOM_Y = 800;
const HOPPER_TOP_Y = BELT_Y - 14;

const beltMain = buildPath([[HOPPER_X, BELT_Y], [SPLIT_X, BELT_Y]]);
const beltTrust = buildPath([[SPLIT_X, BELT_Y], [SPLIT_X + 60, BELT_Y], [SPLIT_X + 60, TRUST_Y], [BAY_END, TRUST_Y]]);
const beltAudit = buildPath([[SPLIT_X, BELT_Y], [BAY_END, BELT_Y]]);
const beltByoa = buildPath([[SPLIT_X, BELT_Y], [SPLIT_X + 60, BELT_Y], [SPLIT_X + 60, BYOA_Y], [BAY_END, BYOA_Y]]);

const GEAR_Y = 470;
const gearSpecs = [
  { label: "Auto Evidence\nCollector", r: 46, color: CA.blue, teeth: 12, speed: 0.7, dir: 1, icon: "bot" },
  { label: "Evidence Synthesis\n& Mapping", r: 46, color: CA.teal, teeth: 12, speed: 0.7, dir: -1, icon: "clipboard" },
  { label: "Policy\nManagement", r: 42, color: CA.blueLt, teeth: 10, speed: 0.85, dir: 1, icon: "shield" },
  { label: "Asset\nInventory", r: 42, color: CA.teal500, teeth: 10, speed: 0.85, dir: -1, icon: "database" },
  { label: "Vendor & Risk\nManagement", r: 42, color: CA.blueLt, teeth: 10, speed: 0.85, dir: 1, icon: "package" },
  { label: "Access\nManagement", r: 42, color: CA.teal500, teeth: 10, speed: 0.85, dir: -1, icon: "userCheck" },
] satisfies { label: string; r: number; color: string; teeth: number; speed: number; dir: 1 | -1; icon: IconName }[];

const gearPositions = gearSpecs.map((gear, i) => ({
  x: HOPPER_X + 20 + gear.r + i * 96,
  y: GEAR_Y,
  r: gear.r,
}));

const destTrust = { x: BAY_X, y: TRUST_Y - DEST_H / 2, icon: "chat", title: "Trust Center", color: CA.blue, bg: CA.blue50, border: "#bfdbfe" } satisfies DestCardProps;
const destAudit = { x: BAY_X, y: AUDIT_Y - DEST_H / 2, icon: "clipboard", title: "Auditor", color: CA.teal, bg: CA.teal50, border: "#99f6e4" } satisfies DestCardProps;
const destByoa = { x: BAY_X, y: BYOA_Y - DEST_H / 2, icon: "bot", title: "Agentic AI", color: CA.blue, bg: CA.blue100, border: "#bfdbfe" } satisfies DestCardProps;
const destRemediate = { x: 470, y: BOTTOM_Y - DEST_H / 2, icon: "bot", title: "Automated\nRemediation", color: CA.teal, bg: CA.teal50, border: "#99f6e4" } satisfies DestCardProps;
const destHuman = { x: 760, y: BOTTOM_Y - DEST_H / 2, icon: "userCheck", title: "Human\nApproval", color: CA.purple, bg: CA.purple100, border: "#ddd6fe" } satisfies DestCardProps;

const sourceFeeds = sourcePos.map((_, i) => {
  const start = sourceRight(i);
  const midX = HOPPER_X - 30;

  return buildPath([
    [start[0], start[1]],
    [midX, start[1]],
    [midX, HOPPER_TOP_Y],
    [HOPPER_X - 6, HOPPER_TOP_Y],
  ]);
});

function SourceCard({ x, y, icon, label }: { x: number; y: number; icon: IconName; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={SW} height={SH} rx="12" fill={CA.white} stroke={CA.border} strokeWidth="1.5" />
      <rect x={x + 14} y={y + 10} width="36" height="36" rx="9" fill={CA.muted} />
      <IconSvg name={icon} x={x + 22} y={y + 18} size={20} color={CA.blue} />
      <text x={x + 62} y={y + 31} fontSize="14" fontWeight="500" fill={CA.navy} dominantBaseline="middle">
        {label}
      </text>
    </g>
  );
}

type DestCardProps = {
  x: number;
  y: number;
  icon: IconName;
  title: string;
  color: string;
  bg: string;
  border: string;
};

function DestCard({ x, y, icon, title, color, bg, border }: DestCardProps) {
  const lines = title.split("\n");

  return (
    <g>
      <rect x={x} y={y} width={DEST_W} height={DEST_H} rx="14" fill={bg} stroke={border} strokeWidth="1.75" />
      <IconSvg name={icon} x={x + 64} y={y + 16} size={32} color={color} />
      {lines.map((line, i) => (
        <text key={line} x={x + DEST_W / 2} y={y + 61 + i * 16} textAnchor="middle" fontSize="14" fontWeight="700" fill={CA.navy}>
          {line}
        </text>
      ))}
    </g>
  );
}

function Gear({ cx, cy, r, teeth, color, t, speed, dir, icon }: { cx: number; cy: number; r: number; teeth: number; color: string; t: number; speed: number; dir: 1 | -1; icon: IconName }) {
  const innerR = r * 0.78;
  const toothInner = r * 0.92;
  const points: Point[] = [];
  const total = teeth * 4;

  for (let i = 0; i < total; i++) {
    const phase = i % 4;
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    const rr = phase === 0 || phase === 1 ? r : toothInner;
    points.push([cx + Math.cos(angle) * rr, cy + Math.sin(angle) * rr]);
  }

  const d = `M ${points.map((point) => point.join(" ")).join(" L ")} Z`;
  const rot = (t * speed * 60 * dir) % 360;

  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <path d={d} fill={color} opacity="0.95" />
      <circle cx={cx} cy={cy} r={innerR} fill="#fff" />
      <circle cx={cx} cy={cy} r={innerR * 0.18} fill={color} />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1={cx + Math.cos((angle * Math.PI) / 180) * innerR * 0.25}
          y1={cy + Math.sin((angle * Math.PI) / 180) * innerR * 0.25}
          x2={cx + Math.cos((angle * Math.PI) / 180) * innerR * 0.78}
          y2={cy + Math.sin((angle * Math.PI) / 180) * innerR * 0.78}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.45"
        />
      ))}
      <g transform={`rotate(${-rot} ${cx} ${cy})`}>
        <IconSvg name={icon} x={cx - innerR * 0.33} y={cy - innerR * 0.33} size={innerR * 0.66} color={color} />
      </g>
    </g>
  );
}

function ConveyorBelt({ path, t, speed, color, beltColor, height }: { path: PathData; t: number; speed: number; color: string; beltColor: string; height: number }) {
  const beltSegs = path.segs.map((segment) => {
    const dx = segment.x2 - segment.x1;
    const dy = segment.y2 - segment.y1;
    const len = Math.hypot(dx, dy);
    const nx = -dy / len;
    const ny = dx / len;
    const ox = nx * (height / 2);
    const oy = ny * (height / 2);

    return {
      top: [[segment.x1 + ox, segment.y1 + oy], [segment.x2 + ox, segment.y2 + oy]] as [Point, Point],
      bottom: [[segment.x1 - ox, segment.y1 - oy], [segment.x2 - ox, segment.y2 - oy]] as [Point, Point],
    };
  });

  const chevrons: { x: number; y: number; ang: number }[] = [];
  const chevSpacing = 36;
  let u = (t * speed) % chevSpacing;

  while (u < path.total) {
    const [x, y] = pointAt(path, u / path.total);
    let ang = 0;
    let acc = 0;

    for (const segment of path.segs) {
      if (u <= acc + segment.len) {
        ang = (Math.atan2(segment.y2 - segment.y1, segment.x2 - segment.x1) * 180) / Math.PI;
        break;
      }
      acc += segment.len;
    }

    chevrons.push({ x, y, ang });
    u += chevSpacing;
  }

  return (
    <g>
      <path d={pathD(path)} stroke={beltColor} strokeWidth={height} fill="none" strokeLinecap="butt" strokeLinejoin="miter" />
      {beltSegs.map((segment, i) => (
        <g key={i}>
          <line x1={segment.top[0][0]} y1={segment.top[0][1]} x2={segment.top[1][0]} y2={segment.top[1][1]} stroke={color} strokeWidth="2" strokeLinecap="round" />
          <line x1={segment.bottom[0][0]} y1={segment.bottom[0][1]} x2={segment.bottom[1][0]} y2={segment.bottom[1][1]} stroke={color} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      {chevrons.map((chevron, i) => (
        <g key={i} transform={`translate(${chevron.x} ${chevron.y}) rotate(${chevron.ang})`}>
          <path d="M -5 -4 L 0 0 L -5 4" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
    </g>
  );
}

function Pulley({ cx, cy, r, t, color = CA.navy, speed = 90, dir = 1 }: { cx: number; cy: number; r: number; t: number; color?: string; speed?: number; dir?: 1 | -1 }) {
  const rot = (t * speed * dir) % 360;

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={CA.navy800} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2" />
      <g transform={`rotate(${rot} ${cx} ${cy})`}>
        <line x1={cx - r * 0.7} y1={cy} x2={cx + r * 0.7} y2={cy} stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
        <line x1={cx} y1={cy - r * 0.7} x2={cx} y2={cy + r * 0.7} stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
      </g>
      <circle cx={cx} cy={cy} r={r * 0.18} fill="#fff" />
    </g>
  );
}

function PackageBox({ x, y, size, color, label, wobble }: { x: number; y: number; size: number; color: string; label: string; wobble: number }) {
  const w = size;
  const h = size * 0.78;

  return (
    <g transform={`translate(${x - w / 2} ${y - h / 2}) rotate(${wobble} ${w / 2} ${h / 2})`}>
      <ellipse cx={w / 2} cy={h + 4} rx={w / 2 - 2} ry="2.5" fill="rgba(15,23,42,0.18)" />
      <rect x="0" y="0" width={w} height={h} rx="3" fill={color} />
      <rect x="0" y="0" width={w} height={h * 0.42} rx="3" fill="#fff" opacity="0.18" />
      <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke="#fff" strokeWidth="1.5" opacity="0.55" />
      <line x1="0" y1={h * 0.5} x2={w} y2={h * 0.5} stroke="#fff" strokeWidth="1.5" opacity="0.55" />
      <text x={w / 2} y={h - 5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" opacity="0.95">
        {label}
      </text>
    </g>
  );
}

function compositePath(lane: PackageLane) {
  const p2 = lane === "trust" ? beltTrust : lane === "audit" ? beltAudit : beltByoa;
  return { p1: beltMain, p2, total: beltMain.total + p2.total };
}

function packagePos(t: number, spawnTime: number, lane: PackageLane): Point | null {
  const dt = t - spawnTime;
  if (dt < 0) return null;

  const dist = dt * BELT_SPEED;
  const cp = compositePath(lane);
  if (dist > cp.total + 20) return null;
  if (dist <= cp.p1.total) return pointAt(cp.p1, dist / cp.p1.total);

  return pointAt(cp.p2, (dist - cp.p1.total) / cp.p2.total);
}

function ArrowHead({ x, y, dir, color }: { x: number; y: number; dir: "right" | "left" | "down" | "up"; color: string }) {
  const d = {
    right: `M ${x} ${y} l -10 -5 l 4 5 l -4 5 z`,
    left: `M ${x} ${y} l 10 -5 l -4 5 l 4 5 z`,
    down: `M ${x} ${y} l -5 -10 l 5 4 l 5 -4 z`,
    up: `M ${x} ${y} l -5 10 l 5 -4 l 5 4 z`,
  }[dir];

  return <path d={d} fill={color} />;
}

function AnimatedDiagram({ time }: { time: number }) {
  const laneList: PackageLane[] = ["trust", "audit", "byoa"];
  const packages: { id: number; spawn: number; lane: PackageLane }[] = [];
  const feedPackages: { id: string; spawn: number; path: PathData }[] = [];

  for (let i = -3; i < 30; i++) {
    packages.push({ id: i, spawn: i * 0.85, lane: laneList[((i % laneList.length) + laneList.length) % laneList.length] });
  }

  for (let n = -2; n < 12; n++) {
    sourceFeeds.forEach((path, idx) => {
      feedPackages.push({ id: `f${n}-${idx}`, spawn: n * 1.2 + idx * 0.18, path });
    });
  }

  const aiOutX = destByoa.x + DEST_W / 2;
  const aiOutY = BYOA_Y + DEST_H / 2;
  const humanInX = destHuman.x + DEST_W / 2;
  const humanInY = BOTTOM_Y - DEST_H / 2;
  const humanLeftX = destHuman.x;
  const remRightX = destRemediate.x + DEST_W;
  const remOutX = destRemediate.x + DEST_W / 2;
  const remOutY = BOTTOM_Y + DEST_H / 2;
  const saasIdx = sources.length - 1;
  const saasLeftX = SX;
  const saasMidY = sourcePos[saasIdx].y + SH / 2;
  const loopBottomY = BOTTOM_Y + DEST_H / 2 + 50;

  return (
    <svg className="h-full w-full" viewBox={`${VIEWBOX_X} ${VIEWBOX_Y} ${VIEWBOX_W} ${VIEWBOX_H}`} role="img" aria-label="Time-based CloudAnzen automation flow animation">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
        <linearGradient id="factoryFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.86" />
          <stop offset="48%" stopColor="#fdf4ff" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#ecfdf5" stopOpacity="0.64" />
        </linearGradient>
        <linearGradient id="beltGlow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="transparent" />
      <text x={SX} y="40" fontSize="14" fontWeight="700" fill={CA.navy} letterSpacing="-0.005em">
        Customer Systems
      </text>

      <rect x="310" y="60" width="760" height="670" rx="18" fill="url(#factoryFill)" stroke="#e9d5ff" strokeWidth="1.75" strokeDasharray="7 7" filter="url(#softShadow)" />
      <path d="M 346 137 H 1034" stroke="url(#beltGlow)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <image href="/logo.svg" x="592" y="79" width="40" height="40" />
      <text x="646" y="106" fontSize="28" fontWeight="800" fill={CA.navy} letterSpacing="-0.01em">
        CloudAnzen
      </text>

      {sources.map((source, i) => (
        <SourceCard key={source.key} x={SX} y={sourcePos[i].y} icon={source.icon} label={source.label} />
      ))}

      <DestCard {...destTrust} />
      <DestCard {...destAudit} />
      <DestCard {...destByoa} />
      <DestCard {...destHuman} />
      <DestCard {...destRemediate} />

      {sourceFeeds.map((path, i) => (
        <path key={i} d={pathD(path)} stroke={CA.slate2} strokeWidth="1.5" fill="none" strokeDasharray="3 4" strokeLinecap="round" />
      ))}

      <path
        d={`M ${HOPPER_X - 50} ${HOPPER_TOP_Y - 80} L ${HOPPER_X + 8} ${HOPPER_TOP_Y - 14} L ${HOPPER_X + 8} ${HOPPER_TOP_Y + 14} L ${HOPPER_X - 50} ${HOPPER_TOP_Y - 14} Z`}
        fill={CA.navy800}
        stroke={CA.navy}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x={HOPPER_X - 22} y={HOPPER_TOP_Y - 86} textAnchor="middle" fontSize="11" fontWeight="700" fill={CA.slate} letterSpacing="0.08em">
        INTIGRATION
      </text>

      {feedPackages.map((feedPackage) => {
        const dt = time - feedPackage.spawn;
        if (dt < 0 || dt > feedPackage.path.total / BELT_SPEED + 0.1) return null;

        const u = (dt * BELT_SPEED) / feedPackage.path.total;
        if (u > 1.05) return null;

        const [cx, cy] = pointAt(feedPackage.path, Math.min(u, 1));
        const fade = u > 0.92 ? 1 - (u - 0.92) / 0.08 : 1;

        return (
          <g key={feedPackage.id} opacity={fade}>
            <circle cx={cx} cy={cy} r="5" fill={CA.blueLt} />
            <circle cx={cx} cy={cy} r="9" fill={CA.blueLt} opacity="0.25" />
          </g>
        );
      })}

      {gearSpecs.map((gear, i) => (
        <Gear key={gear.label} cx={gearPositions[i].x} cy={gearPositions[i].y} r={gear.r} teeth={gear.teeth} color={gear.color} t={time} speed={gear.speed} dir={gear.dir} icon={gear.icon} />
      ))}

      <ConveyorBelt path={beltMain} t={time} speed={BELT_SPEED} color={CA.navy} beltColor={CA.navy800} height={28} />
      <ConveyorBelt path={beltTrust} t={time} speed={BELT_SPEED} color={CA.navy} beltColor={CA.navy800} height={22} />
      <ConveyorBelt path={beltAudit} t={time} speed={BELT_SPEED} color={CA.navy} beltColor={CA.navy800} height={22} />
      <ConveyorBelt path={beltByoa} t={time} speed={BELT_SPEED} color={CA.navy} beltColor={CA.navy800} height={22} />

      <Pulley cx={HOPPER_X} cy={BELT_Y} r={18} t={time} />
      <Pulley cx={SPLIT_X} cy={BELT_Y} r={20} t={time} />
      <Pulley cx={beltTrust.points[beltTrust.points.length - 1][0]} cy={TRUST_Y} r={14} t={time} />
      <Pulley cx={beltAudit.points[beltAudit.points.length - 1][0]} cy={AUDIT_Y} r={14} t={time} />
      <Pulley cx={beltByoa.points[beltByoa.points.length - 1][0]} cy={BYOA_Y} r={14} t={time} />
      <circle cx={SPLIT_X} cy={BELT_Y} r="6" fill="#fff" stroke={CA.teal} strokeWidth="2" />

      {packages.map((pkg) => {
        const pos = packagePos(time, pkg.spawn, pkg.lane);
        if (!pos) return null;

        const wobble = Math.sin((time + pkg.id * 0.5) * 6) * 1.5;
        const color = pkg.lane === "trust" ? CA.blue : pkg.lane === "audit" ? CA.teal : CA.blueLt;
        const label = pkg.lane === "trust" ? "TRUST" : pkg.lane === "audit" ? "AUDIT" : "AI";

        return <PackageBox key={pkg.id} x={pos[0]} y={pos[1] - 18} size={28} color={color} label={label} wobble={wobble} />;
      })}

      <path d={`M ${aiOutX} ${aiOutY} L ${aiOutX} ${humanInY - 30} L ${humanInX} ${humanInY - 30} L ${humanInX} ${humanInY - 6}`} stroke={CA.purple} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ArrowHead x={humanInX} y={humanInY - 6} dir="down" color={CA.purple} />
      <line x1={humanLeftX} y1={BOTTOM_Y} x2={remRightX + 6} y2={BOTTOM_Y} stroke={CA.teal} strokeWidth="2" strokeLinecap="round" />
      <ArrowHead x={remRightX + 6} y={BOTTOM_Y} dir="left" color={CA.teal} />
      <path d={`M ${remOutX} ${remOutY} L ${remOutX} ${loopBottomY} L ${saasLeftX - 30} ${loopBottomY} L ${saasLeftX - 30} ${saasMidY} L ${saasLeftX - 6} ${saasMidY}`} stroke={CA.teal} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 5" />
      <ArrowHead x={saasLeftX - 6} y={saasMidY} dir="right" color={CA.teal} />
      <text x={(saasLeftX - 30 + remOutX) / 2} y={loopBottomY - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill={CA.teal} letterSpacing="0.08em">
        REMEDIATION FEEDBACK LOOP
      </text>

      <text x={BAY_END - 50} y={TRUST_Y - 22} textAnchor="end" fontSize="11" fontWeight="700" fill={CA.slate} letterSpacing="0.08em">
        TO TRUST CENTER
      </text>
      <text x={BAY_END - 50} y={AUDIT_Y - 22} textAnchor="end" fontSize="11" fontWeight="700" fill={CA.slate} letterSpacing="0.08em">
        TO AUDITOR
      </text>
      <text x={BAY_END - 50} y={BYOA_Y - 22} textAnchor="end" fontSize="11" fontWeight="700" fill={CA.slate} letterSpacing="0.08em">
        TO AGENTIC AI
      </text>

      {gearSpecs.map((gear, i) =>
        gear.label.split("\n").map((line, lineIndex) => (
          <text key={`${gear.label}-${line}`} x={gearPositions[i].x} y={gearPositions[i].y + gear.r + 28 + lineIndex * 13} textAnchor="middle" fontSize="10" fontWeight="600" fill={CA.navy} letterSpacing="-0.005em">
            {line}
          </text>
        )),
      )}
    </svg>
  );
}

export function HomeHeroStory() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const loopTime = useLoopTime(LOOP_SECONDS, prefersReducedMotion);
  const time = prefersReducedMotion ? LOOP_SECONDS * 0.42 : loopTime;

  return (
    <div className="mt-4 w-full lg:mt-0 lg:ml-auto lg:max-w-[1020px] lg:justify-self-end xl:translate-x-8 2xl:translate-x-10">
      <div className="ai-hero-sheen relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
        <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="relative rounded-[24px] border border-white/80 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.14),_transparent_36%),linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-2.5 sm:p-3.5">
          <div className="relative aspect-[1480/1030] min-h-[360px] overflow-hidden rounded-[20px] bg-transparent sm:min-h-0">
            <AnimatedDiagram time={time} />
          </div>
        </div>
      </div>
    </div>
  );
}
