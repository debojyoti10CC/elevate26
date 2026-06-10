/**
 * Generates a dynamic SVG path that snakes left↔right for each event.
 *
 * SVG coordinate space:
 *   width  = 1200
 *   height = STEP_Y * (eventCount - 1) + PADDING * 2
 *
 * Each event gets a waypoint. Odd-indexed events sit on the left,
 * even-indexed sit on the right (0-based index → index 0 = left).
 * Waypoints are connected with cubic bezier curves so the path
 * flows smoothly between sides.
 */

export const SVG_WIDTH = 1200;
export const STEP_Y = 280;       // vertical distance between waypoints
export const PADDING = 40;       // top/bottom breathing room
export const LEFT_X = 100;       // x for left-side waypoints
export const RIGHT_X = 1100;     // x for right-side waypoints

export interface Waypoint {
    x: number;
    y: number;
}

export function getWaypoints(eventCount: number): Waypoint[] {
    return Array.from({ length: eventCount }, (_, i) => ({
        x: i % 2 === 0 ? LEFT_X : RIGHT_X,
        y: PADDING + i * STEP_Y,
    }));
}

export function buildPath(eventCount: number): string {
    const pts = getWaypoints(eventCount);
    if (pts.length === 0) return '';
    if (pts.length === 1) return `M${pts[0].x} ${pts[0].y}`;

    let d = `M${pts[0].x} ${pts[0].y}`;

    for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const curr = pts[i];
        // Control points sit halfway in Y between the two waypoints,
        // but keep the same X as their respective waypoint — this
        // creates the characteristic S-curve snaking effect.
        const cy = (prev.y + curr.y) / 2;
        d += ` C${prev.x} ${cy} ${curr.x} ${cy} ${curr.x} ${curr.y}`;
    }

    return d;
}

export function getSvgHeight(eventCount: number): number {
    return PADDING * 2 + Math.max(0, eventCount - 1) * STEP_Y;
}

export function getViewBox(eventCount: number): string {
    const h = getSvgHeight(eventCount);
    return `${-PADDING} ${-PADDING} ${SVG_WIDTH + PADDING * 2} ${h + PADDING * 2}`;
}
