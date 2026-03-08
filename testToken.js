import jwt from "jsonwebtoken";

const payload = {
    email: "test@example.com",
    firstName: "Test",
    lastName: "User",
    isAdmin: true,
    isBlock: false,
    isEmailverified: true,
    image: ""
}

const token = jwt.sign(payload, "MyFirstWebProjectSkyRec", { expiresIn: "24h" });
console.log(token);
