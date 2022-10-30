import { Injectable } from '@nestjs/common';
import { INewUserOnPackage } from '../graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserOnPackageService {
  constructor(private prisma: PrismaService) {}
  async addUserToPackage(input: INewUserOnPackage) {
    const { userId, packageId, packageRight } = input;
    const optionalExisting = await this.findExisting(userId, packageId);
    if (optionalExisting) {
      return optionalExisting;
    } else {
      return this.prisma.userOnPackage.create({
        data: {
          userId,
          packageId,
          PackageRights: packageRight,
        },
      });
    }
  }

  private async findExisting(userId: string, packageId: string) {
    return await this.prisma.userOnPackage.findFirst({
      where: {
        userId,
        packageId,
      },
    });
  }
}
