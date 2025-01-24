import * as graphql from "@nestjs/graphql";
import { RecrueResolverBase } from "./base/recrue.resolver.base";
import { Recrue } from "./base/Recrue";
import { RecrueService } from "./recrue.service";

@graphql.Resolver(() => Recrue)
export class RecrueResolver extends RecrueResolverBase {
  constructor(protected readonly service: RecrueService) {
    super(service);
  }
}
