import type { ApiRequestOptions } from "./ApiRequestOptions.js";
import { log } from "../../../utils/helpers.js";
import { getArgValue } from "../../../utils/args.js";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: "include" | "omit" | "same-origin";
  TOKEN?: string | Resolver<string> | undefined;
  USERNAME?: string | Resolver<string> | undefined;
  PASSWORD?: string | Resolver<string> | undefined;
  HEADERS?: Headers | Resolver<Headers> | undefined;
  ENCODE_PATH?: ((path: string) => string) | undefined;
};

const apiKey = getArgValue("api-key") || process.env.API_KEY;
const secretKey = getArgValue("secret-key") || process.env.SECRET_KEY;
const baseUrl = getArgValue("base-url") || process.env.BASE_URL;

if (!apiKey || !secretKey) {
  log(
    "Missing API key or secret key. Please provide them via environment variables (API_KEY, SECRET_KEY) or command line arguments (--api-key=value --secret-key=value)",
  );
  process.exit(1);
}

export const OpenAPI: OpenAPIConfig = {
  BASE: baseUrl ?? "https://api.redislabs.com/v1",
  VERSION: "version 1",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: undefined,
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: {
    "x-api-key": apiKey,
    "x-api-secret-key": secretKey,
  },
  ENCODE_PATH: undefined,
};
