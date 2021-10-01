using System;
using PaymentContext.Domain.ValueObjects;

namespace PaymentContext.Domain.Entities
{
  public class PayPalPayment : Payment
  {
    public PayPalPayment(DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, Address address, string transactionCode, Document document) : base(paidDate, expireDate, total, owner, totalPaid, address, document)
    {
      TransactionCode = transactionCode;
    }

    public string TransactionCode { get; set; }
  }
}
