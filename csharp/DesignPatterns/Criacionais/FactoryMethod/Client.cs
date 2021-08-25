using FactoryMethod.Factory;

namespace FactoryMethod 
{
  public class Client 
  {
    public static void Main() 
    {
      Iphone iphone = IphoneSimpleFactory.orderIphone("X", "standard");
    }
  }
}