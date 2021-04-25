import { Component } from "@angular/core";

export interface Student {
  surname: string;
  name: string;
  patronymic: string;
  birth: string;
  rating: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  students: Student[] = [
    {
      surname: "Зимин",
      name: "Александр",
      patronymic: "Григорьевич",
      birth: "1990-05-03",
      rating: 4
    },
    {
      surname: "Бармин",
      name: "Алелексей",
      patronymic: "Владимирович",
      birth: "1998-03-21",
      rating: 2.1
    },
    {
      surname: "Рудков",
      name: "Василий",
      patronymic: "Павлович",
      birth: "1995-11-11",
      rating: 2.8
    },
    {
      surname: "Пантелеев",
      name: "Николай",
      patronymic: "Игоревич",
      birth: "1999-08-05",
      rating: 4.5
    },
    {
      surname: "Яковлев",
      name: "Николай",
      patronymic: "Петрович",
      birth: "1995-08-01",
      rating: 4
    },
  ];
  surname: string;
  name: string;
  patronymic: string;
  birth: string;
  check: boolean = true;
  search: string = "";
  condition: boolean = false;

  deleteStudent(iterStudent) {
    this.condition = true;
    if (confirm("Удалить студента?")) this.students.splice(iterStudent, 1);
    else return;
  }
}
// this.students.splice(iterStudent, 1);
