using System;
					
public class Program
{
	public static void Main()
	{
		ConcreteCreator creator = new ConcreteCreator();
		Product product = creator.FactoryMethod();
		product.SayHi();
		creator.CreateAndShow();
	}	
}

public interface Product {
	void SayHi();
}

public class ConcreteProduct: Product {
	public void SayHi() {
		Console.WriteLine("Hi");
	}
}

public abstract class Creator {
	public abstract Product FactoryMethod();
	
	public void CreateAndShow() {
		Product product = this.FactoryMethod();
		Console.log(product);
	}
}

public class ConcreteCreator: Creator {
	public override Product FactoryMethod() {
		return new ConcreteProduct();
	}
}
		