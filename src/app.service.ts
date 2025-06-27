import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserList(): string[] {
    return ['Alice', 'Bob', 'Charlie'];
  }
}
