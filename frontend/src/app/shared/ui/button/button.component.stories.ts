import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { UiModule } from '../ui.module';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [moduleMetadata({ imports: [UiModule] })],
};

export const Text = () => ({
  component: ButtonComponent,
  template: `<app-button (click)="click($event)">Click Me!</app-button>`,
  props: {
    text: 'Hello Button',
    click: action('Button was clicked'),
  },
});

export const Disabled = () => ({
  component: ButtonComponent,
  template: `<app-button [disabled]="disabled" (click)="click($event)">Click Me!</app-button>`,
  props: {
    disabled: true,
    click: action('Button was clicked'),
  },
});
