const event = {
  title: "Réservation",
  name: "reservation",
  type: "document",
  readOnly: false,
  description: "Les informations sur les réservations.",
  fields: [
    {
      name: "event_id",
      title: "ID de la réservation",
      type: "string",
      description: "L'identifiant unique de la réservation.",
    },
    {
      name: "title",
      title: "Titre",
      type: "string",
      description: "Le titre de la réservation.",
    },
    {
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
      description: "Le client associé à la réservation.",
    },
    {
      name: "start",
      title: "Date de début",
      type: "datetime",
      description: "La date et l'heure de début de la réservation.",
    },
    {
      name: "end",
      title: "Date de fin",
      type: "datetime",
      description: "La date et l'heure de fin de la réservation.",
    },
    {
      name: "assets",
      title: "Pièces jointes",
      type: "array",
      of: [{ title: "Photo", name: "image", type: "image" }],
      description: "Les images ou pièces jointes liées à la réservation.",
    },
    {
      name: "doctors",
      title: "Médecins Offrant le Service",
      type: "reference",
      to: [{ type: "unite" }],
      description: "Les médecins associés à cette réservation.",
    },
    {
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "services" }],
      description: "the chosen service for the resrvation",
    },
    {
      name: "color",
      title: "Couleur",
      type: "string",
      // options: {
      //   list: [
      //     { title: "Bleu", value: "#2563eb" },
      //     { title: "Vert", value: "#10b981" },
      //     { title: "Rouge", value: "#e11d48" },
      //     { title: "Jaune", value: "#fbbf24" },
      //     { title: "Orange", value: "#fb923c" },
      //     { title: "Violet", value: "#9333ea" },
      //     { title: "Rose", value: "#f472b6" },
      //     { title: "Gris", value: "#6b7280" },
      //     { title: "Noir", value: "#000000" },
      //     { title: "Blanc", value: "#ffffff" },
      //     { title: "Marron", value: "#7f5539" },
      //     { title: "Turquoise", value: "#06b6d4" },
      //     { title: "Argent", value: "#c0c0c0" },
      //     { title: "Or", value: "#ffd700" },
      //     { title: "Bordeaux", value: "#800020" },
      //     { title: "Beige", value: "#f5f5dc" },
      //     { title: "Magenta", value: "#ff00ff" },
      //     { title: "Cyan", value: "#00ffff" },
      //     { title: "Lavande", value: "#e6e6fa" },
      //     { title: "Olive", value: "#808000" },
      //   ],
      // },
      description: ".",
    },
  ],
};

export default event;
