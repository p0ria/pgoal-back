import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
