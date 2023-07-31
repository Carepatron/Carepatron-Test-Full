using System;
namespace api.Utilities
{
    public static class ChaosUtility
    {
        public static void RollTheDice()
        {
            // Generate a random number  
            var random = new Random();

            // A random number 0 or 1
            var failureDice = random.Next(2);

            if (failureDice < 1) throw new Exception("Chaos created - sorry");
        }
    }
}

