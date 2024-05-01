import { Navigate, useRoutes } from 'react-router-dom';
import { EntryPage } from '@src/pages/EntryPage';

export const App = () =>
    useRoutes([
        { path: '/', element: <EntryPage /> },
        { path: '*', element: <Navigate to="/" /> },
    ]);
