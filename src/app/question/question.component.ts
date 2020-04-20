import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import APIResult from '../entity';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() contentInfo: { novel_id: any; id: any; };

  questionInfo: FormGroup;

  visible = false;
  visibleAnimate = false;

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.initFormData();
  }

  show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('question')) {
      this.hide();
    }
  }

  submit() {
    // 清除模态框
    this.hide();
    let params = this.questionInfo.value;

    if (params.name && params.linkInformation) {
      this.http.post(`${this.message.baseUrl}Feature/addContentQuestion.ac`, params).toPromise().then((result: APIResult) => {
        if (result.code === 200) {
          window.alert('感谢您的反馈');
        }
      }).catch((err: any) => console.log(err));
    }
  }
  initFormData() {
    this.questionInfo = new FormGroup({
      name: new FormControl(''),
      bookId: new FormControl(''),
      chapterId: new FormControl(''),
      linkInformation: new FormControl(''),
    });
  }
}
