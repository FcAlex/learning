using AbstractMethod.Factory;
using AbstractMethod.Model.Iphone;

namespace AbstractMethod
{
  public class Client
  {
    public static void Main()
    {
      CountryRulesAbstractFactory rules = new BrazilianRulesAbstractFactory();
      IphoneFactory iphoneFactory = new IphoneFactory();
      Iphone iphone = iphoneFactory.orderIphone("11", "highEnd");
    }
  }
}