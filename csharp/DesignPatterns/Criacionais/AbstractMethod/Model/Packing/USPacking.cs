
namespace AbstractMethod.Model.Packing
{
  public interface USPacking : IPacking
  {
    public string pack()
    {
      return "\t - Empacotando segundo as regras americanas";
    }
  }
}