const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'key A',
  keyB: 'key B',
};

// objectA.keyA = 'Another value';
objectA.keyC = 'New key';
objectA.keyD = 'New key';
