import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { nanoid } from 'nanoid';

@Injectable()
export class AppService {
  constructor(private eventEmitter: EventEmitter2) {}

  getMessage(res: any): void {
    this.eventEmitter.on('message.created', (value) => {
      res.write(`data: ${ JSON.stringify(value) } \n\n`);
    })
  }

  addNewMessage(message: string): void {
    const id = nanoid();
    this.eventEmitter.emit(
      'message.created',
      { message, id }
    );
  }
}
