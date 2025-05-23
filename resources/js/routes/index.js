import dashboard from "../views/dashboard";
import Category from "../views/product/Category";
import SubCategory from "../views/product/SubCategory";
import Product from "../views/product/Product";

const route = [
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: dashboard,
        meta: {pageTitle: 'Dashboard', dataUrl : 'api/dashboard'}
    },
    {
        path: '/admin/category',
        name : 'category',
        component: Category,
        meta: {pageTitle: 'Category List', dataUrl : 'api/categories'}
    },
    {
        path: '/admin/sub_category',
        name : 'sub_category',
        component: SubCategory,
        meta: {pageTitle: 'Sub Category List', dataUrl : 'api/sub_categories'}
    },
    {
        path: '/admin/product',
        name : 'product',
        component: Product,
        meta: {pageTitle: 'Product List', dataUrl : 'api/product'}
    },
];


export default route;