import Home from '../Components/Home';
import DashBoard from '../Components/DashBoard';
import CreatePost from '../Components/CreatePost';
import TopBar from '../Components/TopBar';

export default [
    {
        path: '/',
        element: <>
            <TopBar/>
            <Home/>
        </>
    },
    {
        path: '/dashboard',
        element: <>
            <TopBar/>
            <DashBoard/>
        </>
    },
    {
        path: '/createpost',
        element: <>
            <TopBar/>
            <CreatePost/>
        </>
    },
    {
        path: '*',
        element: <>
            <TopBar/>
            <Home/>
        </>
    }
]