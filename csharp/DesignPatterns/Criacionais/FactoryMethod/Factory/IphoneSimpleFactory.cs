using FactoryMethod.Model;

namespace FactoryMethod.Factory
{
  public class IphoneSimpleFactory
  {
    public static Iphone orderIphone(string geracao, string nivel) 
    {
      Iphone dispositivo = null;

      if(geracao.Equals("X") && nivel.Equals("standart"))
        dispositivo = new IphoneX();
      else if(geracao.Equals("X") && nivel.Equals("highEnd"))
        dispositivo = new IphoneXSMax();
      else if(geracao.Equals("11") && nivel.Equals("standart"))
        dispositivo = new Iphone11();
      else if(geracao.Equals("11") && nivel.Equals("highEnd"))
        dispositivo = new Iphone11pro();

      if(dispositivo is not null) 
      {
        dispositivo.getHardware();
        dispositivo.assemble();
        dispositivo.certificates();
        dispositivo.pack();
      }

      return dispositivo;
    }
  }
}