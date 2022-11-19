export function numberToPx(value?: string | number) {
  if (!value) {
    return;
  }

  if (typeof value === 'number') {
    return value + 'px';
  }

  return value;
}
