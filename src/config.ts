type ENVIRONMENT = 'dev' | 'stg' | 'prd' | 'local' | 'test';

export const NAME = process.env.NAME ?? 'meditherakis_app';
export const ENVIRONMENT: ENVIRONMENT = (process.env.ENVIRONMENT ?? process.env.NODE_ENV ?? 'dev') as ENVIRONMENT;

// Entrypoints
export const MEDISERVER_URL = process.env.MEDISERVER_URL;
