export const getArgValue = (argName: string): string | undefined => {
  const argIndex = process.argv.findIndex((arg) =>
    arg.startsWith(`--${argName}=`),
  );
  if (argIndex !== -1) {
    return process.argv[argIndex].split("=")[1];
  }
  return undefined;
};
