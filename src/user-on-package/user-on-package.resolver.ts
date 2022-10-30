import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserOnPackageService } from './user-on-package.service';
import { INewUserOnPackage } from '../graphql.schema';

@Resolver('IUserOnPackage')
export class UserOnPackageResolver {
  constructor(private userOnPackageService: UserOnPackageService) {}

  @Mutation('addUserToPackage')
  async addUserToPackage(@Args('input') input: INewUserOnPackage) {
    const entity = await this.userOnPackageService.addUserToPackage(input);
    return {
      ...entity,
    };
  }
}
