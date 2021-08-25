using AbstractMethod.Model.Certificate;
using AbstractMethod.Model.Packing;

namespace AbstractMethod.Factory
{
  public class BrazilianRulesAbstractFactory : CountryRulesAbstractFactory
  {
    public Certificate GetCertificate() 
    {
      return new BrazilianCertificate();
    }

    public Packing GetPacking()
    {
      return new BrazilianPacking();
    }
  }
}