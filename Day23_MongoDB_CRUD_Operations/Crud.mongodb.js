use("School")

// db.createCollection("Teachers")

//  Insertion

// db.Teachers.insertOne({
//     "name"  : "Sameer Hussain",
//     "course" : "MERN",
//     "price" : 10000
// })

// db.Teachers.insertMany(
//     [
//         {
//           "name": "John Doe",
//           "course": "React Native",
//           "price": 12000
//         },
//         {
//           "name": "Jane Smith",
//           "course": "Node.js",
//           "price": 8000
//         },
//         {
//           "name": "Alex Johnson",
//           "course": "MongoDB",
//           "price": 9000
//         },
//         {
//           "name": "Emily Brown",
//           "course": "Express.js",
//           "price": 8500
//         },
//         {
//           "name": "Michael Wilson",
//           "course": "Angular",
//           "price": 11000
//         },
//         {
//           "name": "Sophia Martinez",
//           "course": "Vue.js",
//           "price": 9500
//         },
//         {
//           "name": "William Anderson",
//           "course": "GraphQL",
//           "price": 10500
//         },
//         {
//           "name": "Olivia Garcia",
//           "course": "Django",
//           "price": 11500
//         },
//         {
//           "name": "James Hernandez",
//           "course": "Spring Boot",
//           "price": 12500
//         },
//         {
//           "name": "Isabella Lopez",
//           "course": "ASP.NET Core",
//           "price": 13000
//         }
//       ]
          
//     )


// Read Operations:

let teachers = db.Teachers.findOne({"name" : "John Doe"})
// let findArr = db.Teachers.find({"price" : 12000})

// console.log(findArr.toArray()); // cannot be done for one document
// console.log(findArr.count());


//  Update Operations
// db.Teachers.updateMany( {"price" : 13000 } , {$set : {"price" : "free"}})
// db.Teachers.updateOne( {"price" : 13000 } , {$set : {"price" : "free"}})


// Delete Operationss
db.Teachers.deleteOne( {"price" : 8000 })
db.Teachers.deleteMany( {"price" : "free" })