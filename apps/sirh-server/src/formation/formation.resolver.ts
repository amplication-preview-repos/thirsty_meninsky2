import * as graphql from "@nestjs/graphql";
import { FormationResolverBase } from "./base/formation.resolver.base";
import { Formation } from "./base/Formation";
import { FormationService } from "./formation.service";

@graphql.Resolver(() => Formation)
export class FormationResolver extends FormationResolverBase {
  constructor(protected readonly service: FormationService) {
    super(service);
  }
}
