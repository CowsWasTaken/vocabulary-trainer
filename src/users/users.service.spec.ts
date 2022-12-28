import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;
  const findManyMock = [
    {
      id: '2384214234',
      username: 'MaxMustermann',
      disabled: true,
      updatedAt: new Date(),
      mail: 'max@mustermann.com',
      createdAt: new Date(),
    },
  ];
  const mockPrisma = {
    user: {
      findMany: () => Promise.resolve(findManyMock),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrisma)
      .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('returns users', async () => {
    await expect(service.findAll()).resolves.toEqual(findManyMock);
  });
});
