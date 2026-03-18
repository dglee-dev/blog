export type BranchToken =
  | { kind: "static"; value: string }
  | { kind: "dynamic"; name: string }
  | { kind: "splat" }
  | { kind: "empty" };
