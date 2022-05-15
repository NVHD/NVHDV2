export default {
  name: "bild",
  title: "Bild",
  type: "object",
  fields: [
    {
      name: "bild",
      title: "Bilder",
      type: "array",
      of: [{ type: "image" }]
    }
  ]
};
