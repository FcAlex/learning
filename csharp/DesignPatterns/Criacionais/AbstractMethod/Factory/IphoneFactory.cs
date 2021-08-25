
namespace AbstractMethod.Factory
{
  public class IphoneFactory
  {
    CountryRulesAbstractFactory Rules { get; set; }

    public IphoneFactory(CountryRulesAbstractFactory rules)
    {
      Rules = rules;
    }

    public Iphone orderIphone(string geracao, string nivel) 
    {
      Iphone dispositivo = null;

      if(geracao.Equals("X") && nivel.Equals("standart"))
        dispositivo = new IphoneX(rules);
      else if(geracao.Equals("X") && nivel.Equals("highEnd"))
        dispositivo = new IphoneXSMax(rules);
      else if(geracao.Equals("11") && nivel.Equals("standart"))
        dispositivo = new Iphone11(rules);
      else if(geracao.Equals("11") && nivel.Equals("highEnd"))
        dispositivo = new Iphone11pro(rules);

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