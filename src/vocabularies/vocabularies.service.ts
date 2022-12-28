import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { INewVocabulary, IUpdateVocabulary } from '../graphql.schema';

@Injectable()
export class VocabulariesService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.vocabulary.findUnique({
      where: {
        id,
      },
    });
  }

  async create(input: INewVocabulary) {
    return this.prisma.vocabulary.create({
      data: input,
    });
  }

  async update(params: IUpdateVocabulary) {
    const { id, ...params_without_id } = params;

    return this.prisma.vocabulary.update({
      where: {
        id,
      },
      data: {
        ...params_without_id,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.vocabulary.delete({
      where: {
        id,
      },
    });
  }

  async findForGroup(groupId: string) {
    return this.prisma.vocabulary.findMany({
      where: {
        groupId,
      },
    });
  }
}
