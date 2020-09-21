import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// 404页面
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  src: string;
  href: string;
  delay: number;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.src = 'assets/images/err.gif';
    this.href = '/';
    this.delay = 5;
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
