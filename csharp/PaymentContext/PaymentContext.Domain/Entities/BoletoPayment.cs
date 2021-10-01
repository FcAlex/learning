using System;

namespace PaymentContext.Domain.Entities
{
  public class BoletoPayment : Payment
  {

    public BoletoPayment(string boletoNumber, string barCode, string email, DateTime paidDate, DateTime expireDate, decimal total, string owner, decimal totalPaid, string address) : base(paidDate, expireDate, total, owner, totalPaid, address)
    {
      BoletoNumber = boletoNumber;
      BarCode = barCode;
      Email = email;
    }

    public string BoletoNumber { get; private set; }
    public string BarCode { get; private set; }
    public string Email { get; private set; }
  }
}