export const generateHiddenArgTypes = (hiddenProps: string[]) => {
  return hiddenProps.reduce((argTypes, propName) => {
    argTypes[propName] = {
      table: {
        disable: true,
      },
    };
    return argTypes;
  }, {} as Record<string, { table: { disable: boolean } }>);
};
