
import { sleep } from 'k6';
import http from 'k6/http';
import env from '../config/env.json';

export let options = { vus: 5, duration: '10s' };

export default function () {
  const res = http.get(env.baseUrl);
  sleep(1);
}
