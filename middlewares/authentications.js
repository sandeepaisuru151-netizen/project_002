import jwt from "jsonwebtoken";

export default function authenticationUser(req, res, next) {
    const header = req.header("Authorization")

    if (header != null) {

        const token = header.replace("Bearer ", "")
       // console.log(token)

        jwt.verify(token, "MyFirstWebProjectSkyRec",
            (error, decoded) => {

                if (error != null) {
                    res.json({
                        message: "Invalid token Please login again"
                    })
                } else {
                    req.user = decoded
                    next()
                }
            }
        )

    } else {
        next()
    }
}