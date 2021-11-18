import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenInAppPageComponent } from './components/open-in-app.page.component';

const routes: Routes = [
{

        path: 'applink/:hejhej',
        component: OpenInAppPageComponent,
      }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
