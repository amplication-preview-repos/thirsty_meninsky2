import { ContactParraineWhereInput } from "./ContactParraineWhereInput";
import { ContactParraineOrderByInput } from "./ContactParraineOrderByInput";

export type ContactParraineFindManyArgs = {
  where?: ContactParraineWhereInput;
  orderBy?: Array<ContactParraineOrderByInput>;
  skip?: number;
  take?: number;
};
