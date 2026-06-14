export function cn(...inputs: any[]) {
  return inputs.flat(Infinity).filter(Boolean).map(x => x.trim()).join(' ');
}
