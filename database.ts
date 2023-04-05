import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Tag } from './src/components/Tag';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clft0tr922bqv01unb8dvb689/master',
  cache: new InMemoryCache(),
});
export type ProjectType = {
  projectSlug: string;
  projectName: string;
  projectShortDescription: string;
  projectLongDescription?: string;
  projectTags: Tag[];
  projectPhoto: {
    url: string;
  };
  projectRepositorio: string;
  projectDeploy: string;
};

type DataType = {
  projects: ProjectType[];
};

// type DbType = {
//   slug: string;
//   name: string;
//   image: string;
//   description: string;
//   longDescription?: string;
//   tags: Tag[];
//   repositorio: string;
//   deploy: string;
// };

async function ConsultProjects() {
  const { data } = await client.query<DataType>({
    fetchPolicy: 'no-cache',
    query: gql`
      query Projects {
        projects {
          projectSlug
          projectName
          projectShortDescription
          projectLongDescription
          projectTags
          projectPhoto {
            url
          }
          projectRepositorio
          projectDeploy
        }
      }
    `,
  });
  return data.projects;
}
const hygraphProjects = await ConsultProjects();

export const db: ProjectType[] = hygraphProjects.map(hygraphProject => ({
  ...hygraphProject,
  projectTags: hygraphProject.projectTags.map(tag => {
    switch (tag.label) {
      case 'CSS':
        return { label: 'CSS', color: 'coral' };
      case 'React':
        return { label: 'React', color: 'azul' };
      case 'JavaScript':
        return { label: 'JavaScript', color: 'amarelo' };
      case 'TypeScript':
        return { label: 'TypeScript', color: 'amarelo' };
      case 'Node.js':
        return { label: 'Node.js', color: 'verde' };
      case 'Mongodb':
        return { label: 'Mongodb' };
      case 'Mongoose':
        return { label: 'Mongoose' };
      case 'MySQL':
        return { label: 'MySQL' };
      case 'Sequelize':
        return { label: 'Sequelize' };
      case 'Express':
        return { label: 'Express', color: 'verde' };
      case 'Docker':
        return { label: 'Docker', color: 'azul' };
      case 'Mocha':
        return { label: 'Mocha', color: 'rosa' };
      case 'RTL':
        return { label: 'RTL', color: 'rosa' };
      case 'Jest':
        return { label: 'Jest', color: 'rosa' };

      default:
        return { label: tag.label };
    }
  }),
}));

// switch (tag.label) {
//   case 'CSS':
//     return arrayDeTags.push({ label: 'CSS', color: 'coral' });
//   case 'React':
//     return arrayDeTags.push({ label: 'React', color: 'azul' });
//   case 'JavaScript':
//     return arrayDeTags.push({ label: 'JavaScript', color: 'amarelo' });
//   case 'TypeScript':
//     return arrayDeTags.push({ label: 'TypeScript', color: 'amarelo' });
//   case 'Node.js':
//     return arrayDeTags.push({ label: 'Node.js', color: 'verde' });
//   case 'Mongodb':
//     return arrayDeTags.push({ label: 'Mongodb' });
//   case 'Mongoose':
//     return arrayDeTags.push({ label: 'Mongoose' });
//   case 'MySQL':
//     return arrayDeTags.push({ label: 'MySQL' });
//   case 'Sequelize':
//     return arrayDeTags.push({ label: 'Sequelize' });
//   case 'Express':
//     return arrayDeTags.push({ label: 'Express', color: 'verde' });
//   case 'Docker':
//     return arrayDeTags.push({ label: 'Docker', color: 'azul' });
//   case 'Mocha':
//     return arrayDeTags.push({ label: 'Mocha', color: 'rosa' });
//   case 'RTL':
//     return arrayDeTags.push({ label: 'RTL', color: 'rosa' });
//   case 'Jest':
//     return arrayDeTags.push({ label: 'Jest', color: 'rosa' });
//   default:
//     return console.log(arrayDeTags);
// }

type HardSkill = {
  skill: string;
  pictureOfSkill: string;
};

type SoftSkill = {
  skill: string;
};

// type LongDescription = {
//   projectName: string;
//   description: string;
// };

//   [
//   {
//     name: '🃏 Tryunfo',
//     image: '/images/fotosProjetos/tryunfo.png',
//     description:
//       'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
//     tags: [
//       { label: 'React', color: 'azul' },
//       { label: 'JavaScript', color: 'amarelo' },
//       { label: 'CSS', color: 'coral' },
//     ],
//   },
//   {
//     name: '💰 Wallet',
//     image: 'https://picsum.photos/1920/1080',
//     description:
//       'Wallet é uma carteira virtal que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida por quem usa.',
//     tags: [
//       { label: 'React', color: 'azul' },
//       { label: 'Redux', color: 'roxo' },
//       { label: 'JavaScript', color: 'amarelo' },
//       { label: 'CSS', color: 'coral' },
//     ],
//   },
//   {
//     name: '⚽ T.F.C',
//     image: 'https://picsum.photos/1920/1080',
//     description: 'O TFC é um site informativo sobre partidas e classificações de futebol!',
//     tags: [
//       { label: 'TypeScript', color: 'amarelo' },
//       { label: 'Node.js', color: 'verde' },
//       { label: 'MySQL' },
//       { label: 'Sequelize' },
//       { label: 'Docker', color: 'azul' },
//       { label: 'Mocha', color: 'rosa' },
//       { label: 'Express', color: 'verde' },
//       { label: 'CSS', color: 'coral' },
//     ],
//   },
//   // {
//   //   name: 'Tunes',
//   //   image: 'https://picsum.photos/1920/1080',
//   //   description:
//   //     'Tunes é uma aplicação que permite pesquisar e listar álbuns e músicas de bandas e artistas, além de ser possível executar o preview e favoritar suas músicas preferidas.',
//   //   tags: [
//   //     { label: 'React', color: 'azul' },
//   //     { label: 'Redux', color: 'roxo' },
//   //     { label: 'JavaScript', color: 'amarelo' },
//   //     { label: 'CSS', color: 'coral' },
//   //   ],
//   // },
//   {
//     name: '🚗 Car Shop',
//     image: 'https://picsum.photos/1920/1080',
//     description:
//       'O Tryunfo é um jogo no estilo Super Trunfo, em que é possível criar novas cartas e listar as cartas já existentes no baralho.',
//     tags: [
//       { label: 'TypeScript', color: 'amarelo' },
//       { label: 'Node.js', color: 'verde' },
//       { label: 'MongoDB' },
//       { label: 'Mongoose' },
//       { label: 'Express', color: 'verde' },
//     ],
//   },

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

// export const longDescriptionProject: LongDescription[] = [
//   {
//     projectName: 'T.F.C',
//     description: ` Feito usando o método CRUD com TypeScript, utilizando ORM.
//     Nesse projeto, foi desenvolvida uma API REST utilizando o método TDD e integrada com outras aplicações usando o docker-compose.
//   A modelagem de dados foi realizada utilizando MySQL através do Sequelize e regras de negócio foram implementadas para garantir que apenas usuários logados possam adicionar partidas e que haja um relacionamento adequado entre as tabelas teams e matches.
//   O back-end foi dockerizado e deve ser capaz de popular a tabela disponível no front-end do sistema.`,
//   },
// ];
