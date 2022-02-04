import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllMessages(@Res() res: any): Promise<void> {
    res.set('Connection', 'keep-alive');
    res.set('Content-Type', 'text/event-stream');
    res.set('Cache-Control', 'no-cache');
    return this.appService.getMessage(res)
  }

  @Post()
  addNewMessage(@Body() body: { message: string }): void  {
    return this.appService.addNewMessage(body.message);
  }
}
