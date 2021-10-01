using System;

namespace PaymentContext.Domain.Entities
{
  public class PayPalPayment : Payment
  {
    public PayPalPayment(DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, string address, string transactionCode) : base(paidDate, expireDate, total, owner, totalPaid, address)
    {
      TransactionCode = transactionCode;
    }

    public string TransactionCode { get; set; }
  }
}