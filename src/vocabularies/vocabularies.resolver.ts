import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { VocabulariesService } from './vocabularies.service';
import { INewVocabulary, IUpdateVocabulary } from '../graphql.schema';
import { forwardRef, Inject } from '@nestjs/common';
import { GroupsService } from '../groups/groups.service';
import { Vocabulary } from '@prisma/client';

@Resolver('IVocabulary')
export class VocabulariesResolver {
  constructor(
    private readonly vocabulariesService: VocabulariesService,
    @Inject(forwardRef(() => GroupsService))
    private readonly groupsService: GroupsService,
  ) {}
  @Mutation('createVocabulary')
  async createVocabulary(@Args('input') args: INewVocabulary) {
    return await this.vocabulariesService.create(args);
  }

  @Mutation('updateVocabulary')
  async updateVocabulary(@Args('input') args: IUpdateVocabulary) {
    return await this.vocabulariesService.update(args);
  }

  @Mutation('deleteVocabulary')
  async deleteVocabulary(@Args('id') id: string) {
    return await this.vocabulariesService.delete(id);
  }

  @Query('vocabularyById')
  async vocabularyById(@Args('id') id: string) {
    return await this.vocabulariesService.findOne(id);
  }

  @ResolveField('group')
  async resolveGroup(@Parent() vocabulary: Vocabulary) {
    console.log('here');
    return await this.groupsService.findById(vocabulary.groupId);
  }
}
