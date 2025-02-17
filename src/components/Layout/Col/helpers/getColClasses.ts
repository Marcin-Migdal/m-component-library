type Sizes = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export const getColClasses = (sizes: Sizes): string => {
  let colClasses: string = "";

  for (const size in sizes) {
    const value = sizes[size as keyof Sizes];

    if (value) {
      colClasses = colClasses.concat(`col-${size}-${value} `);
    }
  }

  return colClasses.slice(0, colClasses.length - 1);
};
