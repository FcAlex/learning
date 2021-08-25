using AbstractMethod.Factory;

namespace AbstractMethod.Model.Iphone
{
  public class Iphone11 : Iphone
  {
    public Iphone11(CountryRulesAbstractFactory rules) : base(rules) { }

    public void getHardware() {
      Console.WriteLine("Listando o hardware do iphone 11...");
    }
  }
}