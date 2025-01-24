import * as graphql from "@nestjs/graphql";
import { ParrainageResolverBase } from "./base/parrainage.resolver.base";
import { Parrainage } from "./base/Parrainage";
import { ParrainageService } from "./parrainage.service";

@graphql.Resolver(() => Parrainage)
export class ParrainageResolver extends ParrainageResolverBase {
  constructor(protected readonly service: ParrainageService) {
    super(service);
  }
}
