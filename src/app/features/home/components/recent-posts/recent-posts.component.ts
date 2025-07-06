import { Component } from '@angular/core';
import { Posts } from '../../../../core/interfaces/posts.interface';
import { PostsService } from '../../services/posts.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './recent-posts.component.html',
  styleUrls: [
    './recent-posts.component.scss',
    '../../styles/common.scss']
})
export class RecentPostsComponent {
  public recentPosts: Posts[] = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res) => {
      this.recentPosts = res.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }).slice(0, 2);
    });
  }
}
