import { Button, ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

const Settings: Meta = {
  title: 'UI/Button',
  component: Button,
  // Настройка Controls/пропсов
  argTypes: {
    // В итоге, исправив ошибку при написании component выше, все пропсы из интерфейса компонента подтянулись в браузер и теперь их тут не обязательно писать, но для доп настроек можно
    // variant: {
    //   name: 'My Variant',
    //   control: {
    //     type: 'select',
    //     options: ['primary', 'secondary'],
    //   },
    //   defaultValue: 'secondary',
    //   description: 'Вариант кнопки',
    // },
    // disabled: {
    //   name: 'Disabled',
    //   control: {
    //     type: 'radio',
    //     options: [true, false],
    //   },
    //   defaultValue: false,
    // },
    children: {
      // name: 'Content',
      control: {
        type: 'text',
      },
      defaultValue: 'Text',
    },
    // onClick: {
    //   action: 'clicked', // по ум олчанию
    //   type: 'function',
    // },

    //можно добавить поле, которое не отправялять в пропс компоненту, а использовать внутри Template, для дополнительного тестирования отображения
    // numberOfChildren: {
    //   type: 'number',
    //   defaultValue: 4,
    // },
    // widthPercentage: {
    //   type: 'number',
    //   defaultValue: 24,
    // },
  },
};
export default Settings;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Regular = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

// Тестирование компонента с данными, которые не отправляются этому компоненту в пропсы
// Эти данные можно менять в браузере при тестировании

// interface ButtonPropsStory extends ButtonProps {
//   numberOfChildren: number;
//   widthPercentage: number;
// }
// const Template: Story<ButtonPropsStory> = ({ numberOfChildren, widthPercentage, ...args }) => (
//   <div
//     style={{
//       display: 'flex',
//       gap: '1.25%',
//       border: '1px solid',
//       width: '100%',
//       flexWrap: 'wrap',
//     }}
//   >
//     {/* @ts-ignore */}
//     {[...Array(numberOfChildren).keys()].map((i) => (
//       <Button key={i} {...args} style={{ backgroundColor: 'red', flexBasis: widthPercentage + '%', flexGrow: 1, height: '100px' }}>
//         {i}
//       </Button>
//     ))}
//   </div>
// );

// export const Regular = Template.bind({});

// ============================================================================

// npx sb init --builder webpack5 - все нужное установит + файлы с базовой конфигурацией, с готовыми примерами + 2 скрипта
// можно добавить -p @storybook/cli

// .storybook/main - указывает, как находить файлы историй + аддоны

// ----Для scss
// npm i -D @storybook/preset-scss css-loader sass sass-loader style-loader

// .storybook/main.js:
// module.exports = {
//   addons: ['@storybook/preset-scss'], //ставить первым в аддонах
// };
// + возможно нужен html-webpack-plugin
