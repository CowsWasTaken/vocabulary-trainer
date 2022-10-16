import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { INewUser, IUpdateUser, IUser } from '../graphql.schema';
import { NotImplementedException } from '@nestjs/common';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query('me')
  async me(): Promise<IUser> {
    throw new NotImplementedException();
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
