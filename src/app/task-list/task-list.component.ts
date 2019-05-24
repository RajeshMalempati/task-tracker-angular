import { Component, OnInit ,Input} from '@angular/core';
import  {TaskService} from "./../task.service";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() task;
  @Input() index;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  removeTask(){
    this.taskService.removeTask(this.index);
  }

}
