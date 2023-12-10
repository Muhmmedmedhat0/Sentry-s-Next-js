declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    SENTRY_AUTH_TOKEN: string;
    SENTRY_DSN: string;
  }
}
