import v1 from '../versioning/v1';

const router = (app) => {
    app.use('api/v1', v1);
}

export default router;