import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},


  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skill', component: SkillComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'recent-work', component: RecentWorkComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
