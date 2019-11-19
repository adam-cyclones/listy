export function dateNow(iso = 'en-GB') {
  const date = Date.now();
  return new Intl.DateTimeFormat(iso).format(date);
}