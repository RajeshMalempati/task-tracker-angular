import { Component, OnInit } from '@angular/core';
import  {TaskService} from "./../task.service";
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private taskService: TaskService) {

    taskService.taskLists.map((item,i) => {
      console.log(i);
    });
  }

  ngOnInit() {
  }

}
