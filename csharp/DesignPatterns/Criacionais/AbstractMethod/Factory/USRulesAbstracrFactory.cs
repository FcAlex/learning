
using AbstractMethod.Model.Certificate;
using AbstractMethod.Model.Packing;

namespace AbstractMethod.Factory
{
  public class USRulesAbstractFactory : CountryRulesAbstractFactory
  {
    public Certificate GetCertificate() 
    {
      return new USCertificate();
    }

    public Packing GetPacking()
    {
      return new USPacking();
    }
  }
}