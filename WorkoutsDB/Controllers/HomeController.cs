using WorkoutsDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace WorkoutsDB.Controllers
{
    public class HomeController : Controller
    {
        private ExerciseAndMusclesEntities db = new ExerciseAndMusclesEntities(); 
        
        
        public ActionResult Index()
        {

            return View("WorkoutReturn");
        }

        public ActionResult Details(string primaryMuscle, string searchString)
        {
            //genre search - making list for drop down
            var MuscleList = new List<string>();
            //LINQ query to db
            var MuscleQuery = from d in db.Exercises
                             orderby d.PrimaryMuscle
                             select d.PrimaryMuscle;
            MuscleList.AddRange(MuscleQuery);
            //add unique values to GenreList
            ViewBag.muscleType = new SelectList(MuscleList);

            //get all movies from db
            var eTL = from e in db.Exercises
                      select e;
            //if a genre search has been done, use LINQ to reduce list of
            //movies to only the ones from selected genre
            if (!String.IsNullOrEmpty(primaryMuscle))
            {
                eTL = eTL.Where(x => x.PrimaryMuscle == primaryMuscle);
            }

            //if a title search has been done, use LINQ reduce list of
            //movies to only the ones matching the search
            if (!String.IsNullOrEmpty(searchString))
            {
                eTL = eTL.Where(s => s.WorkoutName.Contains(searchString));
            }

            return View(eTL);

        }

        public ActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public ActionResult Create(Exercise exercise)
        {
            if (ModelState.IsValid)
            {

                db.Exercises.Add(exercise);
                db.SaveChanges();

                return RedirectToAction("Index");
            }

            return View(exercise);


        }

        //public ActionResult Edit()
        //{
            

        //    return View();
        //}

        public ActionResult Edit(int? id)
        {
            Exercise exercise = db.Exercises.Find(id);
            return View(exercise);

        }

        [HttpPost]
        public ActionResult Edit(Exercise exercise)
        {

            if (ModelState.IsValid)
            {
                db.Entry(exercise).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                return RedirectToAction("Index");

            }

            return View(exercise);

        }


        public ActionResult Delete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Exercise exercise = db.Exercises.Find(id);
            return View(exercise);

            if (exercise == null)
            {
                return HttpNotFound();
            }

            return View(exercise);

        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Exercise exercise = db.Exercises.Find(id);
            db.Exercises.Remove(exercise);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}