import { Injectable } from '@nestjs/common';
// import { INewVocabulary, IUpdateVocabulary } from '../graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VocabulariesService {
  constructor(private readonly prisma: PrismaService) {}
  //
  // async findOne(id: string) {
  //   return this.prisma.vocabulary.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }
  //
  // async create(input: INewVocabulary, groupId: string) {
  //   return this.prisma.vocabulary.create({
  //     data: { ...input, groupId: 'groupId' },
  //   });
  // }
  //
  // async update(params: IUpdateVocabulary) {
  //   const { id, ...params_without_id } = params;
  //
  //   return this.prisma.vocabulary.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       ...params_without_id,
  //     },
  //   });
  // }
  //
  // async delete(id: string) {
  //   return this.prisma.user.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
