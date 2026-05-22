import { Routes } from '@angular/router';
import { Education } from './education/education';
import { Skills } from './skills/skills';

export const routes: Routes = [
    { path: "education", component: Education },
    { path: "skills", component: Skills }
];
