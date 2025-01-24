import { ContactParraine as TContactParraine } from "../api/contactParraine/ContactParraine";

export const CONTACTPARRAINE_TITLE_FIELD = "firstname";

export const ContactParraineTitle = (record: TContactParraine): string => {
  return record.firstname?.toString() || String(record.id);
};
