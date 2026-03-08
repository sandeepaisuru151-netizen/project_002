import Student from "../models/students.js";

export function createStudent(req,res){

    if(req.user == null){

        res.status(403).json({
            message : "unauthorised accsess you need to login before creating student"
        })
        return
    }

    if(!req.user.isAdmin){

        res.json({
            messaage : "only admin can create students"
        })

        return
    }

    const newStudent = new Student({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
    });
    newStudent.save().then(
        () => {
            res.json({
                messaage: "Student created successfully",
            }
            );
        }
    );
}

export function getStudent(req,res){
    Student.find().then(
        (students) => {
            res.json(students)
            console.log("get request received")

        }
    )
}

export function putStudent(req,res){
    console.log(req.body)
    console.log("The put request is recived...")
    res.json(
        {
            msssage: "Good morning" + req.body.name,
        }
    )
} 