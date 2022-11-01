import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserOnPackageService } from './user-on-package.service';
import { INewUserOnPackage } from '../graphql.schema';
import { Parent } from '@nestjs/graphql';
import { UserOnPackage } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { PackagesService } from '../packages/packages.service';
import { forwardRef, Inject } from '@nestjs/common';

@Resolver('IUserOnPackage')
export class UserOnPackageResolver {
  constructor(
    private userOnPackageService: UserOnPackageService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    @Inject(forwardRef(() => PackagesService))
    private packagesService: PackagesService,
  ) {}

  @Mutation('addUserToPackage')
  async addUserToPackage(@Args('input') input: INewUserOnPackage) {
    const entity = await this.userOnPackageService.addUserToPackage(input);
    return {
      ...entity,
    };
  }

  @Query('packagesForUser')
  async packagesForUser(@Args('userId') userId: string) {
    return await this.userOnPackageService.packagesForUser(userId);
  }

  @ResolveField('user')
  async user(@Parent() userOnPackage: UserOnPackage) {
    return await this.usersService.findOne(userOnPackage.userId);
  }

  @ResolveField('package')
  async package(@Parent() userOnPackage: UserOnPackage) {
    return await this.packagesService.findOne(userOnPackage.packageId);
  }
}
