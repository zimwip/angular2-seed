import { RouterConfig }                     from '@angular/router';
import { ManifestationDetailComponent }     from '../components';

export const HeroesRoutes: RouterConfig = [
  { path: 'heroes',  component: ManifestationDetailComponent },
  { path: 'hero/:id', component: ManifestationDetailComponent }
];
