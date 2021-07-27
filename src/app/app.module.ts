import { CourseModules } from './model/course.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
;
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importei CurselistCompenent no modulo, sempre fazer isso quando criar component ou pagina
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModules,
    RouterModule.forRoot([

      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
