import React from 'react';

const Home = React.lazy(() => import('./views/Home/home'));
const News = React.lazy(() => import('./views/News/newsDescription'));
const ComponentGroup = React.lazy(() => import('./views/ComponentGroup/componentGroup'));
const Category = React.lazy(() => import('./views/News/newsCategory'));
const CategoryDescription = React.lazy(() => import('./views/News/categoryDescription'));
const Contact = React.lazy(() => import('./views/Contact/contact'));
const routes = [
    { path: '/',  exact: true, name: 'Home', component: Home },
    { path: '/components',  name: 'Components', component: ComponentGroup },
    { path: '/category', exact: true,  name: 'Components', component: Category },
    { path: '/category/:title', exact: true,  name: 'Components', component: CategoryDescription },
    { path: '/news/:title', exact: true,  name: 'Components', component: News },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;