import { Tag } from './src/components/Tag';

type DbType = {
  name: string;
  image: string;
  description: string;
  tags: Tag[];
};

type HardSkill = {
  skill: string;
  pictureOfSkill: string;
};

type SoftSkill = {
  skill: string;
};

type LongDescription = {
  projectName: string;
  description: string;
};

export const db: DbType[] = [
  {
    name: '🃏 Tryunfo',
    image: '/images/fotosProjetos/tryunfo.png',
    description:
      'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
    tags: [
      { label: 'React', color: 'azul' },
      { label: 'JavaScript', color: 'amarelo' },
      { label: 'CSS', color: 'coral' },
    ],
  },
  {
    name: '💰 Wallet',
    image: 'https://picsum.photos/1920/1080',
    description:
      'Wallet é uma carteira virtal que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida por quem usa.',
    tags: [
      { label: 'React', color: 'azul' },
      { label: 'Redux', color: 'roxo' },
      { label: 'JavaScript', color: 'amarelo' },
      { label: 'CSS', color: 'coral' },
    ],
  },
  {
    name: '⚽ T.F.C',
    image: 'https://picsum.photos/1920/1080',
    description: 'O TFC é um site informativo sobre partidas e classificações de futebol!',
    tags: [
      { label: 'TypeScript', color: 'amarelo' },
      { label: 'Node.js', color: 'verde' },
      { label: 'MySQL' },
      { label: 'Sequelize' },
      { label: 'Docker', color: 'azul' },
      { label: 'Mocha', color: 'rosa' },
      { label: 'Express', color: 'verde' },
      { label: 'CSS', color: 'coral' },
    ],
  },
  // {
  //   name: 'Tunes',
  //   image: 'https://picsum.photos/1920/1080',
  //   description:
  //     'Tunes é uma aplicação que permite pesquisar e listar álbuns e músicas de bandas e artistas, além de ser possível executar o preview e favoritar suas músicas preferidas.',
  //   tags: [
  //     { label: 'React', color: 'azul' },
  //     { label: 'Redux', color: 'roxo' },
  //     { label: 'JavaScript', color: 'amarelo' },
  //     { label: 'CSS', color: 'coral' },
  //   ],
  // },
  {
    name: '🚗 Car Shop',
    image: 'https://picsum.photos/1920/1080',
    description:
      'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
    tags: [
      { label: 'TypeScript', color: 'amarelo' },
      { label: 'Node.js', color: 'verde' },
      { label: 'MongoDB' },
      { label: 'Mongoose' },
      { label: 'Express', color: 'verde' },
    ],
  },
  //   {
  //     name: 'Tryunfo',
  //     image: 'https://picsum.photos/1920/1080',
  //     description:
  //       'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
  //     tags: [
  //       { label: 'React', color: 'azul' },
  //       { label: 'Redux', color: 'roxo' },
  //       { label: 'JavaScript', color: 'amarelo' },
  //       { label: 'CSS', color: 'coral' },
  //     ],
  //   },
  //   {
  //     name: 'Tryunfo',
  //     image: 'https://picsum.photos/1920/1080',
  //     description:
  //       'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
  //     tags: [
  //       { label: 'React', color: 'azul' },
  //       { label: 'Redux', color: 'roxo' },
  //       { label: 'JavaScript', color: 'amarelo' },
  //       { label: 'CSS', color: 'coral' },
  //     ],
  //   },
  //   {
  //     name: 'Tryunfo',
  //     image: 'https://picsum.photos/1920/1080',
  //     description:
  //       'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
  //     tags: [
  //       { label: 'React', color: 'azul' },
  //       { label: 'Redux', color: 'roxo' },
  //       { label: 'JavaScript', color: 'amarelo' },
  //       { label: 'CSS', color: 'coral' },
  //     ],
  // },
];

export const hardSkils: HardSkill[] = [
  {
    pictureOfSkill: '/images/picturesSkills/css.png',
    skill: 'CSS',
  },
  {
    pictureOfSkill: '/images/picturesSkills/html.png',
    skill: 'HTML',
  },
  {
    pictureOfSkill: '/images/picturesSkills/react.png',
    skill: 'REACT',
  },
  {
    pictureOfSkill: '/images/picturesSkills/mongodb.png',
    skill: 'MONGODB',
  },
  {
    pictureOfSkill: '/images/picturesSkills/js.png',
    skill: 'JAVASCRIPT',
  },
  {
    pictureOfSkill: '/images/picturesSkills/ts.png',
    skill: 'TYPESCRIPT',
  },
  {
    pictureOfSkill: '/images/picturesSkills/sql.png',
    skill: 'SQL',
  },
  {
    pictureOfSkill: '/images/picturesSkills/jest.png',
    skill: 'JEST',
  },
  {
    pictureOfSkill: '/images/picturesSkills/redux.png',
    skill: 'REDUX',
  },
  {
    pictureOfSkill: '/images/picturesSkills/nodejs.png',
    skill: 'NODE.JS',
  },
  {
    pictureOfSkill: '/images/picturesSkills/docker.png',
    skill: 'DOCKER',
  },
  {
    pictureOfSkill: '/images/picturesSkills/context.png',
    skill: 'CONTEXT API ',
  },
  {
    pictureOfSkill: '/images/picturesSkills/git.png',
    skill: 'GIT',
  },
  {
    pictureOfSkill: '/images/picturesSkills/mysql.png',
    skill: 'MYSQL',
  },
  {
    pictureOfSkill: '/images/picturesSkills/github.png',
    skill: 'GITHUB',
  },
  {
    pictureOfSkill: '/images/picturesSkills/expresss.png',
    skill: 'EXPRESS',
  },
  {
    pictureOfSkill: '/images/picturesSkills/jwt.png',
    skill: 'JSON WEB TOKEN',
  },
  {
    pictureOfSkill: '/images/picturesSkills/rtl.png',
    skill: 'REACT TESTING LIBRARY',
  },
];

export const softSkils: SoftSkill[] = [
  {
    skill: 'comunicação',
  },
  {
    skill: 'colaboração',
  },
  {
    skill: 'organização',
  },
  {
    skill: 'proatividade',
  },
  {
    skill: 'liderança',
  },
  {
    skill: 'criatividade',
  },
  {
    skill: 'metodologias ágeis',
  },
  {
    skill: 'trabalho em equipe',
  },
];

export const longDescriptionProject: LongDescription[] = [
  {
    projectName: 'T.F.C',
    description: ` Feito usando o método CRUD com TypeScript, utilizando ORM.
    Nesse projeto, foi desenvolvida uma API REST utilizando o método TDD e integrada com outras aplicações usando o docker-compose.
  A modelagem de dados foi realizada utilizando MySQL através do Sequelize e regras de negócio foram implementadas para garantir que apenas usuários logados possam adicionar partidas e que haja um relacionamento adequado entre as tabelas teams e matches.
  O back-end foi dockerizado e deve ser capaz de popular a tabela disponível no front-end do sistema.`,
  },
];
