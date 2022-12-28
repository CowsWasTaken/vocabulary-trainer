import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { INewGroup, IUpdateGroup } from '../graphql.schema';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(newGroup: INewGroup) {
    const { packageId, description, name, active } = newGroup;
    return this.prisma.group.create({
      data: {
        packageId,
        description,
        name,
        active,
      },
    });
  }

  async update(updateGroup: IUpdateGroup) {
    return this.prisma.group.update({
      where: {
        id: updateGroup.id,
      },
      data: updateGroup,
    });
  }

  async delete(id: string) {
    return this.prisma.group.delete({
      where: {
        id,
      },
    });
  }

  async findById(id) {
    return this.prisma.group.findUnique({
      where: {
        id,
      },
    });
  }

  async findForPackage(packageId: string) {
    return this.prisma.group.findMany({
      where: {
        packageId,
      },
    });
  }
}
