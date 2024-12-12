import express from "express";
import client from "../../config.js";

const router = express.Router();

router
  .route("/students")
  .get((req, res) => {
    client.query("SELECT * from students", (err, result) => {
      if (err) {
        console.log("get student query error", err);
        return res.status(500).send("INTERNAL SERVER ERROR");
      }
      const allStudents = result.rows;
      return res.status(200).json(allStudents);
    });
  })
  .post((req, res) => {
    const { name, city } = req.body;

    client.query(
      `INSERT INTO students (name, city) VALUES (UPPER($1), UPPER($2)) RETURNING *;`,
      [name, city],
      (err, result) => {
        if (err) {
          console.log("post student query error:-", err);
          return res.status(500).send("INTERNAL SERVER ERROR");
        }

        console.log(result);
        return res.status(200).json(result);
      }
    );
  });

  //get student by id and delete
router
  .route("/students/:id")
  .get((req, res) => {
    const { id } = req.params;

    client.query(
      `SELECT * from students WHERE roll_no = ${id}`,
      (err, result) => {
        if (err) {
          console.log("get student by id query error", err);
          return res.status(500).send("INTERNAL SERVER ERROR");
        }
        const student = result.rows;
        return res.status(200).json(student);
      }
    );
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    console.log("ID", id);

    // return console.log(courses.rows);

    //it's a foreign key so first delete it from sales than from students, only then it'll get deleted.
    client.query(
      `DELETE FROM course_sales WHERE student_id = $1`,
      [id],
      (err, result) => {
        if (err) {
          console.log(`ERROR DELETING SALES DATA-`, err);
        } else {
          console.log(`SALES DATA DELETED-`, result.rows);
        }
      }
    );

    //delete students data
    client.query(
      `DELETE FROM students WHERE roll_no = $1`,
      [id],
      (err, result) => {
        if (err) {
          console.log("Delete query failed:", err);
          return res.status(500).send("INTERNAL SERVER ERROR");
        }

        if (result.rowCount === 0) {
          return res.status(404).json({ message: "Student not found" });
        }

        return res
          .status(200)
          .json({ message: "Student deleted successfully" });
      }
    );
  });

  //get sales query
  router.route("/sales").get((req, res) => {
      client.query("SELECT * from course_sales", (err, result) => {
          if(err){
            console.log('get sales query error-', err);
            return res.status(500).send("INTERNAL SERVER ERROR")
          }
          const allSales = result.rows;
          return res.status(200).json(allSales);
      })
  })

  
router.route("/courses").get((req, res) => {
  client.query("SELECT * from courses", (err, result) => {
    if (err) {
      console.log("get orders query error", err);
      return res.status(500).send("INTERNAL SERVER ERROR");
    }

    const courses = result.rows;
    return res.status(200).json(courses);
  });
});

export default router;
