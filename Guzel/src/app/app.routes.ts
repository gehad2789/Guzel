import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PostComponent } from './Components/post/post.component';
import { TermsCondComponent } from './Components/terms-cond/terms-cond.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { HeaderComponent } from './Layouts/header/header.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},//defult
    {path:'contact-us',component:ContactUsComponent},
    {path:'post',component:PostComponent},
    {path:'terms&conditions',component:TermsCondComponent},
    {path:'subscriptionForm',component:SubscriptionFormComponent},
    {path:'header',component:HeaderComponent},


];
