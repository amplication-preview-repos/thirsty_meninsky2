import { Parrainage as TParrainage } from "../api/parrainage/Parrainage";

export const PARRAINAGE_TITLE_FIELD = "id";

export const ParrainageTitle = (record: TParrainage): string => {
  return record.id?.toString() || String(record.id);
};
