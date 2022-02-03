import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllMessages(): Promise<{ message: string, id: string }> {
    return this.appService.getMessage()
  }

  @Post()
  addNewMessage(@Body() body: { message: string }): { message: string, id: string } {
    return this.appService.addNewMessage(body.message);
  }
}
