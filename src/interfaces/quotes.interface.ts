import type { Nullable } from './common.interfaces';

export type Quote = {
  id: number;
  quote: string;
  created_at: string;
  updated_at: string;
  deleted_at: Nullable<string>;
}
