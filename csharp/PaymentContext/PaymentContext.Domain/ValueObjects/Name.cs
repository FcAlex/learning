
using PaymentContext.Shared.ValueObjects;

namespace PaymentContext.Domain.ValueObjects
{
  public class Name : ValueObject
  {
    public Name(string firstName, string lastName)
    {
      FirstName = firstName;
      LastName = lastName;

      if (string.IsNullOrEmpty(FirstName))
      {
        AddNotification("Name.FirstName", "FirstName is required");
      }
    }

    public string FirstName { get; private set; }
    public string LastName { get; private set; }
  }
}
