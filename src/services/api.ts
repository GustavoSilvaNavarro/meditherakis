import axios from 'axios';

import { MEDISERVER_URL } from '@/config';

export const quotesApi = axios.create({
  baseURL: MEDISERVER_URL,
});
