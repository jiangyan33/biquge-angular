import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() contentInfo;

  questionInfo;


  visible = false;
  visibleAnimate = false;

  constructor(private formBuilder: FormBuilder, private indexService: IndexService, ) {
  }

  ngOnInit() {
    this.setFormData();
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
      this.indexService.addContentQuestion(params).subscribe(result => {
        if (result['success'] === 1) {
          window.alert('错误信息提交成功');
          // 清空数据
          this.setFormData();
        }
        if (result['success'] === 2) {
          window.alert(result['message']);
          // 清空数据
          this.setFormData();
        }
      });
    }
  }

  setFormData() {
    //初始化form表单中的内容
    this.questionInfo = this.formBuilder.group({
      name: undefined,
      bookId: this.contentInfo.novel_id,
      chapterId: this.contentInfo.id,
      linkInformation: undefined
    });
  }
}
