import { ParrainageWhereInput } from "./ParrainageWhereInput";
import { ParrainageOrderByInput } from "./ParrainageOrderByInput";

export type ParrainageFindManyArgs = {
  where?: ParrainageWhereInput;
  orderBy?: Array<ParrainageOrderByInput>;
  skip?: number;
  take?: number;
};
