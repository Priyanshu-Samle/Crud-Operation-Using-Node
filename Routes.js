import express from "express";

import { insert,read,update,deleteUser,readOne } from "../Controller/userController.js";
import e from "express";


const rout = express();

rout.post("/insert",insert);
rout.get("/fetch",read);
rout.put("/update/:id",update);
rout.delete("/delete/:id",deleteUser);
rout.get("/fetchOne/:id",readOne);
export default rout;