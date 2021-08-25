
namespace AbstractMethod.Model.Certificate
{
  public interface BrasilianCertificate : ICertificate
  {
    public string applyCertification()
    {
      return "\t - Calibrando conforme as regras brasileiras.";
    }
  }
}