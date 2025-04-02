import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      name: 'Robyn',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Small Robyn',
      email: 'user@example.com',
      password: hashSync('123456', 10),
      role: 'user'
    }
  ],
}

export default sampleData;