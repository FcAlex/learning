using AbstractMethod.Factory;

namespace AbstractMethod.Model.Iphone
{
  public class IphoneXSMax : Iphone
  {
    public IphoneXSMax(CountryRulesAbstractFactory rules) : base(rules) { }
    public void getHardware() {
      Console.WriteLine("Listando o hardware do iphone XS Max...");
    }
  }
}