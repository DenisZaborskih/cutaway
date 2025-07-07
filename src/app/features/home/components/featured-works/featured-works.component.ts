import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorksShort } from '../../../../core/interfaces/works.interface';
import { WorksService } from '../../services/works.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-works',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './featured-works.component.html',
  styleUrls: [
    './featured-works.component.scss',
    '../../styles/common.scss'
  ]
})
export class FeaturedWorksComponent implements OnInit{
  public worksShort: WorksShort[] = [];

  constructor(
    private worksService: WorksService,
  ){}

  ngOnInit(): void {
    this.worksService.getWorksShort().subscribe(res => {
      this.worksShort = res.sort((a, b) => {
        return b.year - a.year;
      }).slice(0, 3);
    })
  }

}
