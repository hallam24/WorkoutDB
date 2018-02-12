using WorkoutsDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WorkoutsDB.API
{
    public class WorkoutController : ApiController
    {
        ExerciseAndMusclesEntities _ctx = null; // SchoolMangementEntities is data model name  

        public WorkoutController()
        {
            _ctx = new ExerciseAndMusclesEntities();
        }

        public List<Exercise> GetExercises()
        {
            List<Exercise> Exercises = null;
            try
            {
                Exercises = _ctx.Exercises.ToList();
            }
            catch
            {
                Exercises = null;
            }
            return Exercises;
        }

    }
}
