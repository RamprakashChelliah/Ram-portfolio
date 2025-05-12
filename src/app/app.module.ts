import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Material icon
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MobileViewComponent } from './about/mobile-view/mobile-view.component';
import { ProjectComponent } from './project/project.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    AboutComponent,
    SkillComponent,
    RecentWorkComponent,
    ContactComponent,
    NavigationBarComponent,
    MobileViewComponent,
    ProjectComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule, // Add it here
    MatInputModule, // Add it here
    MatCardModule,
    MatDividerModule,
    //Material icon
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
