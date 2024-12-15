import {Routes} from '@angular/router';
import {WordleComponent} from './wordle/wordle.component';
import {PersonQuizComponent} from './person-quiz/person-quiz.component';
import {SkatteJagtComponent} from './skatte-jagt/skatte-jagt.component';
import {ResultComponent} from './result/result.component';
import {WelcomeComponent} from './welcome/welcome.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'wordle', component: WordleComponent},
  {path: 'person-quiz', component: PersonQuizComponent},
  {path: 'skatte-jagt', component: SkatteJagtComponent},
  {path: 'result', component: ResultComponent},
];
