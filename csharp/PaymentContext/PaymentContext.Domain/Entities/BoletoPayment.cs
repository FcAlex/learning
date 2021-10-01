using System;
using PaymentContext.Domain.ValueObjects;

namespace PaymentContext.Domain.Entities
{
  public class BoletoPayment : Payment
  {

    public BoletoPayment(string boletoNumber, string barCode, Email email, DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, Address address, Document document) : base(paidDate, expireDate, total, owner, totalPaid, address, document)
    {
      BoletoNumber = boletoNumber;
      BarCode = barCode;
      Email = email;
    }

    public string BoletoNumber { get; private set; }
    public string BarCode { get; private set; }
    public Email Email { get; private set; }
  }
}
