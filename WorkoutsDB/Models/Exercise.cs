//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WorkoutsDB.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Exercise
    {
        public int Id { get; set; }
        public string WorkoutName { get; set; }
        public string PrimaryMuscle { get; set; }
        public string MuscleDescription { get; set; }
        public string WorkoutDescription { get; set; }
    }
}