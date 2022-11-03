import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GroupsService } from './groups.service';
import { INewGroup, IUpdateGroup } from '../graphql.schema';
import { forwardRef, Inject } from '@nestjs/common';
import { PackagesService } from '../packages/packages.service';
import { Group } from '@prisma/client';
import { VocabulariesService } from '../vocabularies/vocabularies.service';

@Resolver('IGroup')
export class GroupsResolver {
  constructor(
    private readonly groupsService: GroupsService,
    @Inject(forwardRef(() => PackagesService))
    private readonly packagesService: PackagesService,
    @Inject(forwardRef(() => VocabulariesService))
    private readonly vocabulariesService: VocabulariesService,
  ) {}

  @Mutation('createGroup')
  async createGroup(@Args('input') args: INewGroup) {
    return await this.groupsService.create(args);
  }

  @Mutation('updateGroup')
  async updateGroup(@Args('input') args: IUpdateGroup) {
    return await this.groupsService.update(args);
  }

  @Mutation('deleteGroup')
  async deleteGroup(@Args('id') id: string) {
    return await this.groupsService.delete(id);
  }

  @Query('groupById')
  async groupById(@Args('id') id: string) {
    return await this.groupsService.findById(id);
  }

  @ResolveField('package')
  async resolvePackage(@Parent() group: Group) {
    return await this.packagesService.findOne(group.packageId);
  }

  @ResolveField('vocabularies')
  async resolveVocabularies(@Parent() group: Group) {
    return await this.vocabulariesService.findForGroup(group.id);
  }
}
