using System;

namespace PaymentContext.Domain.Entities
{
  public abstract class Payment
  {
    public Payment(DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, string address)
    {
      Number = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 10).ToUpper();
      PaidDate = paidDate;
      ExpireDate = expireDate;
      Total = total;
      Owner = owner;
      TotalPaid = totalPaid;
      Address = address;
    }

    public string Number { get; private set; }
    public DateTime PaidDate { get; private set; }
    public DateTime ExpireDate { get; private set; }
    public decimal Total { get; private set; }
    public string Owner { get; private set; }
    public decimal TotalPaid { get; private set; }
    public string Address { get; private set; }
  }
}