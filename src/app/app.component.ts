import { Component } from "@angular/core";

export interface User {
  name: string;
  role: string;
  isActive: boolean;
  status: string;
  userId: string;
}
export interface Message {
  message: string;
  sender: string;
  receiver: string;
  timestamp: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "XpertLandProject";
  users: User[] = [
    {
      name: "himanshu",
      status: "I am good",
      userId: "him@gmail.com",
      isActive: false,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "ram@gmail.com",
      isActive: true,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "rohit@gmail.com",
      isActive: false,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "kolk@gmail.com",
      isActive: true,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "su@gmail.com",
      isActive: false,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "mum@gmail.com",
      isActive: true,
      role: "student",
    },
    {
      name: "himanshu",
      status: "I am good",
      userId: "ban@gmail.com",
      isActive: false,
      role: "student",
    },
  ];

  currentChating: User;

  selectedChat(user: User) {
    this.currentChating = user;
  }
  messages: Message[] = [
    {
      message: "Hi",
      sender: "himanshu@gmail.com",
      receiver: "ram@gmail.com",
      timestamp: "22:40",
    },
    {
      message: "Hi",
      sender: "ram@gmail.com",
      receiver: "himanshu@gmail.com",
      timestamp: "22:40",
    },
  ];

  loginUser: User = {
    name: "himanshu",
    status: "I am good",
    userId: "himanshu@gmail.com",
    isActive: true,
    role: "student",
  };
}
