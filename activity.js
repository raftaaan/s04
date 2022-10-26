DEL ROSARIO, JEMIAH KIM B.
BSIT-4A CEU MALOLOS

1. Find courses whose instructor is "Sir Alvin" and is priced greater than or equal to 20000
		-show only its name and price

QUERY USED:
db.courses.find({$and: [{"instructor": "Sir Alvin"}, {"price": {$gte: 20000}}]},
{_id: 0, isActive: 0, instructor: 0})

RESULT:
/* 1 */
{
    "name" : "HTML Basics",
    "price" : 20000
}

/* 2 */
{
    "name" : "CSS 101 + Flexbox",
    "price" : 21000
}


2. Find courses whose instructor is "Ma'am Tine" and is inactive.
		-show only its name and price

QUERY USED:
db.courses.find({ $and: [{"instructor": "Ma'am Tine"}, {"isActive": {$eq: true}}]},
{_id: 0, isActive: 0, instructor: 0})

RESULT:
/* 1 */
{
    "name" : "Javascript 101",
    "price" : 32000
}

/* 2 */
{
    "name" : "Git 101, IDE and CLI",
    "price" : 19000
}


3. Find courses with letter 'r' in its name and has a price lower than or equal to 25000

QUERY USED:
db.courses.find({ $and: [{"name": /R/i}, {"price": {$lte: 25000}}]})

RESULT:
/* 1 */
{
    "_id" : ObjectId("6332bbbb39147286467fd241"),
    "name" : "React.Js 101",
    "price" : 25000,
    "isActive" : true,
    "instructor" : "Ma'am Miah"
}


4. Update all courses with price less than 21000 to inactive.

QUERY USED:
db.courses.updateMany({"price": {$lt: 21000}}, {$set: {"isActive": false}})

RESULT:
/* 1 */
{
    "acknowledged" : true,
    "matchedCount" : 2.0,
    "modifiedCount" : 2.0
}


5. Delete all courses with price greater than or equal to 25000.

QUERY USED:
db.courses.deleteMany({"price": {$gte: 25000}})

RESULT:
/* 1 */
{
    "acknowledged" : true,
    "deletedCount" : 2.0
}