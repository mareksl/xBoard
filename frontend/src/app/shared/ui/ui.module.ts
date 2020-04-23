import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, BrowserAnimationsModule, MatButtonModule],
  exports: [ButtonComponent],
})
export class UiModule {}
