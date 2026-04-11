/** Valores de contacto; etiquetas y copy en messages/. */
export const contactInfo = {
  email: "alexeihernandez.dev@gmail.com",
  phoneDisplay: "+58 (424) 965-0347",
  phoneTel: "+584249650347",
} as const;

export type ContactMethodKind = "email" | "phone" | "location";

export const contactMethodOrder: ContactMethodKind[] = [
  "email",
  "phone",
  "location",
];
