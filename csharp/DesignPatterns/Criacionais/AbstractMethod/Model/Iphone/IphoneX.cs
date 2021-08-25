using AbstractMethod.Factory;

namespace AbstractMethod.Model.Iphone
{
  public class IphoneX : Iphone
  {
    public IphoneX(CountryRulesAbstractFactory rules) : base(rules) { }

    public void getHardware() {
      Console.WriteLine("Listando o hardware do iphone X...");
    }
  }
}