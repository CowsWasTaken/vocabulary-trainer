import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { INewPackage, IUpdatePackage } from '../graphql.schema';

@Injectable()
export class PackagesService {
  constructor(private prisma: PrismaService) {}
  async create(newPackage: INewPackage) {
    return this.prisma.package.create({
      data: newPackage,
    });
  }

  async delete(id: string) {
    return this.prisma.package.delete({
      where: {
        id,
      },
    });
  }

  async update(updatePackage: IUpdatePackage) {
    return this.prisma.package.update({
      where: {
        id: updatePackage.id,
      },
      data: updatePackage,
    });
  }

  async findOne(packageId: string) {
    return this.prisma.package.findUnique({
      where: {
        id: packageId,
      },
    });
  }
}
