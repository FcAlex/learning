using System;
using PaymentContext.Domain.ValueObjects;

namespace PaymentContext.Domain.Entities
{
  public class CreditCardPayment : Payment
  {
    public CreditCardPayment(string cardHolderName, string cardNumber, string lastTransactionNumber, DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, Address address, Document document) : base(paidDate, expireDate, total, owner, totalPaid, address, document)
    {
      CardHolderName = cardHolderName;
      CardNumber = cardNumber;
      LastTransactionNumber = lastTransactionNumber;
    }

    public string CardHolderName { get; set; }
    public string CardNumber { get; set; }
    public string LastTransactionNumber { get; set; }
  }
}
