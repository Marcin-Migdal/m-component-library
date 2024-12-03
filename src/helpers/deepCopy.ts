export const deepCopy = <T>(object: T): T => {
  if (object === null || typeof object !== "object") {
    return object;
  }

  if (Array.isArray(object)) {
    const copiedArray = [] as unknown[];

    for (let i = 0; i < object.length; i++) {
      copiedArray[i] = deepCopy(object[i]);
    }

    return copiedArray as T;
  }

  const copiedObject = {} as T;

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      copiedObject[key] = deepCopy(object[key]);
    }
  }

  return copiedObject;
};
