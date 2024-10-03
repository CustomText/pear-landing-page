export type AllowedProtocol = "http:" | "https:" | "pearai:" | "vscode:";

export interface OpenAppParams {
  [key: string]: string;
}

export class UnsafeUrlError extends Error {
  constructor(url: string) {
    super(`Unsafe URL detected: ${url}`);
    this.name = "UnsafeUrlError";
  }
}
