import { MenuPage } from "./menu.page";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../tabs/tabs.module").then((m) => m.TabsPageModule),
      },
      {
        path: "product",
        loadChildren: () =>
          import("../product/product.module").then((m) => m.ProductPageModule),
      },
      {
        path: "productdetail",
        loadChildren: () =>
          import("../product-detail/product-detail.module").then(
            (m) => m.ProductDetailPageModule
          ),
      },
      {
        path: "productdetail/detail",
        loadChildren: () =>
          import("../product-detail/product-detail.module").then(
            (m) => m.ProductDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
