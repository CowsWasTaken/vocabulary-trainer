import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PackagesService } from './packages.service';
import { INewPackage, IUpdatePackage } from '../graphql.schema';

@Resolver('IPackage')
export class PackagesResolver {
  constructor(private packageService: PackagesService) {}

  @Mutation('createPackage')
  async createPackage(@Args('input') args: INewPackage) {
    const entity = await this.packageService.create(args);
    return {
      ...entity,
    };
  }

  @Mutation('deletePackage')
  async deletePackage(@Args('id') args: string) {
    const entity = await this.packageService.delete(args);
    return {
      ...entity,
    };
  }

  @Mutation('updatePackage')
  async updatePackage(@Args('updatePackage') args: IUpdatePackage) {
    const entity = await this.packageService.update(args);
    return {
      ...entity,
    };
  }
}
