
namespace AbstractMethod.Model.Packing
{
  public interface BrasilianPacking : IPacking
  {
    public string pack()
    {
      return "\t - Empacotando segundo as regras brasileiras";
    }
  }
}