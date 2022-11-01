import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PackagesService } from './packages.service';
import { INewPackage, IUpdatePackage } from '../graphql.schema';
import { Package } from '@prisma/client';
import { forwardRef, Inject } from '@nestjs/common';
import { UserOnPackageService } from '../user-on-package/user-on-package.service';
import { GroupsService } from '../groups/groups.service';

@Resolver('IPackage')
export class PackagesResolver {
  constructor(
    private packageService: PackagesService,
    @Inject(forwardRef(() => UserOnPackageService))
    private userOnPackageService: UserOnPackageService,
    @Inject(forwardRef(() => GroupsService))
    private readonly groupsService: GroupsService,
  ) {}

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

  @ResolveField('userOnPackage')
  async userOnPackage(@Parent() packageEntity: Package) {
    return await this.userOnPackageService.findForPackage(packageEntity.id);
  }

  @ResolveField('groups')
  async resolveGroups(@Parent() packageEntity: Package) {
    return await this.groupsService.findForPackage(packageEntity.id);
  }
}
