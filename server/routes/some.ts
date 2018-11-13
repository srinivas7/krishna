import { Request, Response, Router } from "express";
import * as uuid from "uuid";

const someRouter: Router = Router();


someRouter.get("/some", (request: Request, response: Response) => {
    console.log("at some express js...")
    return response.json({
        text: "Hello Angular 2",
        title: "Greetings.",
      });

});

export { someRouter };
