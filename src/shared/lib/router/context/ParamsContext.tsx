import React from "react";

export interface RouteParams {
  [key: string]: string;
}

// Null means "no params provider in tree"; consumer hook will return empty object instead of null.
export const ParamsContext =
  React.createContext<RouteParams | null>(null);

export const ParamsProvider =
  ParamsContext.Provider;
