
namespace AbstractMethod.Model.Certificate
{
  public interface USCertificate : ICertificate
  {
    public string applyCertification()
    {
      return "\t - Calibrando conforme as regras americanas.";
    }
  }
}