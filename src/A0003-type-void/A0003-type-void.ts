function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Gabriel',
  lastName: 'Lucas',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Gabriel', 'Lucas');
person.showName();

export { person };
