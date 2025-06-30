import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('../app/features/home/pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "work",
        loadComponent: () => import('../app/features/work/pages/work/work.component').then(m => m.WorkComponent),
        children: [
            {
                path: ':slug',
                loadComponent: () => import('../app/features/work/pages/work-detail/work-detail.component').then(m => m.WorkDetailComponent)
            }
        ] 
    },
    {
        path: "blog",
        loadComponent: () => import('../app/features/blog/components/blog/blog.component').then(m => m.BlogComponent)
    }
];
