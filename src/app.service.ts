import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { nanoid } from 'nanoid';


@Injectable()
export class AppService {
  constructor(private eventEmitter: EventEmitter2) {}

  async getMessage(): Promise<{ message: string, id: string }> {
    return await new Promise<{ message: string, id: string }>((resolve, reject) => {
      this.eventEmitter.once(
        'message.created',
        (message) => {
          resolve(message);
        }
      );
    });
  }

  addNewMessage(message: string): { message: string, id: string } {
    const id = nanoid();
    this.eventEmitter.emit(
      'message.created',
      { message, id }
    );

    return { message, id };
  }
}
