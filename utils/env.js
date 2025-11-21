import config from '../environments/qa.json';

export function getEnvConfig() {
  const env = __ENV.ENV || "qa";
  return JSON.parse(open(`./environments/${env}.json`));
}
