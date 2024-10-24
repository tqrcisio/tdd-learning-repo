import { describe } from 'node:test';
import { HelloWorld } from './HelloWorld';
import { IHelloWorld } from '@/types/HelloWorld';

const makeHelloWorld = (): IHelloWorld => {
  class HelloWorldStub implements IHelloWorld {
    sayHello(name: string): string {
      return 'Hello, ' + (name || 'world') + '!';
    }
  }
  return new HelloWorld();
};

const makeSut = (): { sut: IHelloWorld } => {
  const sut = makeHelloWorld();
  return { sut };
};

describe('Teste da Classe HelloWorld', () => {
  it('deve imprimir "Hello, world!" no console', () => {
    const { sut } = makeSut();
    const sayHello = sut.sayHello('world');
    expect(sayHello).toBe('Hello, world!');
  });

  it('deve imprimir "Hello, world!" mesmo que nome for vazio', () => {
    const { sut } = makeSut();
    const sayHello = sut.sayHello('');
    expect(sayHello).toBe('Hello, world!');
  });
});

