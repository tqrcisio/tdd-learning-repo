import { IHelloWorld } from '@/types/HelloWorld';

export class HelloWorld implements IHelloWorld {
  public sayHello(name?: string): string {
    return 'Hello, ' + (name || 'world') + '!';
  }
}
