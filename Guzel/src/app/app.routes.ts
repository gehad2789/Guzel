import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PostComponent } from './Components/post/post.component';
import { TermsCondComponent } from './Components/terms-cond/terms-cond.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { SubFormComponent } from './sub-form/sub-form.component';
import { CategoryComponent } from './Components/category/category.component';
import { AboutUsComponent } from './Layouts/about-us/about-us.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},//defult
    {path:'contact-us',component:ContactUsComponent},
    {path:'post',component:PostComponent},
    {path:'terms&conditions',component:TermsCondComponent},
    {path:'header',component:HeaderComponent},
    {path:'sub-form',component:SubFormComponent},
    {path:'category',component:CategoryComponent},
    {path:'post',component:PostComponent},
    {path:'about-us',component:AboutUsComponent},







];
