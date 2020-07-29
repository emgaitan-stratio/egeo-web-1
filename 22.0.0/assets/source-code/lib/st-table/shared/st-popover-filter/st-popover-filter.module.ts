/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StTemplateFilterSubmitDirective } from './directives/st-template-filter-submit.directive';
import { StClickOutsideModule } from '../../../directives/st-click-outside/st-click-outside.module';
import { StPopOverModule } from '../../../st-pop-over/st-pop-over.module';
import { StPopoverFilterComponent } from './st-popover-filter.component';
import { StCheckboxModule } from '../../../st-checkbox/st-checkbox.module';

@NgModule({
   imports: [CommonModule, StPopOverModule, StCheckboxModule, StClickOutsideModule],
   declarations: [StPopoverFilterComponent, StTemplateFilterSubmitDirective],
   exports: [StPopoverFilterComponent]
})

export class StPopoverFilterModule {
}
