import { RecrueWhereInput } from "./RecrueWhereInput";
import { RecrueOrderByInput } from "./RecrueOrderByInput";

export type RecrueFindManyArgs = {
  where?: RecrueWhereInput;
  orderBy?: Array<RecrueOrderByInput>;
  skip?: number;
  take?: number;
};
