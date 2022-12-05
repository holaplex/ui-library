export function enumOptions(someEnum: any) {
  return {
    options: Object.keys(someEnum)
      .filter((key) => !isNaN(parseInt(key)))
      .map((key) => parseInt(key)),
    mapping: someEnum,
    control: {
      type: "select",
      labels: Object.values(someEnum).filter(
        (value) => typeof value === "string"
      ),
    },
  };
}
