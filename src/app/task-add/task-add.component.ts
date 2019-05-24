import { Component, OnInit } from '@angular/core';
import {TaskService} from "./../task.service";
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {


  task = {
    name:"",
    date:"",
    assigned:""
  }

  isValidate =true;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }


  addTask(){
    console.log("add task called");

    const {name , date , assigned} = this.task;

    if(name != '' && date!='' && assigned != ''){

          this.isValidate =true;
          this.taskService.addTask(this.task);

          this.task = {
            name:"",
            date:"",
            assigned:""
          }

    }else{
      this.isValidate = false;
    }


  }
}
