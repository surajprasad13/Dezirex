import faker from 'faker';

const Follow = [
  {
    image: require('../assets/images/user1.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user2.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user3.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user2.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user3.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user1.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user2.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
  {
    image: require('../assets/images/user3.png'),
    name: 'name',
    star: 2,
    status: 'active',
    title: 'SusieSegaldo1610',
    description: 'Sisie Degaldo',
  },
];

const avatar = `https://source.unsplash.com/random/400x400?product/${2}`;

const religion = ['Hindu', 'Muslim', 'Sikh', 'Christian'];
const status = ['Single', 'Married', 'Divorced'];
const choice = ['Smoking', 'Coding', 'Cooking', 'Fishing', 'Writing'];

const User = Array(20)
  .fill()
  .map((_, index) => {
    return {
      id: index,
      image: faker.image.avatar(),
      name: faker.name.firstName(),
      age: faker.datatype.number(100),
      job: faker.name.jobType(),
      bio: faker.lorem.sentence(),
      religion: religion[Math.floor(Math.random() * 3)],
      status: status[Math.floor(Math.random() * 2)],
      choice: choice[Math.floor(Math.random() * 4)],
    };
  });

export {Follow, User};
