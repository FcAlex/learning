using System;
					
public class Program
{
	public static void Main()
	{
		var personBuilder = new PersonBuilder();
		var person1 = personBuilder.SetName("Alex").SetAge(21).GetResult();
		personBuilder.NewPerson();
		var person2 = personBuilder.SetName("João").SetAge(35).GetResult();
		
		Console.WriteLine(person1.name);
		Console.WriteLine(person2.name);
	}
}

public class Person {
	public string name { get; set; }
	public int age { get; set; }
}

public class PersonBuilder {
	private Person Person = new Person();
	
	public void NewPerson() {
		Person = new Person();
	}
	
	public PersonBuilder SetName(string name) {
		Person.name = name;
		return this;
	}
	
	public PersonBuilder SetAge(int age) {
		Person.age = age;
		return this;
	}
	
	public Person GetResult() {
		return Person;
	}
}