using Microsoft.VisualStudio.TestTools.UnitTesting;
using PaymentContext.Domain.Entities;

namespace PaymentContext.Test.Entities
{
  [TestClass]
  public class StudentTest
  {
    [TestMethod]
    public void AdicionarAssinatura()
    {
      var student = new Student("Rafael", "Silva", "12345678", "rafael@example.com");
      var subscription = new Subscription(null);
      student.AddSubscription(subscription);
    }
  }
}