using AbstractMethod.Model.Certificate;
using AbstractMethod.Model.Packing;

namespace AbstractMethod.Factory
{
  public interface CountryRulesAbstractFactory
  {
    ICertificate GetCertificate();
    IPacking GetPacking();
  }
}