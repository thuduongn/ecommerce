import { lazy } from 'react';
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'));
const Category = lazy(()=> import('../../views/admin/Category'));
const AddProduct = lazy(()=> import('./../../views/admin/AddProduct'));
const EditProduct = lazy(()=> import('./../../views/admin/EditProduct'));
const Products = lazy(()=> import('./../../views/admin/Products'));

export const adminRoutes = [
    {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/category',
        element: <Category />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/add-product',
        element : <AddProduct/>,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/edit-product/:productId',
        element : <EditProduct/>,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/products',
        element : <Products/>,
        role: 'admin'
    },
]