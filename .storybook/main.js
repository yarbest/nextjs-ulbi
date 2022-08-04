module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/preset-scss', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  // @storybook/addon-a11y добавит вкладку, в которой покажет пункты об accessability этого компонента
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // typescript:{
  //   check:true// type-check stories during storybook build
  // }
};
