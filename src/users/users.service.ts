import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { INewUser, IUpdateUser } from '../graphql.schema';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async create(input: INewUser): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }

  async update(params: IUpdateUser): Promise<User> {
    const { id, ...params_without_id } = params;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...params_without_id,
      },
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
