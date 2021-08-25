using AbstractMethod.Factory;

namespace AbstractMethod.Model.Iphone
{
  public abstract class Iphone 
  {
    CountryRulesAbstractFactory Rules { get; set; }

    public Iphone(CountryRulesAbstractFactory rules) 
    {
      Rules = rules;
    }

    public void assemble()
    {
      Console.WriteLine("Configurando o hardware");
    }

    public void certificates()
    {
      Console.WriteLine("Carregando os certificados");
      Console.WriteLine(Rules.GetCertificate().applyCertification());
    }

    public void pack()
    {
      Console.WriteLine("Empacotando dispositivo");
      Console.WriteLine(Rules.GetPacking().pack());
    }

    public abstract void getHardware();
  }
}