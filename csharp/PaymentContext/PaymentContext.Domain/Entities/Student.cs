using System;
using System.Collections.Generic;
using System.Linq;
using Flunt.Validations;
using PaymentContext.Domain.ValueObjects;
using PaymentContext.Shared.Entities;

namespace PaymentContext.Domain.Entities
{

  public class Student : Entity
  {
    private IList<Subscription> _subscriptions;

    public Student(Name name, Document document, Email email)
    {
      Name = name;
      Document = document;
      Email = email;
      _subscriptions = new List<Subscription>();

      AddNotifications(name, document, email);
    }

    public Name Name { get; set; }
    public Document Document { get; private set; }
    public Email Email { get; private set; }
    public string Address { get; private set; }
    public IReadOnlyCollection<Subscription> Subscriptions { get => _subscriptions.ToArray(); }

    public void AddSubscription(Subscription subscription)
    {
      var hasSubscriptionActive = _subscriptions.Any(sub => sub.Active);

      AddNotifications(new Contract<Student>()
        .Requires()
        .IsFalse(hasSubscriptionActive, "Student.Subscriptions", "Você já tem uma assinatura ativa")
      );
    }
  }
}
