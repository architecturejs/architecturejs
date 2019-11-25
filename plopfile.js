const components = './src/app/components';
const templates = './config/plop/component';

module.exports = function plopFn(plop) {
  plop.setGenerator('React Component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:',
        default: 'test'
      },
      {
        type: 'list',
        name: 'quantity',
        message: 'how many components you want to create',
        choices: [
          10,
          100,
          1000,
          5000,
        ]
      }
    ],
    actions({ quantity, componentName }) {
      let actionsForComponents = [];

      for (let i = 0; i <= quantity; i += 1) {
        let j = i;
        actionsForComponents = [
          ...actionsForComponents,
          {
            type: 'addMany',
            base: templates,
            destination: `${components}/{{properCase componentName}}${i}`,
            templateFiles:`${templates}/*`,
            stripExtensions: ['plop'],
            data: {
              fullComponentName: `${componentName}${j}`,
              count: j += 1,
              isLastComponent: j < quantity,
              nextComponent: `${componentName}${j}`
            }
          }
        ];
      }

      return actionsForComponents;
    },
  });

};
