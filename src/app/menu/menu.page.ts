import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  public selectedIndex = 0;
  appPages = [
    {
      title: "Product",
      url: "/menu/product",
      icon: "mail",
    },
    {
      title: "Product Detail",
      url: "/menu/productdetail",
      icon: "paper-plane",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
