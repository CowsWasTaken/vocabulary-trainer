import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { SkipAuth } from './auth/decorator/skip-auth.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @SkipAuth()
  async login(@Req() req) {
    return this.authService.login(req.user.username);
  }
}
