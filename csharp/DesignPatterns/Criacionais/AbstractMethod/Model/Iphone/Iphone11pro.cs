using AbstractMethod.Factory;

namespace AbstractMethod.Model.Iphone
{
  public class Iphone11pro : Iphone
  {
    public Iphone11pro(CountryRulesAbstractFactory rules) : base(rules) { }

    public void getHardware() {
      Console.WriteLine("Listando o hardware do iphone 11 Pro...");
    }
  }
}