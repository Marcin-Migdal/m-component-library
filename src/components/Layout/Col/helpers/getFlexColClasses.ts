type FlexSizes = {
  smFlex?: number;
  mdFlex?: number;
  lgFlex?: number;
  xlFlex?: number;
};

export const getFlexColClasses = (flexSizes: FlexSizes): string => {
  let colFlexClasses: string = "";

  for (const size in flexSizes) {
    const value = flexSizes[size as keyof FlexSizes];

    if (value) {
      colFlexClasses = colFlexClasses.concat(`col-flex-${size.slice(0, 2)}-${value} `);
    }
  }

  return colFlexClasses.slice(0, colFlexClasses.length - 1);
};
