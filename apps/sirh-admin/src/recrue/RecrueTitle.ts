import { Recrue as TRecrue } from "../api/recrue/Recrue";

export const RECRUE_TITLE_FIELD = "firstName";

export const RecrueTitle = (record: TRecrue): string => {
  return record.firstName?.toString() || String(record.id);
};
