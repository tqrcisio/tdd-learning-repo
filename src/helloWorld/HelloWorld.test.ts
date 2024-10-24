import { HelloWorld } from './HelloWorld';

describe('Teste da Classe HelloWorld', () => {
  it('deve imprimir "Hello, world!" no console', () => {
    console.log = jest.fn();
    const helloWorld = new HelloWorld();
    helloWorld.sayHello();
    expect(console.log).toHaveBeenCalledWith('Hello, world!');
  });
});
