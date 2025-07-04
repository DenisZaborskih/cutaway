import { Component } from '@angular/core';
import { Posts } from '../../../../core/interfaces/posts';
import { PostsService } from '../../services/posts.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.scss'
})
export class RecentPostsComponent {
  public recentPosts!: Posts[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res) => {
      this.recentPosts = res.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }).slice(0, 2);
      this.recentPosts.forEach(element => {
        if (element.text.length > 220) {
          let splittedText = element.text.split(' ');
          while (splittedText.toString().length > 220) {
            splittedText = splittedText.slice(0, splittedText.length - 1);
          }
          element.text = splittedText.join(' ') + '...';
        }
      });
    });
  }
}
