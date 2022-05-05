export default {
  name: "addresse",
  title: "Adresse",
  type: "object",
  fields: [
    {
      name: "strassehausnummer",
      description: "z.B: Musterstraße 17",
      title: "Straße und Hausnummer",
      type: "string"
    },
    {
      name: "postleizahl",
      title: "Postleizahl",
      description: "z.B: 78253",
      type: "number"
    },
    {
      name: "ort",
      title: "Ort",
      description: "z.B: Heudorf",
      type: "string"
    }
  ]
};
