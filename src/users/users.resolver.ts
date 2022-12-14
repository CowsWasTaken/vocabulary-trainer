import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { INewUser, IUpdateUser, IUser } from '../graphql.schema';
import { UserOnPackageService } from '../user-on-package/user-on-package.service';
import { User } from '@prisma/client';
import { forwardRef, Inject } from '@nestjs/common';
import { CurrentUser } from '../auth/decorator/current-user.decorator';

@Resolver('IUser')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    @Inject(forwardRef(() => UserOnPackageService))
    private userOnPackageService: UserOnPackageService,
  ) {}

  @Query('me')
  async me(
    @Args('input') args: string,
    @CurrentUser() user: { userId: string; username: string },
  ): Promise<IUser> {
    const entity = await this.usersService.findOne(user.userId);
    return {
      ...entity,
    };
  }

  @ResolveField('userOnPackages')
  async userOnPackages(@Parent() user: User) {
    return await this.userOnPackageService.findForUser(user.id);
  }

  @Mutation('createUser')
  async create(@Args('input') args: INewUser): Promise<IUser> {
    const entity = await this.usersService.create(args);
    return {
      ...entity,
    };
  }

  @Mutation('updateUser')
  async updateUser(@Args('input') args: IUpdateUser) {
    const entity = await this.usersService.update(args);
    return {
      ...entity,
    };
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') args: string) {
    const entity = await this.usersService.delete(args);
    return {
      ...entity,
    };
  }
}
