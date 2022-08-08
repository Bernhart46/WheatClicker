import { Metric, ReportHandler } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export function logPerformance({ name, value }: Metric) {
  console.log(getPerformanceResults(name, value));
}

function getPerformanceResults(name: string, value: number): string {
  let result: string = '';

  switch (name) {
    case 'TTFB':
      result = checkTTFB(value);
      break;
    case 'FID':
      result = checkFID_LCP_FCP_CLS(value, 100);
      break;
    case 'LCP':
      result = checkFID_LCP_FCP_CLS(value, 2500);
      break;
    case 'FCP':
      result = checkFID_LCP_FCP_CLS(value, 1800);
      break;
    case 'CLS':
      result = checkFID_LCP_FCP_CLS(value, 0.1);
      break;
    default:
      console.log(value);
      result = Math.round(value) + 'ms';
      break;
  }

  return `${name}: ${result}`;
}

function checkTTFB(value: number): string {
  if (value <= 800) {
    return `Good (${Math.round(value)}ms)`;
  }

  if (value <= 1800) {
    return `Needs Improvement (${Math.round(value)}ms)`;
  }

  return `Poor (${Math.round(value)}ms)`;
}

function checkFID_LCP_FCP_CLS(value: number, limit: number): string {
  if (value <= limit) {
    return `Good (${Math.round(value)}ms)`;
  }

  return `Slow (${Math.round(value)}ms)`;
}
