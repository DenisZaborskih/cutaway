import { Component } from '@angular/core';
import { GreetingsComponent } from "../../components/greetings/greetings.component";
import { RecentPostsComponent } from "../../components/recent-posts/recent-posts.component";
import { FeaturedWorksComponent } from "../../components/featured-works/featured-works.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent, RecentPostsComponent, FeaturedWorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
