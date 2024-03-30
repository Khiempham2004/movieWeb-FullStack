export const asyncCatch = (fn) =>
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    }
