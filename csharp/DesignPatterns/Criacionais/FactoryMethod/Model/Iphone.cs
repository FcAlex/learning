
namespace FactoryMethod.Model
{
  public abstract class Iphone 
  {
    public void assemble()
    {
      Console.WriteLine("Configurando o hardware");
    }

    public void certificates()
    {
      Console.WriteLine("Carregando os certificados");
    }

    public void pack()
    {
      Console.WriteLine("Empacotando dispositivo");
    }

    public abstract void getHardware();
  }
}