export const parseStringToNumber = (
  val: string,
  max: number | undefined,
  min: number | undefined,
  lastValidValue: number | null
): number | null => {
  if (val === "") {
    return min || null;
  }

  const sanitized = val.replace(/[^\d.-]/g, "");
  const parsed = parseFloat(sanitized);

  if (isNaN(parsed)) {
    return lastValidValue;
  }

  let constrained = parsed;

  if (min !== undefined && parsed < min) {
    constrained = min;
  }

  if (max !== undefined && parsed > max) {
    constrained = max;
  }

  return constrained;
};
