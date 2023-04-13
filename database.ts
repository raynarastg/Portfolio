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

interface HygraphProjectType extends Omit<ProjectType, 'projectTags'> {
  projectTags: string[];
}

type DataType = {
  projects: HygraphProjectType[];
};

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
    switch (tag) {
      case 'CSS':
        return { label: tag, color: 'coral' };
      case 'React':
        return { label: tag, color: 'azul' };
      case 'JavaScript':
        return { label: tag, color: 'amarelo' };
      case 'TypeScript':
        return { label: tag, color: 'amarelo' };
      case 'Node':
        return { label: tag, color: 'verde' };
      case 'Mongodb':
        return { label: tag };
      case 'Mongoose':
        return { label: tag };
      case 'MySQL':
        return { label: tag };
      case 'Sequelize':
        return { label: tag };
      case 'Redux':
        return { label: tag, color: 'roxo' };
      case 'Express':
        return { label: tag, color: 'verde' };
      case 'Docker':
        return { label: tag, color: 'azul' };
      case 'Mocha':
        return { label: tag, color: 'rosa' };
      case 'Chai':
        return { label: tag, color: 'rosa' };
      case 'Sinon':
        return { label: tag, color: 'rosa' };
      case 'RTL':
        return { label: tag, color: 'rosa' };
      case 'Jest':
        return { label: tag, color: 'rosa' };

      default:
        return { label: tag };
    }
  }),
}));

type HardSkill = {
  skill: string;
  pictureOfSkill: string;
};

type SoftSkill = {
  skill: string;
};

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
